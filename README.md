# Intercom TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fintercom%2Fintercom-node)
[![npm shield](https://img.shields.io/npm/v/intercom-client)](https://www.npmjs.com/package/intercom-client)

The Intercom TypeScript library provides convenient access to the Intercom API from TypeScript.

[![npm](https://img.shields.io/npm/v/intercom-client)](https://www.npmjs.com/package/intercom-client)
![Intercom API Version](https://img.shields.io/badge/Intercom%20API%20Version-2.11-blue)
![Typescript Supported](https://img.shields.io/badge/Typescript-Supported-lightgrey)

## Project Updates

## Breaking changes

The TypeScript SDK has been updated to support latest API version (2.11).

## Installation

```sh
npm i -s intercom-client
```

## Reference

A full reference for this library is available [here](./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { IntercomClient } from "intercom-client";

const client = new IntercomClient({ token: "YOUR_TOKEN" });
await client.articles.create({
    title: "How to create an account",
    description: "Example article about creating an account.",
    body: "Here are the steps to create an account.",
    author_id: 1295,
    state: "published",
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Intercom } from "intercom-client";

const request: Intercom.ConfigureAwayAdminRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { IntercomError } from "intercom-client";

try {
    await client.articles.create(...);
} catch (err) {
    if (err instanceof IntercomError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Request Options

This client library also supports passing in [`request` options](https://github.com/axios/axios#request-config):

```typescript
const client = new Client({ tokenAuth: { token: "my_token" } });
client.useRequestOpts({
    baseURL: "http://local.test-server.com",
});
```

Note that certain request options (such as `json`, and certain `headers` names cannot be overriden).

### Setting the API base url

If you are using the european instance of intercom and would like to call it directly and not be redirected through our US instance, you can set the `baseUrl` as follows:

```typescript
const client = new Client({ tokenAuth: { token: "my_token" } });
client.useRequestOpts({
    baseURL: "https://api.eu.intercom.io",
});
```

## Examples

### Admins

#### [Retrieve admin](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/admins/retrieveadmin)

```typescript
const admin = await client.admins.find({ id: "123" });
```

#### [Set Admin away](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/admins/setawayadmin)

```typescript
await client.admins.away({
    adminId: "123",
    enableAwayMode: true,
    enableReassignMode: false,
});
```

#### [List all activity logs](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/admins/listactivitylogs)

```typescript
await client.admins.listAllActivityLogs({
    before: new Date('Fri, 17 Dec 2021 18:02:18 GMT');,
    after: new Date('Fri, 17 Dec 2021 18:02:18 GMT');,
});
```

#### [List all admins](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/admins/listadmins)

```typescript
const admins = await client.admins.list();
```

### Articles

#### [Create an article](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/articles/createarticle)

```typescript
const article = await client.articles.create({
    title: "How to create an account",
    description: "Example article about creating an account.",
    body: "<p>Here are the steps to create an account.</p>",
    authorId: 1,
    state: "published",
    parentId: 1,
    parentType: "collection",
    translatedContent: {
        fr: {
            title: "Comment créer un compte",
            description: "Exemple d'article sur la création d'un compte.",
            body: "<p>Voici les étapes pour créer un compte.</p>",
            author_id: 1,
            state: "published",
        },
    },
});
```

#### [Retrieve an article](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/articles/retrievearticle)

```typescript
const response = await client.articles.find({ id: "123" });
```

#### [Update an article](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/articles/updatearticle)

```typescript
const article = await client.articles.update({
    id: "123",
    title: "How to create an account",
    description: "Example article about creating an account.",
    body: "<p>Here are the steps to create an account.</p>",
    authorId: 1,
    state: "published",
    parentId: 1,
    parentType: "collection",
    translatedContent: {
        fr: {
            title: "Comment créer un compte",
            description: "Exemple d'article sur la création d'un compte.",
            body: "<p>Voici les étapes pour créer un compte.</p>",
            author_id: 1,
            state: "published",
        },
    },
});
```

#### [Delete an article](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/articles/deletearticle)

```typescript
await client.articles.delete({ id: "123" });
```

#### [List all articles](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/articles/listarticles)

```typescript
const response = await client.articles.list({
    page: 3,
    perPage: 12,
});
```

### Companies

#### [Create a company](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/createorupdatecompany)

```typescript
const company = await client.companies.create({
    createdAt: dateToUnixTimestamp(new Date()),
    companyId: "1234",
    name: "Acme Inc.",
    monthlySpend: 9001,
    plan: "Premium",
    size: 62049,
    website: "http://acme-example.com",
    industry: "Software",
    customAttributes: {},
});
```

#### [Update a company](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/updatecompany)

```typescript
const company = await client.companies.update({
    createdAt: dateToUnixTimestamp(new Date()),
    companyId: "1234",
    name: "Acme Inc.",
    monthlySpend: 9001,
    plan: "Premium",
    size: 62049,
    website: "http://acme-example.com",
    industry: "Software",
    customAttributes: {},
});
```

#### [Retrieve a company](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/retrieveacompanybyid)

##### By id

```typescript
const company = await client.companies.find({
    companyId: 123,
});
```

##### By name

```typescript
const company = await client.companies.find({
    name: "bruh moment inc.",
});
```

#### [Delete a company](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/deletecompany)

```typescript
const company = await client.companies.delete({
    id: 62049,
});
```

#### [List all companies](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/listallcompanies)

##### With pagination

```typescript
const companies = await client.companies.list({
    page: 1,
    perPage: 35,
    order: Order.DESC,
});
```

##### With TagId and SegmentId

```typescript
const companies = await client.companies.list({
    tagId: "1234",
    segmentId: "4567",
});
```

#### [Scroll over companies](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/companies/scrolloverallcompanies)

##### Using infinite scroll

```typescript
const companies = await client.companies.scroll.each({});
```

##### Using manual scroll

```typescript
const companies = await client.companies.scroll.next({
    scrollParam: "123_soleil",
});
```

#### [Attach a contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/attachcontacttoacompany)

```typescript
const response = await client.companies.attachContact({
    contactId: "123",
    companyId: "234",
});
```

#### [Detach a contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/detachcontactfromacompany)

```typescript
const response = await client.companies.detachContact({
    contactId: "123",
    companyId: "234",
});
```

#### [List attached contacts](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/listattachedcontacts)

```typescript
const response = await client.companies.listAttachedContacts({
    companyId: "123",
    page: 1,
    perPage: 15,
});
```

#### [List attached segments](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/listsegmentsforacontact)

```typescript
const response = await client.companies.listAttachedSegments({
    companyId: "123",
});
```

### Contacts

#### [Create Contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/createcontact)

##### With User Role

```typescript
const user = await client.contacts.createUser({
    externalId: "536e564f316c83104c000020",
    phone: "+447778889999",
    name: "Joe Example",
    avatar: "https://example.com/photo.jpg",
    signedUpAt: 1638203719,
    lastSeenAt: 1638203720,
    ownerId: "536e564f316c83104c000021",
    isUnsubscribedFromEmails: true,
});
```

##### With Lead Role

```typescript
const lead = await client.contacts.createLead({
    phone: "+447778889999",
    name: "Joe Example",
    avatar: "https://example.com/photo.jpg",
    signedUpAt: 1638203719,
    lastSeenAt: 1638203720,
    ownerId: "536e564f316c83104c000021",
    isUnsubscribedFromEmails: true,
});
```

#### [Retrieve a Contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/showcontact)

```typescript
const response = await client.contacts.find({ id: "123" });
```

#### [Update a Contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/updatecontact)

```typescript
const response = await client.contacts.update({
    id: "123",
    role: Role.USER,
    name: "Jane Example",
    customAttributes: {
        billingType: "Monthly",
    },
});
```

#### [Delete a Contact](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/contacts/deletecontact)

```typescript
const response = await client.contacts.delete({ id: "123" });
```

#### [Archive a Contact](https://developers.intercom.com/intercom-api-reference/reference/archive-a-contact)

```typescript
const response = await client.contacts.archive({ id: "123" });
```

#### [Unarchive a Contact](https://developers.intercom.com/intercom-api-reference/reference/unarchive-a-contact)

```typescript
const response = await client.contacts.unarchive({ id: "123" });
```

#### [Merge two Contacts](https://developers.intercom.com/intercom-api-reference/reference/merge-contact)

```typescript
const response = await client.contacts.mergeLeadInUser({
    leadId: "123",
    userId: "234",
});
```

#### [Search for contacts](https://developers.intercom.com/intercom-api-reference/reference/search-for-contacts)

```typescript
const response = await client.contacts.search({
    data: {
        query: {
            operator: Operators.AND,
            value: [
                {
                    operator: Operators.AND,
                    value: [
                        {
                            field: "updated_at",
                            operator: Operators.GREATER_THAN,
                            value: 1560436650,
                        },
                        {
                            field: "conversation_rating.rating",
                            operator: Operators.EQUALS,
                            value: 1,
                        },
                    ],
                },
                {
                    operator: Operators.OR,
                    value: [
                        {
                            field: "updated_at",
                            operator: Operators.GREATER_THAN,
                            value: 1560436650,
                        },
                        {
                            field: "conversation_rating.rating",
                            operator: Operators.EQUALS,
                            value: 2,
                        },
                    ],
                },
            ],
        },
        pagination: {
            per_page: 5,
            starting_after: "WzE2MzU4NjA2NDgwMDAsIjYxODJiNjJlNDM4YjdhM2EwMWE4YWYxNSIsMl0=",
        },
        sort: { field: "name", order: SearchContactOrderBy.ASC },
    },
});
```

#### [List all Contacts](https://developers.intercom.com/intercom-api-reference/reference/list-contacts)

##### With cursor

```typescript
const response = await client.contacts.list({
    perPage: 5,
    startingAfter: "WzE2MzU3NzU4NjkwMDAsIjYxODJiNjJhMDMwZTk4OTBkZWU4NGM5YiIsMl0=",
});
```

##### Without a cursor

```typescript
const response = await client.contacts.list();
```

#### [List attached companies](https://developers.intercom.com/intercom-api-reference/reference/list-companies-of-contact)

```typescript
const response = await client.contacts.listAttachedCompanies({
    id: "123",
    perPage: 5,
    page: 1,
});
```

#### [List attached tags](https://developers.intercom.com/intercom-api-reference/reference/list-tags-of-contact)

```typescript
const response = await client.contacts.listAttachedTags({ id: "123" });
```

#### [List attached segments](https://developers.intercom.com/intercom-api-reference/reference/list-attached-segments)

```typescript
const response = await client.contacts.listAttachedSegments({ id: "123" });
```

#### [List attached email subscriptions](https://developers.intercom.com/intercom-api-reference/reference/list-attached-email-subscriptions)

```typescript
const response = await client.contacts.listAttachedEmailSubscriptions({
    id: "123",
});
```

### Conversations

#### [Create a conversation](https://developers.intercom.com/intercom-api-reference/reference/create-a-conversation)

```typescript
const response = await client.conversations.create({
    userId: "123",
    body: "Hello darkness my old friend",
});
```

#### [Retrieve a conversation](https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-conversation)

##### Formatted text

```typescript
const response = await client.conversations.find({
    id: "123",
});
```

##### As plain text

```typescript
const response = await client.conversations.find({
    id: "123",
    inPlainText: true,
});
```

#### [Update a conversation](https://developers.intercom.com/intercom-api-reference/reference/update-a-conversation)

```typescript
const response = await client.conversations.update({
    id,
    markRead: true,
    customAttributes: {
        anything: "you want",
    },
});
```

#### [Reply to a conversation](https://developers.intercom.com/intercom-api-reference/reference/reply-to-a-conversation)

##### By id

###### As user

```typescript
const response = await client.conversations.replyByIdAsUser({
    id: "098",
    body: "blablbalba",
    intercomUserId: "123",
    attachmentUrls: "345",
});
```

###### As admin

```typescript
const response = await client.conversations.replyByIdAsAdmin({
    id: "098",
    adminId: "458",
    messageType: ReplyToConversationMessageType.NOTE,
    body: "<b>Bee C</b>",
    attachmentUrls: ["https://site.org/bebra.jpg"],
});
```

##### By last conversation

###### As user

```typescript
const response = await client.conversations.replyByLastAsUser({
    body: "blablbalba",
    intercomUserId: "123",
    attachmentUrls: "345",
});
```

###### As admin

```typescript
const response = await client.conversations.replyByLastAsAdmin({
    adminId: "458",
    messageType: ReplyToConversationMessageType.NOTE,
    body: "<b>Bee C</b>",
    attachmentUrls: ["https://site.org/bebra.jpg"],
});
```

#### [Assign a conversation](https://developers.intercom.com/intercom-api-reference/reference/assign-a-conversation)

##### As team without assignment rules

```typescript
const response = await client.conversations.assign({
    id: "123",
    type: AssignToConversationUserType.TEAM,
    adminId: "456",
    assigneeId: "789",
    body: "<b>blablbalba</b>",
});
```

##### As team with assignment rules

```typescript
const response = await client.conversations.assign({
    id: "123",
    withRunningAssignmentRules: true,
});
```

#### [Snooze a conversation](https://developers.intercom.com/intercom-api-reference/reference/snooze-a-conversation)

```typescript
const response = await client.conversations.snooze({
    id: "123",
    adminId: "234",
    snoozedUntil: "1501512795",
});
```

#### [Close a conversation](https://developers.intercom.com/intercom-api-reference/reference/close-a-conversation)

```typescript
const response = await client.conversations.close({
    id: "123",
    adminId: "456",
    body: "That's it...",
});
```

#### [Open a conversation](https://developers.intercom.com/intercom-api-reference/reference/open-a-conversation)

```typescript
const response = await client.conversations.open({
    id: "123",
    adminId: "234",
});
```

#### [Attach a contact to group conversation](https://developers.intercom.com/intercom-api-reference/reference/adding-to-group-conversations-as-admin)

##### As admin, using intercomUserid

```typescript
const response = await client.conversations.attachContactAsAdmin({
    id: "123",
    adminId: "234",
    customer: {
        intercomUserId: "456",
    },
});
```

##### As contact, using intercomUserid

```typescript
const response = await client.conversations.attachContactAsAdmin({
    id: "123",
    userId: "234",
    customer: {
        intercomUserId: "456",
    },
});
```

#### [Delete a contact from group conversation as admin](https://developers.intercom.com/intercom-api-reference/reference/deleting-from-group-conversations)

```typescript
const response = await client.conversations.detachContactAsAdmin({
    conversationId: "123",
    contactId: "456",
    adminId: "789",
});
```

#### [Search for conversations](https://developers.intercom.com/intercom-api-reference/reference/search-for-conversations)

```typescript
const response = await client.conversations.search({
    data: {
        query: {
            operator: Operators.AND,
            value: [
                {
                    operator: Operators.AND,
                    value: [
                        {
                            field: "updated_at",
                            operator: Operators.GREATER_THAN,
                            value: 1560436650,
                        },
                        {
                            field: "conversation_rating.rating",
                            operator: Operators.EQUALS,
                            value: 1,
                        },
                    ],
                },
                {
                    operator: Operators.OR,
                    value: [
                        {
                            field: "updated_at",
                            operator: Operators.GREATER_THAN,
                            value: 1560436650,
                        },
                        {
                            field: "conversation_rating.rating",
                            operator: Operators.EQUALS,
                            value: 2,
                        },
                    ],
                },
            ],
        },
        pagination: {
            per_page: 5,
            starting_after: "WzE2MzU4NjA2NDgwMDAsIjYxODJiNjJlNDM4YjdhM2EwMWE4YWYxNSIsMl0=",
        },
        sort: {
            field: "name",
            order: SearchConversationOrderBy.DESC,
        },
    },
});
```

#### [List all conversations](https://developers.intercom.com/intercom-api-reference/reference/list-conversations)

```typescript
const response = await client.conversations.list({
    startingAfter: "WzE2NzA0MjI1MjkwMDAsMjQzMTY3NzA2ODcsMl0=",
    perPage: 10,
});
```

#### [Redact a conversation](https://developers.intercom.com/intercom-api-reference/reference/redact-a-conversation-part)

```typescript
const response = await client.conversations.redactConversationPart({
    type: RedactConversationPartType.CONVERSATION_PART,
    conversationId: "123",
    conversationPartId: "456",
});
```

### Counts

#### [App Total Count](https://developers.intercom.com/intercom-api-reference/reference/company-user-counts)

```typescript
const response = await client.counts.forApp();
```

#### [Conversation Count Model](https://developers.intercom.com/intercom-api-reference/reference/conversation-counts)

```typescript
const response = await client.counts.countConversation();
```

#### [Admin Conversation Count Model](https://developers.intercom.com/intercom-api-reference/reference/admin-conversations)

```typescript
const response = await client.counts.countAdminConversation();
```

#### [User Segment/Tag Count Model](https://developers.intercom.com/intercom-api-reference/reference/user-tag-counts)

##### Count User Segment

```typescript
const response = await client.counts.countUserSegment();
```

##### Count User Tag

```typescript
const response = await client.counts.countUserTag();
```

#### [Company User/Segment/Tag Count Model](https://developers.intercom.com/intercom-api-reference/reference/company-tag-counts)

##### Count Company Segment

```typescript
const response = await client.counts.countCompanySegment();
const response = await client.counts.countCompanyTag();
const response = await client.counts.countCompanyUser();
```

##### Count Company Tag

```typescript
const response = await client.counts.countCompanyTag();
```

##### Count Company User

```typescript
const response = await client.counts.countCompanyUser();
```

### Data Attributes

#### [Create Data Attribute](https://developers.intercom.com/intercom-api-reference/reference/create-data-attributes)

```typescript
const response = await client.dataAttributes.create({
    name: "list_cda",
    model: ModelType.CONTACT,
    dataType: DataType.STRING,
    description: "You are either alive or dead",
    options: [{ value: "alive" }, { value: "dead" }],
});
```

#### [Update Data Attribute](https://developers.intercom.com/intercom-api-reference/reference/update-data-attributes)

```typescript
const response = await client.dataAttributes.update({
    id: "123",
    description: "You are either alive or dead",
    options: [{ value: "alive" }, { value: "dead" }],
    archived: true,
});
```

#### [List all Data Attributes](https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes)

```typescript
const response = await client.dataAttributes.list({
    model: ModelType.CONTACT,
    includeArchived: true,
});
```

### Data Exports

#### [Create a export job](https://developers.intercom.com/intercom-api-reference/reference/creating-an-export-job)

```typescript
const response = await client.dataExport.create({
    createdAtAfter: 1527811200,
    createdAtBefore: 1530316800,
});
```

#### [Retrieve a job status](https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-job-status)

```typescript
const response = await client.dataExport.find({id: export.id})
```

#### [Cancel a job](https://developers.intercom.com/intercom-api-reference/reference/the-export-job-model)

```typescript
const response = await client.dataExport.cancel({id: export.id})
```

### Events

#### [Submit a data event](https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes)

```typescript
const response = await client.events.create({
    eventName: "placed-order",
    createdAt: 1389913941,
    userId: "f4ca124298",
    metadata: {
        order_date: 1392036272,
        stripe_invoice: "inv_3434343434",
        order_number: {
            value: "3434-3434",
            url: "https://example.org/orders/3434-3434",
        },
        price: {
            currency: "usd",
            amount: 2999,
        },
    },
});
```

#### [List all data events](https://developers.intercom.com/intercom-api-reference/reference/list-user-events)

```typescript
const response = await client.events.listBy({
    userId: "1234",
    perPage: 2,
    summary: true,
    email: "i_love_memes@gmail.com",
});
```

### Help Center - Collections

#### [Create a collection](https://developers.intercom.com/intercom-api-reference/reference/create-a-collection)

```typescript
const collection = await client.helpCenter.collections.create({
    name: "Thanks for everything",
    description: "English description",
    translatedContent: {
        fr: {
            name: "Allez les verts",
            description: "French description",
        },
    },
});
```

#### [Retrieve a collection](https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-collection)

```typescript
const response = await client.helpCenter.collections.find({ id: "123" });
```

#### [Update a collection](https://developers.intercom.com/intercom-api-reference/reference/update-a-collection)

```typescript
const article = await client.helpCenter.collections.update({
    id: "123",
    name: "Thanks for everything",
    description: "English description",
    translatedContent: {
        fr: {
            name: "Allez les verts",
            description: "French description",
        },
    },
});
```

#### [Delete a collection](https://developers.intercom.com/intercom-api-reference/reference/delete-a-collection)

```typescript
await client.helpCenter.collections.delete({
    id: "123",
});
```

#### [List all collections](https://developers.intercom.com/intercom-api-reference/reference/list-all-collections)

```typescript
const response = client.helpCenter.collections.list({
    page: 3,
    perPage: 12,
});
```

## Help Center - Sections

#### [Create a section](https://developers.intercom.com/intercom-api-reference/reference/create-a-section)

```typescript
const collection = await client.helpCenter.sections.create({
    name: "Thanks for everything",
    parentId: "1234",
    translatedContent: {
        fr: {
            name: "Allez les verts",
            description: "French description",
        },
    },
});
```

#### [Retrieve a section](https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-section)

```typescript
const response = await client.helpCenter.sections.find({ id: "123" });
```

#### [Update a section](https://developers.intercom.com/intercom-api-reference/reference/update-a-section)

```typescript
const article = await client.helpCenter.sections.update({
    id: "123",
    name: "Thanks for everything",
    parentId: "456",
    translatedContent: {
        fr: {
            name: "Allez les verts",
            description: "French description",
        },
    },
});
```

#### [Delete a section](https://developers.intercom.com/intercom-api-reference/reference/delete-a-section)

```typescript
await client.helpCenter.sections.delete({
    id: "123",
});
```

#### [List all sections](https://developers.intercom.com/intercom-api-reference/reference/list-all-sections)

```typescript
const response = client.helpCenter.sections.list({
    page: 3,
    perPage: 12,
});
```

### Messages

#### [Create a message](https://developers.intercom.com/intercom-api-reference/reference/admin-initiated-conversation)

```typescript
const response = await client.messages.create({
    messageType: "email",
    subject: "This is our demand now",
    body: "Destroy ponies",
    template: "plain",
    from: {
        type: "admin",
        id: "394051",
    },
    to: {
        type: "user",
        id: "536e564f316c83104c000020",
    },
});
```

#### [Create conversation without contact reply](https://developers.intercom.com/intercom-api-reference/reference/admin-initiated-conversation)

```typescript
const response = await client.messages.create({
    messageType: "inapp",
    body: "Look at me, I am a conversation now",
    from: {
        type: "admin",
        id: "394051",
    },
    to: {
        type: "user",
        id: "536e564f316c83104c000020",
    },
    createConversationWithoutContactReply: true,
});
```

### Notes

#### [Create a note](https://developers.intercom.com/intercom-api-reference/reference/create-note-for-contact)

```typescript
const response = await client.notes.create({
    adminId: "12345",
    body: "Shiny",
    contactId: "5678",
});
```

#### [Retrieve a note](https://developers.intercom.com/intercom-api-reference/reference/view-a-note)

```typescript
const response = await client.notes.find({ id: "123" });
```

#### [List all notes](https://developers.intercom.com/intercom-api-reference/reference/list-notes-of-contact)

```typescript
const response = await client.notes.list({
    contactId: "123",
    page: 2,
    perPage: 3,
});
```

### Segments

#### [Retrieve a segment](https://developers.intercom.com/intercom-api-reference/reference/view-a-segment)

```typescript
const response = await client.segments.find({
    id: "123",
    includeCount: true,
});
```

#### [List all segments](https://developers.intercom.com/intercom-api-reference/reference/list-segments)

```typescript
const response = await client.segments.list({
    includeCount: true,
});
```

### Subscriptions

#### [List all subscription types](https://developers.intercom.com/intercom-api-reference/reference/list-all-subscription-types)

```typescript
const response = await client.subscriptions.listTypes();
```

### PhoneCallRedirects

#### [Create a phone call redirect](https://developers.intercom.com/intercom-api-reference/reference/create-a-phone-switch)

```typescript
const response = await client.phoneCallRedirect.create({
    phone: "+353871234567",
});
```

### Tags

#### [Create or update a tag](https://developers.intercom.com/intercom-api-reference/reference/create-and-update-tags)

##### Create

```typescript
const response = await client.tags.create({ name: "haven" });
```

##### Update

```typescript
const response = await client.tags.update({ id: "123", name: "haven" });
```

#### [Delete a tag](https://developers.intercom.com/intercom-api-reference/reference/delete-a-tag)

```typescript
const response = await client.tags.delete({ id: "baz" });
```

#### [Attach a contact](https://developers.intercom.com/intercom-api-reference/reference/tag-contact)

```typescript
const response = await client.tags.tagContact({
    contactId: "123",
    tagId: "234",
});
```

#### [Attach a conversation](https://developers.intercom.com/intercom-api-reference/reference/attach-a-tag-to-a-conversation)

```typescript
const response = await client.tags.tagConversation({
    conversationId: "123",
    tagId: "456",
    adminId: "789",
});
```

#### [Tag companies](https://developers.intercom.com/intercom-api-reference/reference/tag-companies)

```typescript
const response = await client.tags.tagCompanies({
    tagName: "gutenTag",
    companiesIds: ["123", "234", "456"],
});
```

#### [Untag companies](https://developers.intercom.com/intercom-api-reference/reference/untag-companies)

```typescript
const response = await client.tags.untagCompanies({
    tagName: "gutenTag",
    companiesIds: ["123", "234", "456"],
});
```

#### [Untag conversation](https://developers.intercom.com/intercom-api-reference/reference/detach-a-tag-from-a-conversation)

```typescript
const response = await client.tags.untagConversation({
    conversationId: "123",
    tagId: "345",
    adminId: "678",
});
```

#### [Untag contact](https://developers.intercom.com/intercom-api-reference/reference/untag-contact)

```typescript
const response = await client.tags.untagContact({
    contactId: "123",
    tagId: "345",
});
```

#### [List all tags](https://developers.intercom.com/intercom-api-reference/reference/list-tags-for-an-app)

```typescript
const response = await client.tags.list();
```

### Teams

#### [Retrieve a team](https://developers.intercom.com/intercom-api-reference/reference/view-a-team)

```typescript
const response = await client.teams.find({
    id: "123",
});
```

#### [List all teams](https://developers.intercom.com/intercom-api-reference/reference/list-teams)

```typescript
const response = await client.teams.list();
```

### Visitors

#### [Retrieve a Visitor](https://developers.intercom.com/intercom-api-reference/reference/view-a-visitor)

```typescript
const response = await client.visitors.find({ id: "123" });
```

OR

```typescript
const response = await client.visitors.find({ userId: "123" });
```

#### [Update a Visitor](https://developers.intercom.com/intercom-api-reference/reference/update-a-visitor)

```typescript
const response = await client.visitors.update({
    userId: "123",
    name: "anonymous bruh",
    customAttributes: {
        paid_subscriber: true,
    },
});
```

#### [Delete a Visitor](https://developers.intercom.com/intercom-api-reference/reference/delete-a-visitor)

```typescript
const response = await client.visitors.delete({
    id,
});
```

#### [Convert a Visitor](https://developers.intercom.com/intercom-api-reference/reference/convert-a-visitor-to-a-user)

```typescript
const response = await client.visitors.mergeToContact({
    visitor: {
        id: "123",
    },
    user: {
        userId: "123",
    },
    type: Role.USER,
});
```

### Identity verification

`intercom-node` provides a helper for using [identity verification](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product):

```node
import { IdentityVerification } from "intercom-client";

IdentityVerification.userHash({
    secretKey: "s3cre7",
    identifier: "jayne@serenity.io",
});
```

## License

Apache-2.0

## Testing

```bash
yarn test
```

## Running the code locally

Compile using babel:

```bash
yarn prepublish
```

## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { IntercomClient } from "intercom-client";

const client = new IntercomClient({ token: "YOUR_TOKEN" });
const response = await client.articles.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.articles.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.articles.create(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retriable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

-   [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
-   [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
-   [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.articles.create(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.articles.create(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.articles.create(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

-   Node.js 18+
-   Vercel
-   Cloudflare Workers
-   Deno v1.25+
-   Bun 1.0+
-   React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { IntercomClient } from "intercom-client";

const client = new IntercomClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
