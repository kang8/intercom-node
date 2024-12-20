/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A list of tags objects in the workspace.
 */
export interface TagList {
    /** The type of the object */
    type: "list";
    /** A list of tags objects associated with the workspace . */
    data: Intercom.Tag[];
}