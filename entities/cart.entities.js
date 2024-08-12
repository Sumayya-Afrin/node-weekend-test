// import { Entity } from "electrodb"; // ORM - Object relational maping (adapter) --> makes sdk usage easier

// import { client } from "../util/dbconnection.js";

// const Cart = new Entity(
//   {
//     model: {
//       entity: "Cart",
//       version: "1",
//       service: "CartService",
//     },
//     attributes: {
//       userId: {
//         type: "string",
//         required: true,
//       },
//       products: {
//         type:"list",
//         items :
//         productId: {
//           type: "string",
//           required: true,
//         },
//         quantity: {
//           type: "number",
//           required: true,
//         },
//       },

//       totalPrice: {
//         //type: ["EXCELLENT", "GOOD", "FAIR", "POOR"],
//         type: "number",
//         required: true,
//       },
//     },
//     indexes: {
//       primary: {
//         pk: {
//           // highlight-next-line
//           field: "pk",
//           facets: ["userId"],
//         },
//         sk: {
//           // highlight-next-line
//           field: "sk",
//           composite: [],
//         },
//       },
//     },
//     // add your DocumentClient and TableName as a second parameter
//   },
//   { client: client, table: "cart" }
// );

// export { Cart };
