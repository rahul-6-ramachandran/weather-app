import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  city: String,
  data: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
const Whether = mongoose.model('Weather', weatherSchema);
export default  Whether