import { canViewFeature } from "./featureFlags.js";
import { getUser } from "./utils/getUser.js";

document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll("[data-feature-flag]");
  features.forEach((card) => {
    const feature = card.getAttribute("data-feature-flag");
    if (!canViewFeature(feature, getUser())) {
      card.style.display = "none";
    }
  });
});
