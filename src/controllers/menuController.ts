import { Request, Response } from 'express';
import MenuItem from '../models/menuItemModel';

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize as string, 10) : 3;

    const skip = (page - 1) * pageSize;

    const menuItems = await MenuItem.find().skip(skip).limit(pageSize);

    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener elementos del menú');
  }
};

export const getMenuItemById = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;

    const menuItem = await MenuItem.findById(itemId);

    if (!menuItem) {
      return res.status(404).json({ error: 'Elemento del menú no encontrado' });
    }

    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el elemento del menú por ID');
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const newItem = new MenuItem({ name, description, price });
    console.log('Nuevo elemento del menú creado:', newItem);
    await newItem.save();

    res.json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear elemento del menú');
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const { name, description, price } = req.body;

    const menuItem = await MenuItem.findByIdAndUpdate(
      itemId,
      { name, description, price },
      { new: true }
    );

    if (!menuItem) {
      return res.status(404).json({ error: 'Elemento del menú no encontrado' });
    }

    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el elemento del menú');
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;

    const menuItem = await MenuItem.findByIdAndDelete(itemId);

    if (!menuItem) {
      return res.status(404).json({ error: 'Elemento del menú no encontrado' });
    }

    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el elemento del menú');
  }
};
