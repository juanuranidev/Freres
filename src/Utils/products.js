export const mapProducts = (products) => {
  return products.map((prod) => ({ id: prod.id, ...prod.data() }));
};
