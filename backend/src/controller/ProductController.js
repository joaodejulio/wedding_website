const ProductModel = require('../model/ProductModel');

class ProductController{

    async create(req, res){
        const product = new ProductModel(req.body);
        await product
              .save()
              .then(response =>{//se der td certo
                  return res.status(200).json(response)
              }) 
              .catch(error =>{//se der errado
                  return res.status(500).json(error);
              });
    }

    async all(req, res){
        await ProductModel.find({active: {'$in' : true}})
              .sort('created')
              .then(response =>{
                  return res.status(200).json(response);
              })
              .catch(error =>{
                  return res.status(500).json(error);
              });
    }

    async update(req, res){
        await ProductModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await ProductModel.findById(req.params.id)
              .then(response => {
                if(response) return res.status(200).json(response);
              })  
              .catch(error =>{
                return res.status(404).json({error: 'Produto não encontrado'});
              })        
    }
    
}

module.exports = new ProductController();