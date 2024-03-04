import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type MenuItem {
    _id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Query {
    getMenuItems(page: Int, pageSize: Int): [MenuItem]
    getMenuItemById(id: ID!): MenuItem
  }

  type Mutation {
    createMenuItem(name: String!, description: String!, price: Float!): MenuItem
    updateMenuItem(id: ID!, name: String, description: String, price: Float): MenuItem
    deleteMenuItem(id: ID!): MenuItem
   
  }
`);

export default schema;
