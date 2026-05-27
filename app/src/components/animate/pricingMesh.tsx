import { NeatGradient } from "@firecms/neat";

const config = {
    colors: [
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#FF008D',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: false,
        },
    ],
    speed: 6,
    horizontalPressure: 7,
    verticalPressure: 8,
    waveFrequencyX: 1,
    waveFrequencyY: 2,
    waveAmplitude: 8,
    shadows: 4,
    highlights: 6,
    colorBrightness: 0.95,
    colorSaturation: -8,
    wireframe: false,
    colorBlending: 10,
    backgroundColor: '#003FFF',
    backgroundAlpha: 1,
    grainScale: 4,
    grainSparsity: 0,
    grainIntensity: 0.25,
    grainSpeed: 1,
    resolution: 1,
    yOffset: 1849,
    yOffsetWaveMultiplier: 6.2,
    yOffsetColorMultiplier: 5.8,
    yOffsetFlowMultiplier: 6.5,
    flowDistortionA: 1.1,
    flowDistortionB: 0.8,
    flowScale: 1.6,
    flowEase: 0.32,
    flowEnabled: true,
    enableProceduralTexture: false,
    textureVoidLikelihood: 0.27,
    textureVoidWidthMin: 60,
    textureVoidWidthMax: 420,
    textureBandDensity: 1.2,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.22,
    proceduralBackgroundColor: '#0E0707',
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: false,
    domainWarpIntensity: 0,
    domainWarpScale: 3,
    vignetteIntensity: 0,
    vignetteRadius: 0.8,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: '#FFFFFF',
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0,
};

const canvas = document.getElementById("gradient") as HTMLCanvasElement | null;

if (canvas) {
    const gradient = new NeatGradient({
        ref: canvas,
        ...config
    });

    // Optional: react to scroll
    window.addEventListener("scroll", () => {
        gradient.yOffset = window.scrollY;
    });
} else {
    // Element not found; avoid creating NeatGradient with null
    // eslint-disable-next-line no-console
    console.warn('NeatGradient canvas element with id "gradient" not found');
}
