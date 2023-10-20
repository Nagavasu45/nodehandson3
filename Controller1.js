const { technology, bollywood, hollywood, food, fitness } = require("./Dumy")

const bollywood1=(req,res)=>{
    return res.send(bollywood)
}
const technlogy1=(req,res)=>{
    return res.send(technology)
}
const hollywood1=(req,res)=>{
    return res.send(hollywood)
}
const food1=(req,res)=>{
    return res.send(food)
}
const fitness1=(req,res)=>{
    return res.send(fitness)
}
module.exports={bollywood1,technlogy1,hollywood1,food1,fitness1}