declare class TextHandler {
    private _successor;
    successor: TextHandler;
    handleRequest(msg: string): Promise<any>;
}
export default TextHandler;
