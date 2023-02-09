/*eslint no-floating-promise: "error"*/
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function Stars() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadStarsPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    const options = {
        preset: "stars",
    };

    return (
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
    );
};