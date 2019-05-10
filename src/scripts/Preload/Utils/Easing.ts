type EasingFunction = (t: number) => number

module Utils {
    export const EasingFunctions = {
        // no easing, no acceleration
        linear: function (t) { return t } as EasingFunction,
        // accelerating from zero velocity
        easeInQuad: function (t) { return t * t } as EasingFunction,
        // decelerating to zero velocity
        easeOutQuad: function (t) { return t * (2 - t) } as EasingFunction,
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t } as EasingFunction,
        // accelerating from zero velocity
        easeInCubic: function (t) { return t * t * t } as EasingFunction,
        // decelerating to zero velocity
        easeOutCubic: function (t) { return (--t) * t * t + 1 } as EasingFunction,
        // acceleration until halfway, then deceleration
        easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 } as EasingFunction,
        // accelerating from zero velocity
        easeInQuart: function (t) { return t * t * t * t } as EasingFunction,
        // decelerating to zero velocity
        easeOutQuart: function (t) { return 1 - (--t) * t * t * t } as EasingFunction,
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t } as EasingFunction,
        // accelerating from zero velocity
        easeInQuint: function (t) { return t * t * t * t * t } as EasingFunction,
        // decelerating to zero velocity
        easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t } as EasingFunction,
        // acceleration until halfway, then deceleration
        easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t } as EasingFunction
    }
}