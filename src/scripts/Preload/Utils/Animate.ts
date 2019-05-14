module Utils {
    export function Animate(step, easing, duration, callback?) {
        new Animation(step, easing, duration, callback)
    }

    function Animation(step, easing, duration, callback) {
        this.start = null;
        this.easing = easing;
        this.duration = duration;
        this.callback = callback;
        this.step = step;

        this.animate = function(time) {
            if(this.start === null)
                this.start = time;

            if(time >= this.start + duration) {
                this.step(1);
                if(this.callback)
                    this.callback();
            }
            else {
                this.step(this.easing((time - this.start)/this.duration));
                window.requestAnimationFrame(this.animate.bind(this));
            }
        };

        window.requestAnimationFrame(this.animate.bind(this));
    }
}