/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         created_at_after: 1719474967,
 *         created_at_before: 1719492967
 *     }
 */
export interface CreateDataExportRequest {
    /** The start date that you request data for. It must be formatted as a unix timestamp. */
    created_at_after: number;
    /** The end date that you request data for. It must be formatted as a unix timestamp. */
    created_at_before: number;
}