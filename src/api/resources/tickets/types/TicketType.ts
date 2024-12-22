/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * A ticket type, used to define the data fields to be captured in a ticket.
 */
export interface TicketType {
    /** String representing the object's type. Always has the value `ticket_type`. */
    type: "ticket_type";
    /** The id representing the ticket type. */
    id: string;
    /** Category of the Ticket Type. */
    category: TicketType.Category;
    /** The name of the ticket type */
    name: string;
    /** The description of the ticket type */
    description: string;
    /** The icon of the ticket type */
    icon: string;
    /** The id of the workspace that the ticket type belongs to. */
    workspace_id: string;
    ticket_type_attributes: Intercom.TicketTypeAttributeList;
    /** Whether the ticket type is archived or not. */
    archived: boolean;
    /** The date and time the ticket type was created. */
    created_at: number;
    /** The date and time the ticket type was last updated. */
    updated_at?: number;
}

export namespace TicketType {
    /**
     * Category of the Ticket Type.
     */
    export type Category = "Customer" | "Back-office" | "Tracker";
    export const Category = {
        Customer: "Customer",
        BackOffice: "Back-office",
        Tracker: "Tracker",
    } as const;
}
