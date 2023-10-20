const { bollywood1, technlogy1, hollywood1, food1, fitness1 } = require('./Controller1');

const Router1 = require('express').Router();

function autBolly(req, res, next) {
  
    const Authentication = false;
  
    if (Authentication) {
      next(); 
    } else {
        res.send('Authentication required');
    }
  }

  


Router1.get('/bollywood',autBolly,bollywood1)
Router1.get('/hollywood',autBolly,hollywood1)
Router1.get('/technology',technlogy1)
Router1.get('/food',food1)
Router1.get('/fitness',fitness1)

module.exports={Router1}