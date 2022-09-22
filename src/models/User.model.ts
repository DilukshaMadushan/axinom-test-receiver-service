import mongoose from "mongoose";

const UserSchema: any = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Name"],
  },

  password: {
    type: String,
    minlength: 5,
    select: false,
  },

  createdAt: {
    type: Date,
    defulat: Date.now,
  },
});

const User: any = mongoose.model("User", UserSchema);

export { User };
