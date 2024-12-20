/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A CSV output file
 */
export interface DataExportCsv {
    /** The user_id of the user who was sent the message. */
    user_id: string;
    /** The external_user_id of the user who was sent the message */
    user_external_id?: string;
    /** The company ID of the user in relation to the message that was sent. Will return -1 if no company is present. */
    company_id: string;
    /** The users email who was sent the message. */
    email: string;
    /** The full name of the user receiving the message */
    name: string;
    /** The id of the message. */
    ruleset_id: string;
    /** The specific content that was received. In an A/B test each version has its own Content ID. */
    content_id: string;
    /** Email, Chat, Post etc. */
    content_type: string;
    /** The title of the content you see in your Intercom workspace. */
    content_title: string;
    /** As you edit content we record new versions. This ID can help you determine which version of a piece of content that was received. */
    ruleset_version_id?: string;
    /** ID for this receipt. Will be included with any related stats in other files to identify this specific delivery of a message. */
    receipt_id?: string;
    /** Timestamp for when the receipt was recorded. */
    received_at?: number;
    /** The id of the series that this content is part of. Will return -1 if not part of a series. */
    series_id?: string;
    /** The title of the series that this content is part of. */
    series_title?: string;
    /** The id of the series node that this ruleset is associated with. Each block in a series has a corresponding node_id. */
    node_id?: string;
    /** The first time a user replied to this message if the content was able to receive replies. */
    first_reply?: number;
    /** The first time a user completed this message if the content was able to be completed e.g. Tours, Surveys. */
    first_completion?: number;
    /** The first time the series this message was a part of was completed by the user. */
    first_series_completion?: number;
    /** The first time the series this message was a part of was disengaged by the user. */
    first_series_disengagement?: number;
    /** The first time the series this message was a part of was exited by the user. */
    first_series_exit?: number;
    /** The first time the user met this messages associated goal if one exists. */
    first_goal_success?: number;
    /** The first time the user opened this message. */
    first_open?: number;
    /** The first time the series the user clicked on a link within this message. */
    first_click?: number;
    /** The first time the series the user dismissed this message. */
    first_dismisall?: number;
    /** The first time the user unsubscribed from this message. */
    first_unsubscribe?: number;
    /** The first time this message hard bounced for this user */
    first_hard_bounce?: number;
}