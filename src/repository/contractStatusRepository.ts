import * as mongoose from "mongoose";
import ContractStatus from "../models/contractStatusSchema";

export default mongoose.model('contractStatus', ContractStatus)