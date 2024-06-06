// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as PartsAPI from './parts';
import * as Shared from '../shared';

export class Parts extends APIResource {
  /**
   * For managing conversations you can:
   *
   * - Close a conversation
   * - Snooze a conversation to reopen on a future date
   * - Open a conversation which is `snoozed` or `closed`
   * - Assign a conversation to an admin and/or team.
   */
  create(
    id: string,
    params: PartCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/conversations/${id}/parts`, {
      body,
      ...options,
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export type PartCreateParams =
  | PartCreateParams.CloseConversationRequest
  | PartCreateParams.SnoozeConversationRequest
  | PartCreateParams.OpenConversationRequest
  | PartCreateParams.AssignConversationRequest;

export namespace PartCreateParams {
  export interface CloseConversationRequest {
    /**
     * Body param: The id of the admin who is performing the action.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'close';

    /**
     * Body param:
     */
    type: 'admin';

    /**
     * Body param: Optionally you can leave a message in the conversation to provide
     * additional context to the user and other teammates.
     */
    body?: string;

    /**
     * Header param: Intercom API version.By default, it's equal to the version set in
     * the app package.
     */
    'Intercom-Version'?:
      | '1.0'
      | '1.1'
      | '1.2'
      | '1.3'
      | '1.4'
      | '2.0'
      | '2.1'
      | '2.2'
      | '2.3'
      | '2.4'
      | '2.5'
      | '2.6'
      | '2.7'
      | '2.8'
      | '2.9'
      | '2.10'
      | '2.11'
      | 'Unstable';
  }

  export interface SnoozeConversationRequest {
    /**
     * Body param: The id of the admin who is performing the action.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'snoozed';

    /**
     * Body param: The time you want the conversation to reopen.
     */
    snoozed_until: number;

    /**
     * Header param: Intercom API version.By default, it's equal to the version set in
     * the app package.
     */
    'Intercom-Version'?:
      | '1.0'
      | '1.1'
      | '1.2'
      | '1.3'
      | '1.4'
      | '2.0'
      | '2.1'
      | '2.2'
      | '2.3'
      | '2.4'
      | '2.5'
      | '2.6'
      | '2.7'
      | '2.8'
      | '2.9'
      | '2.10'
      | '2.11'
      | 'Unstable';
  }

  export interface OpenConversationRequest {
    /**
     * Body param: The id of the admin who is performing the action.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'open';

    /**
     * Header param: Intercom API version.By default, it's equal to the version set in
     * the app package.
     */
    'Intercom-Version'?:
      | '1.0'
      | '1.1'
      | '1.2'
      | '1.3'
      | '1.4'
      | '2.0'
      | '2.1'
      | '2.2'
      | '2.3'
      | '2.4'
      | '2.5'
      | '2.6'
      | '2.7'
      | '2.8'
      | '2.9'
      | '2.10'
      | '2.11'
      | 'Unstable';
  }

  export interface AssignConversationRequest {
    /**
     * Body param: The id of the admin who is performing the action.
     */
    admin_id: string;

    /**
     * Body param: The `id` of the `admin` or `team` which will be assigned the
     * conversation. A conversation can be assigned both an admin and a team.\nSet `0`
     * if you want this assign to no admin or team (ie. Unassigned).
     */
    assignee_id: string;

    /**
     * Body param:
     */
    message_type: 'assignment';

    /**
     * Body param:
     */
    type: 'admin' | 'team';

    /**
     * Body param: Optionally you can send a response in the conversation when it is
     * assigned.
     */
    body?: string;

    /**
     * Header param: Intercom API version.By default, it's equal to the version set in
     * the app package.
     */
    'Intercom-Version'?:
      | '1.0'
      | '1.1'
      | '1.2'
      | '1.3'
      | '1.4'
      | '2.0'
      | '2.1'
      | '2.2'
      | '2.3'
      | '2.4'
      | '2.5'
      | '2.6'
      | '2.7'
      | '2.8'
      | '2.9'
      | '2.10'
      | '2.11'
      | 'Unstable';
  }
}

export namespace Parts {
  export import PartCreateParams = PartsAPI.PartCreateParams;
}
