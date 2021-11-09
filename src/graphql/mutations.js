/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createVenta = /* GraphQL */ `
  mutation CreateVenta(
    $input: CreateVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    createVenta(input: $input, condition: $condition) {
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
export const updateVenta = /* GraphQL */ `
  mutation UpdateVenta(
    $input: UpdateVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    updateVenta(input: $input, condition: $condition) {
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
export const deleteVenta = /* GraphQL */ `
  mutation DeleteVenta(
    $input: DeleteVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    deleteVenta(input: $input, condition: $condition) {
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
export const createVentaOrder = /* GraphQL */ `
  mutation CreateVentaOrder(
    $input: CreateVentaOrderInput!
    $condition: ModelVentaOrderConditionInput
  ) {
    createVentaOrder(input: $input, condition: $condition) {
      id
      venta_id
      order_id
      order {
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
      createdAt
      updatedAt
      venta {
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
      customer
    }
  }
`;
export const updateVentaOrder = /* GraphQL */ `
  mutation UpdateVentaOrder(
    $input: UpdateVentaOrderInput!
    $condition: ModelVentaOrderConditionInput
  ) {
    updateVentaOrder(input: $input, condition: $condition) {
      id
      venta_id
      order_id
      order {
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
      createdAt
      updatedAt
      venta {
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
      customer
    }
  }
`;
export const deleteVentaOrder = /* GraphQL */ `
  mutation DeleteVentaOrder(
    $input: DeleteVentaOrderInput!
    $condition: ModelVentaOrderConditionInput
  ) {
    deleteVentaOrder(input: $input, condition: $condition) {
      id
      venta_id
      order_id
      order {
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
      createdAt
      updatedAt
      venta {
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
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
