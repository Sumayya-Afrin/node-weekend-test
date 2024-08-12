import { Products } from "../entities/products.entities.js";

//update
async function editProductById(ExistingData, UpdatedData) {
  return await Products.put({ ...ExistingData.data, ...UpdatedData }).go();
}

//post-create
async function createProduct(data) {
  return await Products.create(data).go();
}

async function deleteProductById(id) {
  await Products.delete({ productId: id }).go();
}

async function getProductById(id) {
  return await Products.get({ productId: id }).go();
}

async function getProduct() {
  return await Products.scan.go();
}
export {
  editProductById,
  createProduct,
  deleteProductById,
  getProductById,
  getProduct,
};
