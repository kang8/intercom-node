/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The SLA Applied object contains the details for which SLA has been applied to this conversation.
 * Important: if there are any canceled sla_events for the conversation - meaning an SLA has been manually removed from a conversation, the sla_status will always be returned as null.
 */
export interface SlaApplied {
    /** object type */
    type: string;
    /** The name of the SLA as given by the teammate when it was created. */
    sla_name: string;
    /**
     * SLA statuses:
     *             - `hit`: If there’s at least one hit event in the underlying sla_events table, and no “missed” or “canceled” events for the conversation.
     *             - `missed`: If there are any missed sla_events for the conversation and no canceled events. If there’s even a single missed sla event, the status will always be missed. A missed status is not applied when the SLA expires, only the next time a teammate replies.
     *             - `active`: An SLA has been applied to a conversation, but has not yet been fulfilled. SLA status is active only if there are no “hit, “missed”, or “canceled” events.
     */
    sla_status: SlaApplied.SlaStatus;
}

export namespace SlaApplied {
    /**
     * SLA statuses:
     *             - `hit`: If there’s at least one hit event in the underlying sla_events table, and no “missed” or “canceled” events for the conversation.
     *             - `missed`: If there are any missed sla_events for the conversation and no canceled events. If there’s even a single missed sla event, the status will always be missed. A missed status is not applied when the SLA expires, only the next time a teammate replies.
     *             - `active`: An SLA has been applied to a conversation, but has not yet been fulfilled. SLA status is active only if there are no “hit, “missed”, or “canceled” events.
     */
    export type SlaStatus = "hit" | "missed" | "cancelled" | "active";
    export const SlaStatus = {
        Hit: "hit",
        Missed: "missed",
        Cancelled: "cancelled",
        Active: "active",
    } as const;
}