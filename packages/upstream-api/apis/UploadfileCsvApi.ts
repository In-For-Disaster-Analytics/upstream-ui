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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface PostSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPostRequest {
    campaignId: number;
    stationId: number;
    uploadFileSensors: Blob;
    uploadFileMeasurements: Blob;
}

/**
 * 
 */
export class UploadfileCsvApi extends runtime.BaseAPI {

    /**
     * Process sensor and measurement files and store data in the database.
     * Post Sensor And Measurement
     */
    async postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPostRaw(requestParameters: PostSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['campaignId'] == null) {
            throw new runtime.RequiredError(
                'campaignId',
                'Required parameter "campaignId" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        if (requestParameters['stationId'] == null) {
            throw new runtime.RequiredError(
                'stationId',
                'Required parameter "stationId" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        if (requestParameters['uploadFileSensors'] == null) {
            throw new runtime.RequiredError(
                'uploadFileSensors',
                'Required parameter "uploadFileSensors" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        if (requestParameters['uploadFileMeasurements'] == null) {
            throw new runtime.RequiredError(
                'uploadFileMeasurements',
                'Required parameter "uploadFileMeasurements" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['uploadFileSensors'] != null) {
            formParams.append('upload_file_sensors', requestParameters['uploadFileSensors'] as any);
        }

        if (requestParameters['uploadFileMeasurements'] != null) {
            formParams.append('upload_file_measurements', requestParameters['uploadFileMeasurements'] as any);
        }

        const response = await this.request({
            path: `/api/v1/uploadfile_csv/campaign/{campaign_id}/station/{station_id}/sensor`.replace(`{${"campaign_id"}}`, encodeURIComponent(String(requestParameters['campaignId']))).replace(`{${"station_id"}}`, encodeURIComponent(String(requestParameters['stationId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Process sensor and measurement files and store data in the database.
     * Post Sensor And Measurement
     */
    async postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPost(requestParameters: PostSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.postSensorAndMeasurementApiV1UploadfileCsvCampaignCampaignIdStationStationIdSensorPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
