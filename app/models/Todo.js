const { model, Schema } = require("mongoose");

const DOCUMENT_NAME = "Todo";
const COLLECTION_NAME = "todos";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duedate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

exports.TodoModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME);
