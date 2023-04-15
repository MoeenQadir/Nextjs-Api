import ConnectMongo from "../../../../utils/ConnectMongo";
import Test from "../../../../models/TestSchema";

export default async function (req,res){
    try {
        await ConnectMongo()
        console.log("Mongo Db is Connected")
    }catch (err){
        console.log(err)
    }
    const test = await Test.create(req.body)
    res.redirect("/")
    if (!test){
        return res.json("not login")
    }
}
