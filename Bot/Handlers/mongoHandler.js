"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const textHandlers_1 = require("@Interfaces/textHandlers");
class ConcreteHandlerA extends textHandlers_1.TextHandler {
    constructor() {
        super(...arguments);
        this._monngose = Mongoose.connect("");
    }
    handleRequest(req) {
        console.log(`Hanlder A process ${req}`);
        this.successor.handleRequest(req);
    }
}
//# sourceMappingURL=mongoHandler.js.map