const ImageModel = require('../model/ImageModel');

class ImageController{

    async create(req, res){
        const image = new ImageModel(req.body);
        await image
              .save()
              .then(response =>{//se der td certo
                  return res.status(200).json(response)
              }) 
              .catch(error =>{//se der errado
                  return res.status(500).json(error);
              });
    }
}

module.exports = new ImageController();