"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const message_1 = require("./Models/message");
class JeyMerBot {
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose.connect('mongodb://localhost/JeyMerBot');
            this.msgResponse = yield message_1.message.findOne({ 'request': 'ezequiel1' }, 'response').exec();
            if (this.msgResponse)
                return yield this.msgResponse.response;
            else
                return "not found";
        });
    }
    getHola() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield "Hola";
        });
    }
}
exports.default = JeyMerBot;
//# sourceMappingURL=index.js.map