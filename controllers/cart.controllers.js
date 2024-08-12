import { Cart } from "../entities/cart.entities.js";
import {
  addProductToCart,
  deleteProductInCart,
  getProductByIdCart,
} from "../service/cart.service.js";

async function addProductCartCtr(request, response) {
  const data = request.body;
  //data.productId = uuidv4();
  const addProduct = await addProductToCart(data);

  response.send(addProduct.data);
}

async function deleteProductInCartCtr(request, response) {
  const { id } = request.params;
  const product_to_deleted = await Products.get({ productId: id }).go();

  if (product_to_deleted.data) {
    await deleteProductInCart(id);
    response.send({
      msg: "product deleted in cart successfully",
      data: product_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "product not found" });
  }
}

async function getProductsCartCtr(request, response) {
  const { id } = request.params;
  const result = await getProductByIdCart(id);
  result
    ? response.send(result.data)
    : response.status(404).send({ msg: "product not found" });
}

export { addProductCartCtr, deleteProductInCartCtr, getProductsCartCtr };
