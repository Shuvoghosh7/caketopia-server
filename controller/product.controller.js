const products = require("../models/Products");
const { productsService, getProductByIdService } = require("../Services/product.services");

exports.createProduct=async (req, res, next) => {
    
    const { filename } = req.file;
    const { productName } = req.body;
    const { description } = req.body;
    const { category } = req.body;
    const { price } = req.body;

    if (!productName || !description || !category || !price || !filename) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }
    try {
        const userdata = new products({
            imageUrl: filename,
            productName: productName,
            description: description,
            category: category,
            price: price

        });
        const finaldata = await userdata.save();
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}

exports.getProduct=async(req,res,next)=>{
    try {
      let filters={...req.query}
      //solt,page,limit, --- exclude
      const excludeField=['sort','page','limit']
      excludeField.forEach(field =>delete filters[field])
     
      //gt,li,get,lte
      let filterString=JSON.stringify(filters)
      filterString=filterString.replace(/\b(gt|gte|lt|Lte)\b/g, match => `$${match}`)

      filters=JSON.parse(filterString)
      console.log(JSON.parse(filterString))

      
      const queries={}
      if(req.query.sort){
        const sortBy=req.query.sort.split(',').join(' ')
        queries.sortBy=sortBy
      }
//
      if(req.query.fields){
        const fields=req.query.fields.split(',').join(' ')
        queries.fields=fields
        console.log(fields)
      }
  //Pagination
      if(req.query.page){
        const{page=1,limit=10}=req.query;
        const skip=(page-1)*parseInt(limit);
        queries.skip=skip;
        queries.limit=parseInt(limit);
      }


      const product=await productsService(filters,queries);
      res.status(200).json({
        status:"success",
        data:product 
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Cant not get data",
        error : error.message
      })
    }
  }

  exports.getProductById=async (req, res, next) => {
    const {id}=req.params;
    try {
      //create method
      const product=await getProductByIdService(id);
      if(!product){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not finds a product with this id"
          })
      }
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a product",
        data: product
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
  
    }
    
  }