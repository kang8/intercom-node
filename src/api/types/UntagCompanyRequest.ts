/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * You can tag a single company or a list of companies.
 */
export interface UntagCompanyRequest {
    /** The name of the tag which will be untagged from the company */
    name: string;
    /** The id or company_id of the company can be passed as input parameters. */
    companies: UntagCompanyRequest.Companies.Item[];
}

export namespace UntagCompanyRequest {
    export type Companies = Companies.Item[];

    export namespace Companies {
        export interface Item {
            /** The Intercom defined id representing the company. */
            id: string;
            /** The company id you have defined for the company. */
            company_id: string;
            /** Always set to true */
            untag: true;
        }
    }
}