import { murmurhash } from "./utils/murmurhash.js";

// export type FeatureFlagName = keyof typeof FEATURE_FLAGS;

// type FeatureFlagRule = {
//   percentageOfUsers?: number;
//   userRoles?: UserRole[];
// } & (
//   | {
//       percentageOfUsers: number;
//     }
//   | { userRoles: UserRole[] }
// );

export const FEATURE_FLAGS = {
  TEST_NEW_PRODUCTS_QUERY: true,
  ADVANCED_ANALYTICS: false,
  DISABLED_FEATURE: false,
  EXPERIMENTAL_FEATURE: [
    {
      userRoles: ["tester"],
      percentageOfUsers: 0.5,
    },
  ],
  MULTIPLE_ALLOWANCES: [
    { percentageOfUsers: 0.25, userRoles: ["user"] },
    { userRoles: ["admin", "tester"] },
  ],
};

export function canViewFeature(featureName, user) {
  const rules = FEATURE_FLAGS[featureName];
  if (typeof rules === "boolean") return rules;
  return rules.some((rule) => checkRule(rule, featureName, user));
}

function checkRule({ userRoles, percentageOfUsers }, featureName, user) {
  return (
    userHasValidRole(userRoles, user.role) &&
    userIsWithinPercentage(featureName, percentageOfUsers, user.id)
  );
}

function userHasValidRole(allowedRoles, userRole) {
  return allowedRoles == null || allowedRoles.includes(userRole);
}

const MAX_UINT_32 = 4294967295;
function userIsWithinPercentage(featureName, allowedPercent, flagId) {
  if (allowedPercent == null) return true;

  return murmurhash(`${featureName}-${flagId}`) / MAX_UINT_32 < allowedPercent;
}
