"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    request: String,
    response: String
});
exports.messageSchema.methods.fullName = function () {
    return (this.firstName.trim() + " " + this.lastName.trim());
};
exports.message = mongoose_1.model("User", exports.messageSchema, 'actions');
// import {Mongoose, MongooseDocument, Model} from 'mongoose';
// class message extends Model {
//     req: string;
//     res: string;  
// }
// export default message;
