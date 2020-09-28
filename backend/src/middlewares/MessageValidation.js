const MessageModel = require('../model/MessageModel');

const MessageValidation = async(req, res, next) =>{

    const{macaddress, name, description} = req.body;

    if(!macaddress) return res.status(400).json({error: 'Macaddress é obrigatorio!'});
    else if(!name) return res.status(400).json({error: 'O seu nome é obrigatorio!'});
    else if(!description) return res.status(400).json({error: 'A mensagem é obrigatoria!'});
    else next();
}

module.exports = MessageValidation 