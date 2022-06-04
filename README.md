*Please be aware that this application / sample is provided as-is for demonstration purposes without any guarantee of support*
=========================================================

# PubNub-Demo-Integration-Test-React

> This is a test harness for an **internal** PubNub tool.

Test application for the [pubnub-demo-integration-react](https://github.com/darryncampbell-pubnub/pubnub-demo-integration-test-react) module

## Running the application

`npm install`

`npm start`

This application defines 5 test actions that make up the demo.  The actions are defined in the root of the demo in a `features.json` file.  

```json
{
    "features": [
      "Test Action 1",
      "Test Action 2",
      "Test Action 3",
      "Test Action 4",
      "Test Action 5"
    ]
}
```

The features defined in this file must match the actions passed into the [pubnub-demo-integration-react](https://github.com/darryncampbell-pubnub/pubnub-demo-integration-test-react) module, i.e.:

`GuidedDemoIntegration.actionCompleted('Test Action 1');`

![Screenshot](https://github.com/darryncampbell-pubnub/pubnub-demo-integration-test-react/raw/main/media/screenshot_01.png)

