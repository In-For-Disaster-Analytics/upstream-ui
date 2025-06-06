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

import { mapValues } from '../runtime';
import type { SensorStatistics } from './SensorStatistics';
import {
    SensorStatisticsFromJSON,
    SensorStatisticsFromJSONTyped,
    SensorStatisticsToJSON,
    SensorStatisticsToJSONTyped,
} from './SensorStatistics';

/**
 * 
 * @export
 * @interface SensorItem
 */
export interface SensorItem {
    /**
     * 
     * @type {number}
     * @memberof SensorItem
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SensorItem
     */
    alias?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SensorItem
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SensorItem
     */
    postprocess?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SensorItem
     */
    postprocessscript?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SensorItem
     */
    units?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SensorItem
     */
    variablename?: string | null;
    /**
     * 
     * @type {SensorStatistics}
     * @memberof SensorItem
     */
    statistics?: SensorStatistics | null;
}

/**
 * Check if a given object implements the SensorItem interface.
 */
export function instanceOfSensorItem(value: object): value is SensorItem {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function SensorItemFromJSON(json: any): SensorItem {
    return SensorItemFromJSONTyped(json, false);
}

export function SensorItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'alias': json['alias'] == null ? undefined : json['alias'],
        'description': json['description'] == null ? undefined : json['description'],
        'postprocess': json['postprocess'] == null ? undefined : json['postprocess'],
        'postprocessscript': json['postprocessscript'] == null ? undefined : json['postprocessscript'],
        'units': json['units'] == null ? undefined : json['units'],
        'variablename': json['variablename'] == null ? undefined : json['variablename'],
        'statistics': json['statistics'] == null ? undefined : SensorStatisticsFromJSON(json['statistics']),
    };
}

export function SensorItemToJSON(json: any): SensorItem {
    return SensorItemToJSONTyped(json, false);
}

export function SensorItemToJSONTyped(value?: SensorItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'alias': value['alias'],
        'description': value['description'],
        'postprocess': value['postprocess'],
        'postprocessscript': value['postprocessscript'],
        'units': value['units'],
        'variablename': value['variablename'],
        'statistics': SensorStatisticsToJSON(value['statistics']),
    };
}

