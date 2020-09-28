const UserModel = require('../model/UserModel');
const { response } = require('express');

class UserController{

    async create(req, res){
        const user = new UserModel(req.body);
        await user
              .save()
              .then(response =>{//se der td certo
                  return res.status(200).json(response)
              }) 
              .catch(error =>{//se der errado
                  return res.status(500).json(error);
              });
    }

    async update(req, res){
        await UserModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }
}

module.exports = new UserController();