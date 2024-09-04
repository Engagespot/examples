# Email with Attachment

In this example, we will trigger a simple workflow created in Engagespot along with an attachment.

Read [Email Attachments](https://docs.engagespot.co/docs/features/channels/email/attachments) for more information.

## Steps

1. Create a workflow in your [Engagespot Console](https://console.engagespot.co)
2. Add an email step, and add an Attachment key by clicking the `Attachment Key` button in email editor. Copy the attachment_key.
3. Copy the `Workflow Identifier` from the workflow you created in Engagespot.
4. Replace the `workflow_identifier`, and `attachment_key` in the `index.js` file.
5. Replace the `ENGAGESPOT_API_KEY` and `ENGAGESPOT_API_SECRET` in the `index.js` file.
6. Run the `index.js` file using `node index.js`.

Please note that the attachment content should be in the `base64` format.