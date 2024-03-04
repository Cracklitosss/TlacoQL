/*import { getMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController';

export const menuResolvers = {
  Query: {
    getMenuItems: async (_: any, { page, pageSize }: any) => {
      const req = { query: { page, pageSize } };
      const res = { json: (data: any) => data };
      const menuItems = await getMenuItems(req, res);
      return menuItems;
    },
    getMenuItemById: async (_: any, { id }: any) => {
      const req = { params: { id } };
      const res = { json: (data: any) => data };
      const menuItem = await getMenuItemById(req, res);
      return menuItem;
    },
  },
  Mutation: {
    createMenuItem: async (_: any, { name, description, price }: any) => {
      const req = { body: { name, description, price } };
      const res = { json: (data: any) => data };
      const newItem = await createMenuItem(req, res);
      return newItem;
    },
    updateMenuItem: async (_: any, { id, name, description, price }: any) => {
      const req = { params: { id }, body: { name, description, price } };
      const res = { json: (data: any) => data };
      const updatedItem = await updateMenuItem(req, res);
      return updatedItem;
    },
    deleteMenuItem: async (_: any, { id }: any) => {
      const req = { params: { id } };
      const res = { json: (data: any) => data };
      const deletedItem = await deleteMenuItem(req, res);
      return deletedItem;
    },
  },
};*/
