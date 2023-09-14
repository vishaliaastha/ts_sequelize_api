// import userModel from '../models/userModel'
// const userModel = require("../models/userModel")
import express, {Request, Response} from 'express';
import db from '../util/database'

const userModel = db.users
const contactDetailsModel = db.contact_details
const contactIds = db.contact_id
const familyDetailModel = db.family_detail
const getAll = async(req:Request , res: Response) => {
    try{
        const getAllUser =await userModel.findAll({
          limit : 2
        });
        return res.status(200).json(getAllUser);
    }catch(e){
        return res.status(500).json(e)
    }

}

const getOne = async (req:Request, res:Response) => {
    try {
      const userId = await userModel.findByPk(req.query.id);
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

const createUser =async (req:Request , res: Response) => {
    try {
        const {username , email , password} = req.body
        let UserDetail =  { 
            username: username,
            email : email,
            password : password
        };

        const userCreate = await userModel.create(UserDetail)
        res.status(201).json(userCreate);
    } catch (error) {
        
    }
}

const updateUser =async (req:Request , res:Response) => {
    try {
        let userUpadeDetail = req.body

        const updatedData = await userModel.update(userUpadeDetail , { where : {id : req.params.id}})
        res.status(200).json({updatedData})
    } catch (error) {

        res.status(500).json(error);
        
    }
}


const deleteOne = async (req:Request, res:Response) => {
    try {
      const user = await userModel.destroy({ where: { id: req.params.id } });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


const oneToOne = async(req:Request , res:Response) => {
  try {
    const {id} = req.params
    const data = await userModel.findAll({
      include:contactDetailsModel,
      where : {id : id}
    })
    return res.status(200).json(data)
  } catch (error) {
    
  }
}

const oneToMany = async(req:Request , res:Response) => {
  try {
    const {id} = req.params
    const data = await userModel.findAll({
      include:contactDetailsModel,
      where : {id : id}
    })
    return res.status(200).json(data)
  } catch (error) {
    
  }
}


const manyToMany = async(req:Request , res:Response) => {
  try {
   
    const data = await userModel.findOne({
      where : { id : req.params.id},
      include:[{
        model :contactDetailsModel,
        attributes: ['phoneNumber', 'state' , 'city'],
        
      }],
      
      attributes : ['id','username','email' ]
    })
    return res.status(200).json({data})
  } catch (error) {
    console.log(error)
    res.sendStatus(404).json(error)
  }
}

const createContactDetail =async (req:Request , res:Response) => {
  try {
    const user = await userModel.findOne({ where : {id : req.params.id }})
    const usrid = user.id
    if (usrid === req.params.id){
      let contactdata = {
        phoneNumber : req.body.phoneNumber,
        pinCode : req.body.pinCode,
        street : req.body.street,
        state : req.body.state,
        city : req.body.city,
        user_Id : usrid
      }

      const userdata = await contactDetailsModel.create(contactdata)
      
    return res.status(201).json(userdata)
    
    }
    return res.status(500).json({msg : "Failed to post data in db"})
  } catch (error) {
    
  }
}


const createRelation = async(req:Request , res:Response)=>{
  try {
    const data = {
      UserId : req.body.UserId,
      UserDetailId : req.body.UserDetailId
    }
    console.log(req.body.UserId)

    const relation = await contactIds.create(data)
    return res.send(201).json(relation)
    
  } 
  catch (error) {
    res.sendStatus(500).json(error)
  }
}

const createFamilyDetail =async (req:Request , res: Response) => {
  try {
      const {headOfFamily , nationality , caste , UserId,AddressId} = req.body
      let family_detail =  { 
        headOfFamily: headOfFamily,
        nationality : nationality,
        caste : caste,
        UserId: UserId ,
        AddressId : AddressId
      };

      const userCreate = await familyDetailModel.create(family_detail)
      res.status(201).json(userCreate);
  } catch (error) {
      console.log(error)
      res.sendStatus(500).json(error)
  }
}

const getNestedJoins =async (req:Request , res:Response ) => {
  try {
    const detail = await userModel.findOne({
      where : {id : req.params.id},
      attributes : ['id','username','email'],
      include : [
        {
        model : contactDetailsModel,
        attributes : ['phoneNumber','city','state'],
        },
        {
          model : familyDetailModel,
          attributes : ['id','headOfFamily','caste']
        }
      ]
    })
    return res.status(200).json(detail);
  } catch (error) {
    console.log(error)
    return res.sendStatus(400).json({error})
  }
}

const getMutipleJoins =async (req:Request , res:Response ) => {
  try {
    const detail = await userModel.findOne({
      where : {id : req.params.id},
      attributes : ['id','username','email'],
      include : [
        {
          model : familyDetailModel,
          attributes : ['id','headOfFamily','caste'],
          include : [{
             model : contactDetailsModel,
             attributes : ['phoneNumber','city','state'],
            }
          ] 
        }
      ]
    })
    return res.status(200).json(detail);
  } catch (error) {
    console.log(error)
    return res.sendStatus(400).json({error})
  }
}

export default {
  getAll ,
  createUser ,
  getOne , 
  updateUser , 
  deleteOne , 
  oneToOne , 
  createContactDetail , 
  oneToMany , 
  manyToMany,
  createRelation , 
  createFamilyDetail,
  getNestedJoins,
  getMutipleJoins
}