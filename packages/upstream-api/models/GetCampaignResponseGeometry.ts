/* tslint:disable */
/* eslint-disable */
/**
 * Upstream Sensor Storage
 * Sensor Storage for Upstream data
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { GeometryCollection } from './GeometryCollection';
import {
    instanceOfGeometryCollection,
    GeometryCollectionFromJSON,
    GeometryCollectionFromJSONTyped,
    GeometryCollectionToJSON,
} from './GeometryCollection';
import type { LineString } from './LineString';
import {
    instanceOfLineString,
    LineStringFromJSON,
    LineStringFromJSONTyped,
    LineStringToJSON,
} from './LineString';
import type { MultiLineString } from './MultiLineString';
import {
    instanceOfMultiLineString,
    MultiLineStringFromJSON,
    MultiLineStringFromJSONTyped,
    MultiLineStringToJSON,
} from './MultiLineString';
import type { MultiPoint } from './MultiPoint';
import {
    instanceOfMultiPoint,
    MultiPointFromJSON,
    MultiPointFromJSONTyped,
    MultiPointToJSON,
} from './MultiPoint';
import type { MultiPolygon } from './MultiPolygon';
import {
    instanceOfMultiPolygon,
    MultiPolygonFromJSON,
    MultiPolygonFromJSONTyped,
    MultiPolygonToJSON,
} from './MultiPolygon';
import type { Point } from './Point';
import {
    instanceOfPoint,
    PointFromJSON,
    PointFromJSONTyped,
    PointToJSON,
} from './Point';
import type { Polygon } from './Polygon';
import {
    instanceOfPolygon,
    PolygonFromJSON,
    PolygonFromJSONTyped,
    PolygonToJSON,
} from './Polygon';

/**
 * @type GetCampaignResponseGeometry
 * 
 * @export
 */
export type GetCampaignResponseGeometry = { type: 'GeometryCollection' } & GeometryCollection | { type: 'LineString' } & LineString | { type: 'MultiLineString' } & MultiLineString | { type: 'MultiPoint' } & MultiPoint | { type: 'MultiPolygon' } & MultiPolygon | { type: 'Point' } & Point | { type: 'Polygon' } & Polygon;

export function GetCampaignResponseGeometryFromJSON(json: any): GetCampaignResponseGeometry {
    return GetCampaignResponseGeometryFromJSONTyped(json, false);
}

export function GetCampaignResponseGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCampaignResponseGeometry {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'GeometryCollection':
            return Object.assign({}, GeometryCollectionFromJSONTyped(json, true), { type: 'GeometryCollection' } as const);
        case 'LineString':
            return Object.assign({}, LineStringFromJSONTyped(json, true), { type: 'LineString' } as const);
        case 'MultiLineString':
            return Object.assign({}, MultiLineStringFromJSONTyped(json, true), { type: 'MultiLineString' } as const);
        case 'MultiPoint':
            return Object.assign({}, MultiPointFromJSONTyped(json, true), { type: 'MultiPoint' } as const);
        case 'MultiPolygon':
            return Object.assign({}, MultiPolygonFromJSONTyped(json, true), { type: 'MultiPolygon' } as const);
        case 'Point':
            return Object.assign({}, PointFromJSONTyped(json, true), { type: 'Point' } as const);
        case 'Polygon':
            return Object.assign({}, PolygonFromJSONTyped(json, true), { type: 'Polygon' } as const);
        default:
            throw new Error(`No variant of GetCampaignResponseGeometry exists with 'type=${json['type']}'`);
    }
}

export function GetCampaignResponseGeometryToJSON(json: any): any {
    return GetCampaignResponseGeometryToJSONTyped(json, false);
}

export function GetCampaignResponseGeometryToJSONTyped(value?: GetCampaignResponseGeometry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'GeometryCollection':
            return Object.assign({}, GeometryCollectionToJSON(value), { type: 'GeometryCollection' } as const);
        case 'LineString':
            return Object.assign({}, LineStringToJSON(value), { type: 'LineString' } as const);
        case 'MultiLineString':
            return Object.assign({}, MultiLineStringToJSON(value), { type: 'MultiLineString' } as const);
        case 'MultiPoint':
            return Object.assign({}, MultiPointToJSON(value), { type: 'MultiPoint' } as const);
        case 'MultiPolygon':
            return Object.assign({}, MultiPolygonToJSON(value), { type: 'MultiPolygon' } as const);
        case 'Point':
            return Object.assign({}, PointToJSON(value), { type: 'Point' } as const);
        case 'Polygon':
            return Object.assign({}, PolygonToJSON(value), { type: 'Polygon' } as const);
        default:
            throw new Error(`No variant of GetCampaignResponseGeometry exists with 'type=${value['type']}'`);
    }

}

