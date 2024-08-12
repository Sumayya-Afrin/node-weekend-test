import { Cart } from "../entities/cart.entities.js";
import { Orders } from "../entities/orders.entity.js";
import { v4 as uuidv4 } from "uuid";

//post-create
async function createOrder(data) {
  const cartData = await Cart.query.userId(userId).go();
  const CartItems = cartData.items[0]?.products || [];
  const totalPrice = cartData.items[0]?.totalPrice || 0;

  if (CartItems.length === 0) {
    throw new Error("Cart is Empty !!");
  }

  const orderId = uuidv4();
  const orderDate = new Date().toISOString();

  await Orders.create({
    orderId,
    userId,
    products: CartItems,
    totalPrice,
    orderDate,
    status: "pending",
  }).go();

  //clearing the users's cart

  await Cart.delete({ userId }).go();

  return {
    orderId,
    userId,
    products: CartItems,
    totalPrice,
    orderDate,
    status: "pending",
  };
}

async function getOrdersByIdCart(id) {
  return await Orders.get({ orderId: id }).go();
}

async function getOrders() {
  return await Orders.scan.go();
}

// async function getProduct() {
//   return await Products.scan.go();
// }
export { createOrder, getOrdersByIdCart, getOrders };
