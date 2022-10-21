import Product from "../models/product.model.js";
// import ProductImages from "../models/product.images.model.js";
export const create = async(req,res) => {
   
    try{
        var imageAllData = [];
        req.files.forEach((image,key) => {
            var imageType = '';
            if(image.mimetype == 'image/png'){
                imageType = 'png';
            }else if(image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg'){
                imageType = 'jpg';
            }
            let imageData = {
                path:image.filename,
                fullpath:"localhost:3002/"+image.path,
                type:imageType,
            }
            imageAllData.push(imageData)
        //    await ProductImages.create(imageData);
           
        });
        req.body.images = imageAllData
    const createProd = await Product.create(req.body);
    if(createProd){
        
    }
    res.send(createProd);
}catch(err){
    res.send({
        status:false,
        msg:"Something wrong with request.",
        data:err
    });
}
} 