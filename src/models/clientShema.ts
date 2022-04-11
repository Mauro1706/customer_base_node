import * as mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  document: { type: Number, require: true },
  telephone: { type: Number, require: true },
  contractNumber: { type: Number, require: true },
  contractDate: { type: String, require: true },
  contractValue: { type: String , require: true},
  contractStatus: { type: String, require: true },
  active: { type: Boolean, require: true, default: true },
  action: { type: String },
},
{
  timestamps: true,
});

export default ClientSchema;