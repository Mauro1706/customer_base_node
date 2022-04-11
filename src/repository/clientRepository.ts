import * as mongoose from "mongoose";
import Client from "../models/clientShema";

export default mongoose.model('client', Client)