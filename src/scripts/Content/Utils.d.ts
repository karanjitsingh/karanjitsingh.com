declare type EasingFunction = (t:number) => number;
declare type StepFunction = (t:number) => void;

interface EasingFunctions {
    linear: EasingFunction,
    // accelerating from zero velocity
    easeInQuad: EasingFunction,
    // decelerating to zero velocity
    easeOutQuad: EasingFunction,
    // acceleration until halfway, then deceleration
    easeInOutQuad: EasingFunction,
    // accelerating from zero velocity
    easeInCubic: EasingFunction,
    // decelerating to zero velocity
    easeOutCubic: EasingFunction,
    // acceleration until halfway, then deceleration
    easeInOutCubic: EasingFunction,
    // accelerating from zero velocity
    easeInQuart: EasingFunction,
    // decelerating to zero velocity
    easeOutQuart: EasingFunction,
    // acceleration until halfway, then deceleration
    easeInOutQuart: EasingFunction,
    // accelerating from zero velocity
    easeInQuint: EasingFunction,
    // decelerating to zero velocity
    easeOutQuint: EasingFunction,
    // acceleration until halfway, then deceleration
    easeInOutQuint: EasingFunction
}


declare module Utils {
    export function Animate(step: StepFunction, easing: EasingFunction, duration: number, callback?);
    export const EasingFunctions: EasingFunctions;
}