import { Cart } from "../entities/cart.entities.js";
import {
  addToCart,
  deleteProductInCart,
  getProductById,
  getProduct,
} from "../service/product.service.js";
async function editProductByIdCtr(request, response) {
  const { id } = request.params;
  const UpdatedData = request.body;
  const ExistingData = await Products.get({ productId: id }).go();
  if (ExistingData.data) {
    await editProductById(ExistingData, UpdatedData);
    response.send({
      msg: "product edited successfully",
      data: UpdatedData,
    });
  } else {
    response.status(404).send({ msg: "product not found" });
  }
}

async function createProductByIdCtr(request, response) {
  const data = request.body;
  //data.productId = uuidv4();
  const addProduct = await createProduct(data);

  response.send(addProduct.data);
}

async function deleteProductByIdCtr(request, response) {
  const { id } = request.params;
  const product_to_deleted = await Products.get({ productId: id }).go();

  if (product_to_deleted.data) {
    await deleteProductById(id);
    response.send({
      msg: "product deleted successfully",
      data: product_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "product not found" });
  }
}

async function getProductsByIdCtr(request, response) {
  const { id } = request.params;
  const result = await getProductById(id);
  result
    ? response.send(result.data)
    : response.status(404).send({ msg: "product not found" });
}

async function getProductsCtr(request, response) {
  const allProducts = await getProduct();
  response.send(allProducts.data);
}

export {
  editProductByIdCtr,
  createProductByIdCtr,
  deleteProductByIdCtr,
  getProductsByIdCtr,
  getProductsCtr,
};
