/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * Payload of the request to reply on behalf of a contact using their `user_id`
 */
export interface ContactReplyTicketUserIdRequest extends Intercom.ContactReplyBaseRequest {
    /** The external_id you have defined for the contact. */
    user_id: string;
}
