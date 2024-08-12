import { Cart } from "../entities/cart.entities.js";
import { Products } from "../entities/products.entities.js";
import {
  addProductToCart,
  deleteProductInCart,
  getProductByIdCart,
  getCarts,
} from "../service/cart.service.js";

async function addProductCartCtr(request, response) {
  const data = request.body;

  const addToCart = await addProductToCart(data);

  response.send(addToCart.data);
}

async function deleteProductInCartCtr(request, response) {
  const { id } = request.params;
  const product_to_deleted = await Cart.get({ userId: id }).go();

  if (product_to_deleted.data) {
    await deleteProductInCart(id);
    response.send({
      msg: "cart deleted successfully",
      data: product_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "cart not found " });
  }
}

async function getProductsCartCtr(request, response) {
  const { id } = request.params;
  const result = await getProductByIdCart(id);
  result
    ? response.send(result.data)
    : response.status(404).send({ msg: "product not found" });
}

async function getCartCtr(request, response) {
  const allCarts = await getCarts();
  response.send(allCarts.data);
}

export {
  addProductCartCtr,
  deleteProductInCartCtr,
  getProductsCartCtr,
  getCartCtr,
};
