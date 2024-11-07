export function sql() {
  return {
    query: {
      products: {
        findMany: () => [{ id: 1 }],
      },
    },
    select: (cols) => ({
      from: (table) => [{ id: 1 }],
    }),
  };
}
