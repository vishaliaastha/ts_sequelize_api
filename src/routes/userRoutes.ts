const router = require("express").Router()
import userController from "../controllers/userController"
// Create 
router.post('/createuser' , userController.createUser)
router.post('/createcontact/:id' , userController.createContactDetail)
router.post('/relationcreate', userController.createRelation)
router.post('/createfamily' , userController.createFamilyDetail)

// Get
router.get('/alluser',userController.getAll)
router.get('/getoneuser' , userController.getOne)
router.get('/onetoone/:id', userController.oneToOne)
router.get('/onetomany/:id', userController.oneToMany)
router.get('/manytomany/:id', userController.manyToMany)
router.get('/getnestedjoins/:id' ,userController.getNestedJoins)
router.get('/getmultiplejoins/:id' , userController.getMutipleJoins)
// Update
router.patch('/updateuser/:id', userController.updateUser)

// Delete
router.delete('/deleteuser/:id' , userController.deleteOne)

export default router