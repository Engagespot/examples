# Simple Workflow

In this example, we will trigger a simple workflow created in Engagespot. But instead of sending it to an existing user that was already identified, we will identify a new user inline and trigger the workflow.

Read [Inline User Identification](https://docs.engagespot.co/docs/features/user/who-is-user#inline-identification-of-users) for more information.

## Steps

1. Create a workflow in your [Engagespot Console](https://console.engagespot.co)
2. Copy the `Workflow Identifier` from the workflow you created in Engagespot.
3. Replace the `workflow_identifier` in the `index.js` file.
4. Replace the `ENGAGESPOT_API_KEY` and `ENGAGESPOT_API_SECRET` in the `index.js` file.
4. Run the `index.js` file using `node index.js`.