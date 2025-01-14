/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * Contacts are your users in Intercom.
 */
export interface ContactList {
    /** Always list */
    type: "list";
    /** The list of contact objects */
    data: Intercom.Contact[];
    /** A count of the total number of objects. */
    total_count: number;
    pages?: Intercom.CursorPages;
}
