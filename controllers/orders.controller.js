import { Orders } from "../entities/orders.entity.js";
import { Products } from "../entities/products.entities.js";
import {
  deleteProductInCart,
  getProductByIdCart,
} from "../service/cart.service.js";
import { createOrder, getOrders } from "../service/order.service.js";

async function createOrderCtr(request, response) {
  const { userId } = request.body;

  const data = await getProductByIdCart(userId);
  await createOrder(data);
  // response.status(201).send(order);
  await deleteProductInCart(userId);

  //   const addToCart = await createOrder(data);

  //   response.send(addToCart.data);
}

async function getOrdersCtr(request, response) {
  const { id } = request.params;
  const result = await getOrders(id);
  result
    ? response.send(result.data)
    : response.status(404).send({ msg: "product not found" });
}

export { createOrderCtr, getOrdersCtr };
