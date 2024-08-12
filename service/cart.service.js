import { Cart } from "../entities/cart.entities.js";

//post-create
async function addProductToCart(data) {
  return await Cart.create(data).go();
}

async function deleteProductInCart(id) {
  await Cart.delete({ userId: id }).go();

  //const totalPrice = await calculateTotalPrice(products);
}

async function getProductByIdCart(id) {
  return await Cart.get({ userId: id }).go();
}

async function getCarts() {
  return await Cart.scan.go();
}

// async function getProduct() {
//   return await Products.scan.go();
// }
export { addProductToCart, deleteProductInCart, getProductByIdCart, getCarts };
