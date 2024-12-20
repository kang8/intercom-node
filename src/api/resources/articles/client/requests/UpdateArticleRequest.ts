/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         article_id: "123",
 *         body: {
 *             title: "Christmas is here!",
 *             body: "<p>New gifts in store for the jolly season</p>"
 *         }
 *     }
 *
 * @example
 *     {
 *         article_id: "123",
 *         body: {
 *             title: "Christmas is here!",
 *             body: "<p>New gifts in store for the jolly season</p>"
 *         }
 *     }
 */
export interface UpdateArticleRequest {
    /**
     * The unique identifier for the article which is given by Intercom.
     */
    article_id: string;
    body?: Intercom.UpdateArticleRequestBody;
}