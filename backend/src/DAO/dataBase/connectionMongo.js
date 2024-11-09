import mongoose from "mongoose";

export const connection= async() => {

    try {
        await mongoose.connect("mongodb+srv://BrayanDD:dragon86@luxcluster.jax41d1.mongodb.net/", {dbName:"ecommerce"});
        console.log("Conectado correctamente a bd:mi:Ecommerce");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos !!");
    }
}