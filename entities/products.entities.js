import { Entity } from "electrodb"; // ORM - Object relational maping (adapter) --> makes sdk usage easier

import { client } from "../util/dbconnection.js";

const Products = new Entity(
  {
    model: {
      entity: "Products",
      version: "1",
      service: "ProductService",
    },
    attributes: {
      productId: {
        type: "number",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      price: {
        type: "number",
        required: true,
      },
      category: {
        type: "string",
        required: true,
      },
      stockQuantity: {
        //type: ["EXCELLENT", "GOOD", "FAIR", "POOR"],
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["productId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          composite: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client: client, table: "Products" }
);

export { Products };
