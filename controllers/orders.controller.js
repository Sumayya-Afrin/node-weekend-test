import { Orders } from "../entities/orders.entity.js";
import { Products } from "../entities/products.entities.js";
import {
  createOrder,
  getOrdersByIdCart,
  getOrders,
} from "../service/order.service.js";

async function createOrderCtr(request, response) {
  const { userId } = request.user;

  try {
    const order = await createOrder(userId);
    response.status(201).json(order);
  } catch (error) {
    response.status(400).send(error.message);
  }
  //   const data = request.body;

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

export { createOrderCtr, getOrdersByIdCartCtr, getOrdersCtr };
