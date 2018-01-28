import TextHandler from "../Interfaces/textHandlers";
export declare class TwitterHandler extends TextHandler {
    private twitter;
    private re;
    private imgBase64;
    constructor();
    handleRequest(message: string): Promise<any>;
    private error;
    private succes;
    private mediaUpload;
}
export declare const TwitterHandlerModule: TwitterHandler;
