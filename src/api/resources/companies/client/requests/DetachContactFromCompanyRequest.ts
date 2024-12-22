/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         contact_id: "58a430d35458202d41b1e65b",
 *         company_id: "58a430d35458202d41b1e65b"
 *     }
 */
export interface DetachContactFromCompanyRequest {
    /**
     * The unique identifier for the contact which is given by Intercom
     */
    contact_id: string;
    /**
     * The unique identifier for the company which is given by Intercom
     */
    company_id: string;
}
