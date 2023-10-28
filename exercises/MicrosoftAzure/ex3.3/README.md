# EXERCISE 3. Run the Mobile App (React Native)

## Preparation

This step would require the user to have the latest version of the **Expo Go** app installed on their mobile device. Scan the below QR code to download the app. Users can also directy head to ANdroid Playstore or APple Store and search for Expo Go and directly install the app.
<p align="center">
  <img src="../assets/Expo_Go_QR.png" alt="Expo Go QR Code" width="200" height="200" />
</p>

Users must create an account using their personal email IDs and set up a username and password. The username will be useful in the below steps. Users would also require Expo Go CLI on their local systems, which can be installed by running the following command in their terminal:

 ```console
   $ npm install -g expo-cli
```

Enter your <_PARAMETERS_> to the `app.json` file in the `src/mobile-app/` directory:

```jsonc
{
     "expo": {
         "name": "smart-co2nverter",
         "slug": "smart-co2nverter",
         "version": "1.0.0",
         "releaseChannel": "default",
         "owner": "<YOUR_EXPO_USERNAME>", // app username that user had set up
         "privacy": "hidden", // restricts access to the project page to only the owner and other users that have been granted access: https://docs.expo.dev/versions/latest/config/app/#privacy
         #...,
         "extra": {
             "apiKey": "<YOUR_API_KEY_FOR_CAP>", // insert the generated API_KEY which you entered in the mta.yaml in previous step during api deployment of the CAP backend
             "baseUrl": "<YOUR_CAP_BASE_URL>", // insert the base url from your deployed CAP applicationas saved in previous step
             "account": "8fbaa8ca-6cf3-4ea4-9764-82e6b841480d" //account from the sample data. Do not change since this is the only "user" we provide within this sample.
         }
     }
}
```

## Start the React Native app

1. To install the dependencies, change to the `src/mobile-app/` directory and execute:

   ```console
   $ npm i
   ```

2. In order to start the React Native app, execute one of the following commands:

   ```console
   $ npm start
   ```

   If everything is performed correctly, you should see an output like this:

   ```console
   $ expo start
   Starting project at ...
   Starting Metro Bundler
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   █ ▄▄▄▄▄ █▄▄▄ ▀▀▀█▄█ ▄▄▄▄▄ █
   █ █   █ ██▄▀ █ ▀▄██ █   █ █
   █ █▄▄▄█ ██▀▄ ▄ ██▀█ █▄▄▄█ █
   █▄▄▄▄▄▄▄█ ▀▄█ ▀ ▀ █▄▄▄▄▄▄▄█
   █▄ █▄ █▄█▀▄▀█▄██▀ █▄█▀█▀▀▄█
   ██▄▄  █▄▄█▄██▄█ ▄▀▀███▄▀▀ █
   █  ▄ ▀█▄█▄▄ █▀█▄ █ ▄▀▀█▀ ██
   █ ▄█ █▄▄ █ ▀█▀▄█ ▄▀ ██▄▀  █
   █▄█▄█▄▄▄▄▀█▀ ▄▄ █ ▄▄▄  ▄▀▄█
   █ ▄▄▄▄▄ ██▄▄▀▄  █ █▄█ ███ █
   █ █   █ █ ▀ ▄ ██▄ ▄  ▄ █▀▀█
   █ █▄▄▄█ █▀▄▀  █▄ ▄█▀▀▄█   █
   █▄▄▄▄▄▄▄█▄█▄▄██▄▄▄▄█▄▄███▄█

   › Metro waiting on exp://192.168.0.48:19000
   › Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

   › Press a │ open Android
   › Press i │ open iOS simulator
   › Press w │ open web

   › Press j │ open debugger
   › Press r │ reload app
   › Press m │ toggle menu

   › Press ? │ show all commands
   ```

3. Follow the instructions to run the app in Expo Go: _Scan the QR code above with Expo Go (Android) or the Camera app (iOS)_

   ```console
   Logs for your project will appear below. Press Ctrl+C to exit.
   iOS Bundling complete 27447ms
   ```

Perfect! You should now be able to use the app.

But you will notice that on calling GPT from anywhere within the app, no response will be generated. For this, users will have to enter the right credentials for the Generative AI Hub, that accsses GPT-3.5 from Azure OpenAI. This will be done in the next step [Exercise 4: Fetch SAP Generative AI Hub Credentials](../ex3.4/README.md).

> **Note** If you have problems connecting to the app within Expo Go, you may have restrictive networking conditions. To resolve that, please check the [tunneling option](https://docs.expo.dev/more/expo-cli/#tunneling) of Expo.
