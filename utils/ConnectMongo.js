import mongoose from "mongoose";

const ConnectMongo = async ()=>{
   await mongoose.connect(process.env["MONGO_URI "])
}
export default ConnectMongo