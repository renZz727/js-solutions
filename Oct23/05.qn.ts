type Product = { id: number; name: string; price: number; inStock: boolean };
function products(product: Product): string {
  return `product [${product.id}]: ${product.name} costs ${product.price}`;
}

let product1: Product = {
  id: 1,
  name: "pen",
  price: 10,
  inStock: true,
};

console.log(products(product1));
