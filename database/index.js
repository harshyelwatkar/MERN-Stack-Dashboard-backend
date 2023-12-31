import mongoose from "mongoose";
;  

const URL = process.env.DATABASE



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