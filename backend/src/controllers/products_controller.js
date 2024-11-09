import productManager from "../DAO/mongoDB/productManager.js";
import fs from "fs";
import path from "path";
import __dirname from "../utils.js";


//-------------------------GET------------------------------------------

const products = new productManager();

export const getProducts = async (req, res) => {

    try {
        const limit = parseInt(req.query.limit);

        const productList= await products.getProducts();

        if (!limit || !limit == Number) {
            return res.send({ products: productList });
        }

        const limitProducts = productList.slice(0, limit);

        return res.send({ products: limitProducts });

    } catch (error) {
        res.status(500).send({ status: 'error', result: error })
    }
}

//-------------------------GET------------------------------------------

export const getProduct= async(req,res) => {
    try {
        const productId = req.params.pid;

        const product = await products.getProductById(productId);

        if (!product) {
            return res.status(400).send({ status: "Product not founded", result:false, product });
        }

        if (product) {
            return res.send({ product, status:'product found', result:true });
        }
    }
    catch (error) {

        return res.status(500).send({ status: 'error', result: error });
    }
}

//-------------------------GET------------------------------------------
export const media= async (req,res) => {

    //Sacar el parametro de la url
    const file= req.params.file;

    const filePath = path.join(__dirname, './uploads', file);


    fs.stat(filePath, (error, exists) => {

        //Comprobar que existe
        if(!exists){
            return res.status(404).send({
                status:"error",
                message:"No existe la imagen",
                result: false
            })
        }

        //Devolver un file

        return res.status(200).sendFile(path.resolve(filePath));
    });

}

//-------------------------DELETE------------------------------------------
export const deleteProduct= async (req,res) => {
    
    try {
        const productID = req.params.pid;
        const product = await products.getProductById(productID);

        if (!product) {
            res.status(400).send({ status: "Error to delet product", result:false })
        }

        const deletProduct = await products.deletProduct(productID);

        if (deletProduct) return res.send({ status: 'Product deleted', payload: deletProduct, result:true })


    } catch (error) {
        res.status(500).send({ status: 'error', result: false })
    }
}