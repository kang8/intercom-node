/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The statistics of an article.
 */
export interface ArticleStatistics {
    /** The type of object - `article_statistics`. */
    type: "article_statistics";
    /** The number of total views the article has received. */
    views: number;
    /** The number of conversations started from the article. */
    conversions: number;
    /** The number of total reactions the article has received. */
    reactions: number;
    /** The percentage of happy reactions the article has received against other types of reaction. */
    happy_reaction_percentage: number;
    /** The percentage of neutral reactions the article has received against other types of reaction. */
    neutral_reaction_percentage: number;
    /** The percentage of sad reactions the article has received against other types of reaction. */
    sad_reaction_percentage: number;
}