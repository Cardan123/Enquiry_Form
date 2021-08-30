const {response,request} = require('express');


const postMensajes = async (req = request,res = response) => {
    res.json({
        msg: 'postMensajes'
    });  
}

module.exports = {
    postMensajes
}