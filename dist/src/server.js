"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// import User from './src/models/userModel'
// import UserDetails from './src/models/contactDetailsModel'
const db = require('./util/database');
const app = (0, express_1.default)();
const port = 15000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    return res.send("Hello world");
});
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log("Server is Runnung.............");
});
//# sourceMappingURL=server.js.map