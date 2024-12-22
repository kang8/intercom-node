/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
 *     }
 */
export interface ListAttachedContactsRequest {
    /**
     * The unique identifier for the company which is given by Intercom
     */
    company_id: string;
    /**
     * The page of results to fetch. Defaults to first page
     */
    page?: number;
    /**
     * How many results to return per page. Defaults to 15
     */
    per_page?: number;
}
