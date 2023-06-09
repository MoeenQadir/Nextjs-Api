import {Schema,model,models} from "mongoose";

const TestSchema =new Schema({
    name: String,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const Test = models.Test || model("Test" , TestSchema)
export default Test