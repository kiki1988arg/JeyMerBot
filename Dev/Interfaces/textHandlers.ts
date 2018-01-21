export class TextHandler {
    private _successor: TextHandler;
  
    public set successor(successor: TextHandler) {
      this._successor = successor;
    }
  
    public get successor() {
      return this._successor;
    }
  
    public handleRequest(msg: string): void {};
  }