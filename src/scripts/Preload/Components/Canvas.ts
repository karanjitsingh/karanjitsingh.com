/// <reference path="../../Models/Models.d.ts" />

module Components {
    export const Canvas: IComponent = {
        Element: $id("canvas"),
        
        init: () => {
            (Canvas.Element as HTMLCanvasElement).width = Globals.PageWidth;
            (Canvas.Element as HTMLCanvasElement).height = Globals.PageHeight;
        }
    }
}