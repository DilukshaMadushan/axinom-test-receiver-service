import mongoose, { Schema } from "mongoose";

const uploadSchema: any = new mongoose.Schema(
  {
    uploadOwner: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    data: {
      type: String,
    },

    // zipFiles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "zipFile",
    //   },
    // ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const uploads: any = mongoose.model("uploads", uploadSchema);

export { uploads };
