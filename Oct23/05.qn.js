function products(product) {
    return "product [".concat(product.id, "]: ").concat(product.name, " costs ").concat(product.price);
}
var product1 = {
    id: 1,
    name: "pen",
    price: 10,
    inStock: true,
};
console.log(products(product1));
