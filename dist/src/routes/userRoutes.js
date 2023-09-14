"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const userController_1 = __importDefault(require("../controllers/userController"));
// Create 
router.post('/createuser', userController_1.default.createUser);
router.post('/createcontact/:id', userController_1.default.createContactDetail);
router.post('/relationcreate', userController_1.default.createRelation);
router.post('/createfamily', userController_1.default.createFamilyDetail);
// Get
router.get('/alluser', userController_1.default.getAll);
router.get('/getoneuser', userController_1.default.getOne);
router.get('/onetoone/:id', userController_1.default.oneToOne);
router.get('/onetomany/:id', userController_1.default.oneToMany);
router.get('/manytomany/:id', userController_1.default.manyToMany);
router.get('/getnestedjoins/:id', userController_1.default.getNestedJoins);
router.get('/getmultiplejoins/:id', userController_1.default.getMutipleJoins);
// Update
router.patch('/updateuser/:id', userController_1.default.updateUser);
// Delete
router.delete('/deleteuser/:id', userController_1.default.deleteOne);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map