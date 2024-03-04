import mongoose, { Document, Schema } from 'mongoose';

export interface MenuItem extends Document {
  name: string;
  description: string;
  price: number;
}

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<MenuItem>('MenuItem', menuItemSchema);