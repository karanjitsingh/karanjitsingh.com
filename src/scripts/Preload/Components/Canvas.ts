module Components {
    export class Canvas {
        public static readonly Element: HTMLCanvasElement = $id("canvas") as HTMLCanvasElement;
        
        public static init() {
            this.Element.width = Globals.PageWidth;
            this.Element.height = Globals.PageHeight;
        }

    }
}