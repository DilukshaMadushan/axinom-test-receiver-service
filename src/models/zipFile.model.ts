import mongoose from "mongoose";

const zipFileSchema: any = new mongoose.Schema(
  {
    folderName: {
      type: String,
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },

    // zipContents: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "zipContents",
    //   },
    // ],

    // upload: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "uploads",
    //   required: true,
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const zipFiles: any = mongoose.model("zipFile", zipFileSchema);

export { zipFiles };
