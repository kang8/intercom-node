/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The value describing a file upload set for a custom attribute
 */
export interface FileAttribute {
    type: string;
    /** The name of the file */
    name: string;
    /** The url of the file. This is a temporary URL and will expire after 30 minutes. */
    url: string;
    /** The type of file */
    content_type: string;
    /** The size of the file in bytes */
    filesize: number;
    /** The width of the file in pixels, if applicable */
    width: number;
    /** The height of the file in pixels, if applicable */
    height: number;
}