/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         article_id: "123",
 *         title: "Christmas is here!",
 *         body: "<p>New gifts in store for the jolly season</p>"
 *     }
 *
 * @example
 *     {
 *         article_id: "123",
 *         title: "Christmas is here!",
 *         body: "<p>New gifts in store for the jolly season</p>"
 *     }
 */
export interface UpdateArticleRequest {
    /**
     * The unique identifier for the article which is given by Intercom.
     */
    article_id: string;
    /** The title of the article.For multilingual articles, this will be the title of the default language's content. */
    title?: string;
    /** The description of the article. For multilingual articles, this will be the description of the default language's content. */
    description?: string;
    /** The content of the article. For multilingual articles, this will be the body of the default language's content. */
    body?: string;
    /** The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace. */
    author_id?: number;
    /** Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content. */
    state?: UpdateArticleRequest.State;
    /** The id of the article's parent collection or section. An article without this field stands alone. */
    parent_id?: string;
    /** The type of parent, which can either be a `collection` or `section`. */
    parent_type?: string;
    translated_content?: Intercom.ArticleTranslatedContent;
}

export namespace UpdateArticleRequest {
    /**
     * Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.
     */
    export type State = "published" | "draft";
    export const State = {
        Published: "published",
        Draft: "draft",
    } as const;
}
