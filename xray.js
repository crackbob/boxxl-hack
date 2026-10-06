(() => {
    let hidden = false;

    const renderer = game.renderer;
    const originalRender = renderer.render;

    window.addEventListener("keydown", e => {
        if (e.code !== "KeyX" || e.repeat) return;

        hidden = !hidden;

        if (hidden) {
            renderer.render = function (...args) {
                const sprites = this.sprites;
                const oldZ = new Map();

                for (const sprite of sprites) {
                    if (sprite.z === -1) {
                        oldZ.set(sprite, sprite.z);
                        sprite.z = -999999;
                    }
                }

                try {
                    return originalRender.apply(this, args);
                } finally {
                    for (const [sprite, z] of oldZ) {
                        sprite.z = z;
                    }
                }
            };
        } else {
            renderer.render = originalRender;
        }
    });
})();
