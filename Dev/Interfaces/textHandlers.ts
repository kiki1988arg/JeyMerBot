class TextHandler {
    private _successor: TextHandler;
  
    public set successor(successor: TextHandler) {
      this._successor = successor;
    }
  
    public get successor() {
      return this._successor;
    }
  
    public async handleRequest(msg: string): Promise<any> {};
  }
export default TextHandler;