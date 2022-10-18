import Product from "../models/product.model.js";

export const create = async(req,res) => {
    try{
    const createProd = await Product.create(req.body);
    res.send(createProd);
}catch(err){
    res.send({
        status:false,
        msg:"Something wrong with request.",
        data:err
    });
}
} 