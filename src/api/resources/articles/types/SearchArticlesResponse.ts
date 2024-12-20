/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * The results of an Article search
 */
export interface SearchArticlesResponse {
    /** The type of the object - `list`. */
    type: "list";
    /** The total number of Articles matching the search query */
    total_count: number;
    /** An object containing the results of the search. */
    data: SearchArticlesResponse.Data;
    pages?: Intercom.CursorPages;
}

export namespace SearchArticlesResponse {
    /**
     * An object containing the results of the search.
     */
    export interface Data {
        /** An array of Article objects */
        articles?: Intercom.Article[];
        /** A corresponding array of highlighted Article content */
        highlights?: Intercom.ArticleSearchHighlights[];
    }
}