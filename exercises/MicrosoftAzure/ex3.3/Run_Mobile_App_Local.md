# Run the Mobile App (React Native)

## Preparation

This step would require the user to have the latest installed version of the **Expo Go** app installed on their mobile device. Users would also require Expo Go CLI on their local systems, which can be installed by running the following command in their terminal:

 ```console
   $ npm install -g expo-cli
```

If you want to publish the React Native app and make it available to other users, you will need to [create an Expo account](https://expo.dev/signup) and use the [Expo CLI](https://docs.expo.dev/more/expo-cli/). This is because Expo provides a platform for hosting and distributing the app, as well as offering tools for building, testing and deploying the project. However, if you only want to run the React Native app locally on your own device, creating an account for Expo is not necessary. You can still use the Expo CLI to serve it locally and test it on your device or emulator without the need for an Expo account. These steps are covered in the next optional exercise.

Enter your <_PARAMETERS_> to the `app.json` file in the `src/mobile-app/` directory:

```jsonc
{
     "expo": {
         "name": "smart-co2nverter",
         "slug": "smart-co2nverter",
         "version": "1.0.0",
         "releaseChannel": "default",
         "owner": "<YOUR_EXPO_USERNAME_OR_EXPO_ORG>",
         "privacy": "hidden", // restricts access to the project page to only the owner and other users that have been granted access: https://docs.expo.dev/versions/latest/config/app/#privacy
         #...,
         "extra": {
             "apiKey": "<YOUR_API_KEY_FOR_CAP>", // insert the generated API_KEY which you entered in the mta.yaml from the CAP backend from the step of the CAP deployment.
             "baseUrl": "<YOUR_CAP_BASE_URL>", // insert the base url from your deployed CAP application.
             "account": "8fbaa8ca-6cf3-4ea4-9764-82e6b841480d" //account from the sample data. Do not change since this is the only "user" we provide within this sample.
         }
     }
}
```

## Start the React Native app

1. To install the dependencies, change to the `src/mobile-app/` directory and execute:

   ```console
   $ npm install # using NPM
   $ yarn install # using yarn
   ```

2. In order to start the React Native app, execute one of the following commands:

   ```console
   $ npm start # using NPM
   $ yarn start # using yarn
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

> **Note** If you have problems connecting to the app within Expo Go, you may have restrictive networking conditions. To resolve that, please check the [tunneling option](https://docs.expo.dev/more/expo-cli/#tunneling) of Expo.

> Continue to - [Exercise 4: Publish Mobile App (Optional](../ex3.4/Publish_Mobile_App(OPTIONAL).md)
