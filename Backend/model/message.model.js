import mongoose, { Schema } from "mongoose";
const messageSchema = new Schema({
  senderId
}, { timestamps: true });
export const Message = mongoose.model("Message", messageSchema);