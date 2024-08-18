import mongoose from 'mongoose'; // Corrected import statement

const UserHealthSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.UserHealth || mongoose.model('UserHealth', UserHealthSchema);