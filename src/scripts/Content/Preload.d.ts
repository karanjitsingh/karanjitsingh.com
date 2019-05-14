// Stuff already defined by preload

declare function $id(src): HTMLElement;

declare module Preload {
    export const LoadingWave: ParticleJSAnimations.WaveAnimation
}

interface IGlobals {
    PageHeight: number;
    PageWidth: number;
    ParticleJS: ParticleJS;
}

declare const Globals: IGlobals;