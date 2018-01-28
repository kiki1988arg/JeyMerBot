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
const textHandlers_1 = require("../Interfaces/textHandlers");
var rp = require('request-promise');
var Twitter = require('twitter-node-client').Twitter;
class TwitterHandler extends textHandlers_1.default {
    constructor() {
        super();
        this.error = (err, response, body) => {
            console.log(err);
        };
        this.succes = (data) => {
            console.log(data);
        };
        this.mediaUpload = (data) => {
            this.twitter.postTweet({ 'media_ids': JSON.parse(data).media_id_string }, this.error, this.succes);
        };
        //Example calls
        this.twitter = new Twitter({
            "consumerKey": "V3306sFiIpNNQHz4tyFzzcVBJ",
            "consumerSecret": "BX2uL4AjEk1qonljncVsB42RByVIFmq6vcprMc4ctawZnPXqOY",
            "accessToken": "954484250140729344-c5ACzNKJ3RX6beWqXvn1qvrW6Gv5I2w",
            "accessTokenSecret": "UktqHVNUCMRCEeMEIZAyAhyMI3in63ouBNZqq4jx6DRqE",
            "callBackUrl": "XXX"
        });
        this.re = new RegExp("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)");
    }
    handleRequest(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (message.startsWith('!twit:')) {
                this.twitter.postTweet({ 'status': message.split(':')[1] }, this.error, this.succes);
                return "tweet enviado";
            }
            if (this.re.test(message)) {
                const options = {
                    url: message,
                    encoding: 'Base64'
                };
                //Set imageBase64  
                this.imgBase64 = yield rp.get(options)
                    .then(function (res) {
                    return res;
                });
                //upload del image si es succes lo envio a la
                // funcion mediaUpload para que lo twittee
                this.twitter.postMedia({ 'media': this.imgBase64 }, this.error, this.mediaUpload);
                return "imagen subida";
            }
        });
    }
}
exports.TwitterHandler = TwitterHandler;
exports.TwitterHandlerModule = new TwitterHandler();
//# sourceMappingURL=twitterHandler.js.map