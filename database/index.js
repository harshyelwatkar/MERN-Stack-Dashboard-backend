import mongoose from "mongoose";
;  

const URL = `mongodb+srv://harshdb:fmJBz93Z7GAkH4YW@cluster0.xhqmld1.mongodb.net/Data?retryWrites=true&w=majority`



// database connection
export const mongoDB = () => {
    
    mongoose.connect(URL)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}