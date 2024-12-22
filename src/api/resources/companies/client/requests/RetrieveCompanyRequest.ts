/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "my company",
 *         company_id: "12345",
 *         tag_id: "678910",
 *         segment_id: "98765"
 *     }
 */
export interface RetrieveCompanyRequest {
    /**
     * The `name` of the company to filter by.
     */
    name?: string;
    /**
     * The `company_id` of the company to filter by.
     */
    company_id?: string;
    /**
     * The `tag_id` of the company to filter by.
     */
    tag_id?: string;
    /**
     * The `segment_id` of the company to filter by.
     */
    segment_id?: string;
    /**
     * The page of results to fetch. Defaults to first page
     */
    page?: number;
    /**
     * How many results to display per page. Defaults to 15
     */
    per_page?: number;
}
