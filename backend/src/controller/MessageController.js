const MessageModel = require('../model/MessageModel');

class MessageController{

    async create(req, res){
        const message = new MessageModel(req.body);
        await message
              .save()
              .then(response =>{//se der td certo
                  return res.status(200).json(response)
              }) 
              .catch(error =>{//se der errado
                  return res.status(500).json(error);
              });
    }

    async all(req, res){
        await MessageModel.find({active: {'$in' : true}})
              .sort('created')
              .then(response =>{
                  return res.status(200).json(response);
              })
              .catch(error =>{
                  return res.status(500).json(error);
              });
    }
    
}

module.exports = new MessageController();