import { Entity } from "electrodb"; // ORM - Object relational maping (adapter) --> makes sdk usage easier

import { client } from "../util/dbconnection.js";

const Orders = new Entity(
  {
    model: {
      entity: "Orders",
      version: "1",
      service: "OrderService",
    },
    attributes: {
      orderId: {
        type: "string",
        required: true,
      },
      userId: {
        type: "string",
        required: true,
      },

      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
              required: true,
            },
            quantity: {
              type: "number",
              required: true,
            },
          },
        },
      },

      totalPrice: {
        type: "number",
        required: true,
      },
      orderDate: {
        type: "string",
        required: true,
      },
      status: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["orderId"],
        },
        sk: {
          field: "sk",
          composite: [],
        },
      },
    },
  },
  { client: client, table: "Orders" }
);

export { Orders };
