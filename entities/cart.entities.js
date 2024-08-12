import { Entity } from "electrodb"; // ORM - Object relational maping (adapter) --> makes sdk usage easier

import { client } from "../util/dbconnection.js";

const Cart = new Entity(
  {
    model: {
      entity: "Cart",
      version: "1",
      service: "CartService",
    },
    attributes: {
      userId: {
        type: "string",
        required: true,
      },

      products: {
        type: "list",
        items: {
          properties: {
            productId: { type: "string", required: true },
            quantity: { type: "number", required: true },
          },
        },
      },

      totalPrice: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          field: "sk",
          composite: [],
        },
      },
    },
  },
  { client: client, table: "cart" }
);

export { Cart };
