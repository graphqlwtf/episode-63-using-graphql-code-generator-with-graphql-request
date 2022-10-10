import { request } from "graphql-request";
import { graphql } from "./gql";

const GetCartById = graphql(`
  query GetCartById($id: ID!) {
    cart(id: $id) {
      id
      totalItems
      items {
        id
        name
        quantity
        lineTotal {
          formatted
        }
        unitTotal {
          formatted
          amount
        }
      }
      subTotal {
        formatted
      }
    }
  }
`);

request("https://api.cartql.com", GetCartById, {
  id: "wtf",
}).then(({ cart }) => console.log(cart?.items[0].unitTotal.amount));
