"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitterHandler_1 = require("./Handlers/twitterHandler");
// import * as mongoose from 'mongoose';
// import {message , ImessageModel} from "./Models/message";
class JeyMerBot {
    sendMessage(message) {
        twitterHandler_1.TwitterHandlerModule.handleRequest(message);
    }
}
exports.JeyMerBot = JeyMerBot;
exports.jmb = new JeyMerBot();
//# sourceMappingURL=index.js.map