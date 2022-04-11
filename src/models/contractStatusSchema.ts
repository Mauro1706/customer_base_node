import * as mongoose from "mongoose";

const ContractStatusSchema = new mongoose.Schema({
  value: { type: String, require: true }
});

export default ContractStatusSchema;