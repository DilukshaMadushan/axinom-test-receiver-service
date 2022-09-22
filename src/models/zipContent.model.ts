import mongoose from "mongoose";

const zipContentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    isDir: {
      type: Boolean,
      default: true,
    },

    dataBase64: {
      type: Number,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    // zipFile: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "zipFiles",
    //   required: true,
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const zipContents = mongoose.model("zipContents", zipContentSchema);

export { zipContents };
