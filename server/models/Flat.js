import { Schema, model } from "mongoose";

const flatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      enun: ["parking", "pool", "gym"],
      required: true,
      default: "parking"
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flat = model("Flat", flatSchema);

export default Flat;
