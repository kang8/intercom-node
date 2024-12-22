/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         contact_id: "63a07ddf05a32042dffac965",
 *         email: "joebloggs@intercom.io",
 *         name: "joe bloggs"
 *     }
 */
export interface UpdateContactRequest {
    /**
     * id
     */
    contact_id: string;
    /** The role of the contact. */
    role?: string;
    /** A unique identifier for the contact which is given to Intercom */
    external_id?: string;
    /** The contacts email */
    email?: string;
    /** The contacts phone */
    phone?: string;
    /** The contacts name */
    name?: string;
    /** An image URL containing the avatar of a contact */
    avatar?: string;
    /** The time specified for when a contact signed up */
    signed_up_at?: number;
    /** The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually) */
    last_seen_at?: number;
    /** The id of an admin that has been assigned account ownership of the contact */
    owner_id?: number;
    /** Whether the contact is unsubscribed from emails */
    unsubscribed_from_emails?: boolean;
    /** The custom attributes which are set for the contact */
    custom_attributes?: Record<string, unknown>;
}
