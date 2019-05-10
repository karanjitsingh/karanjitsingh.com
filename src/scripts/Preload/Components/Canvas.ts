/// <reference path="../../Models/Models.d.ts" />

module Components {
    export class Canvas extends IComponent {
        public static readonly Element: HTMLCanvasElement = $id("canvas") as HTMLCanvasElement;
        
        public static init() {
            this.Element.width = Globals.PageWidth;
            this.Element.height = Globals.PageHeight;
        }

    }
}