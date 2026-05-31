import ThreeGlobe from "three-globe";
declare module "@react-three/fiber" {
    interface ThreeElements {
        threeGlobe: ThreeElements["mesh"] & {
            new (): ThreeGlobe;
        };
    }
}
type Position = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};
export type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: {
        lat: number;
        lng: number;
    };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};
interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
}
export declare function Globe({ globeConfig, data }: WorldProps): import("react").JSX.Element;
export declare function WebGLRendererConfig(): null;
export declare function World(props: WorldProps): import("react").JSX.Element;
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
export declare function genRandomNumbers(min: number, max: number, count: number): number[];
export {};
//# sourceMappingURL=globe.d.ts.map