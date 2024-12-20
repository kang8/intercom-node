/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         conversation_id: "123",
 *         contact_id: "123",
 *         admin_id: "5017690"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "123",
 *         contact_id: "123",
 *         admin_id: "5017690"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "123",
 *         contact_id: "123",
 *         admin_id: "5017690"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "123",
 *         contact_id: "123",
 *         admin_id: "5017690"
 *     }
 */
export interface DetachContactFromConversationRequest {
    /**
     * The identifier for the conversation as given by Intercom.
     */
    conversation_id: string;
    /**
     * The identifier for the contact as given by Intercom.
     */
    contact_id: string;
    /** The `id` of the admin who is performing the action. */
    admin_id: string;
}