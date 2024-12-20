/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ListContactsRequest {
    /**
     * The page of results to fetch. Defaults to first page
     */
    page?: number;
    /**
     * How many results to display per page. Defaults to 15
     */
    per_page?: number;
    /**
     * String used to get the next page of conversations.
     */
    starting_after?: string;
}