/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      ventas {
        items {
          id
          venta_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        ventas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getVenta = /* GraphQL */ `
  query GetVenta($id: ID!) {
    getVenta(id: $id) {
      id
      name
      description
      image
      categoria
      featured
      price
      orders {
        items {
          id
          venta_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVentas = /* GraphQL */ `
  query ListVentas(
    $filter: ModelVentaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVentas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        categoria
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
