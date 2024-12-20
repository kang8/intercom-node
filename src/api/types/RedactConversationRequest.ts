/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

export type RedactConversationRequest =
    /**
     * Payload of the request to redact a conversation part */
    | Intercom.RedactConversationRequest.ConversationPart
    /**
     * Payload of the request to redact a conversation source */
    | Intercom.RedactConversationRequest.Source;

export namespace RedactConversationRequest {
    export interface ConversationPart {
        type: "conversation_part";
        /** The id of the conversation. */
        conversation_id: string;
        /** The id of the conversation_part. */
        conversation_part_id: string;
    }

    export interface Source {
        type: "source";
        /** The id of the conversation. */
        conversation_id: string;
        /** The id of the source. */
        source_id: string;
    }
}