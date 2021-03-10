// Type definitions for FreeDraw 2.13.4
// Project: FreeDraw
// Definitions by: Jean-Baptiste Zeller <esurnir@gmail.com>
import { FeatureGroup, LatLng, Polygon, Map, Point } from 'leaflet';

export as namespace FreeDraw;

declare class FreeDraw extends FeatureGroup {
    constructor(options?: FreeDraw.FreeDrawOptions);
    create(latLngs: LatLng[], options?: FreeDraw.FreeDrawOptions): Polygon[];
    remove(polygon: Polygon): void;
    remove(): this;
    clear(): void;
    mode(mode: number): number;
    size(): number;
    all(): Polygon[];
    cancel(): void;
    listenForEvent(map: Map, svg: SVGSVGElement, options: FreeDraw.FreeDrawOptions): void;
    createPath(svg: SVGSVGElement, fromPoint: Point, strokeWidth: number): void;
}

declare namespace FreeDraw {
    export const polygons: WeakMap<Map, Set<Polygon>>
    /**
     * @constant NONE
     */
    export const NONE = 0;

    /**
     * @constant CREATE
     */
    export const CREATE = 1;

    /**
     * @constant EDIT
     */
    export const EDIT = 2;

    /**
     * @constant DELETE
     */
    export const DELETE = 4;

    /**
     * @constant APPEND
     */
    export const APPEND = 8;

    /**
     * @constant EDIT_APPEND
     */
    export const EDIT_APPEND = 10;

    /**
     * @constant ALL
     */
    export const ALL = 15;

    export const defaultOptions: {
        mode: typeof ALL,
        smoothFactor: 0.3,
        elbowDistance: 10,
        simplifyFactor: 1.1,
        mergePolygons: true,
        concavePolygon: true,
        maximumPolygons: typeof Infinity,
        notifyAfterEditExit: false,
        leaveModeAfterCreate: false,
        strokeWidth: 2
    };
    export const instanceKey: symbol;
    export const modesKey: symbol;
    export const notifyDeferredKey: symbol;
    export const edgesKey: symbol;
    export interface FreeDrawOptions {
        mode: number;
        smoothFactor: number;
        elbowFactor: number;
        simplifyFactor: number;
        mergePolygons: boolean;
        concavePolygon: boolean;
        maximumPolygons: number;
        notifyAfterEditExit: boolean;
        leaveModeAfterCreate: boolean;
        strokeWidth: number;
    }

    export const freedraw: (options?: FreeDrawOptions) => FreeDraw;

}

export = FreeDraw;
 