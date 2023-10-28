# EXERCISE 3. Run the App on Web Browser

Users would also require Expo Go CLI on their local systems, which can be installed by running the following command in their terminal:

 ```console
   $ npm install -g expo-cli
```

## Start the React Native app

1. Change to the `src/mobile-app/` directory through terminal or by executing steps below:
   ![mobile_app](../assets/integ_terminal_app.png)

2. To install dependencies like in previous step, user has to execute below command:

   ```console
   $ npm i
   ```

3. In order to start the React Native app, execute the following command:

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

4. To open the application on web browser, user has to press **w** in their terminal.


Perfect! You should now be able to use the app. You can skim through the various windows and accessories.

But you will notice that on calling GPT from anywhere within the app, no response will be generated. For this, users will have to enter the right credentials for the Generative AI Hub, that accsses GPT-3.5 from Azure OpenAI. This will be done in the next step [Exercise 4: Fetch SAP Generative AI Hub Credentials](../ex3.4/README.md).

> **Note** If you have problems connecting to the app within Expo Go, you may have restrictive networking conditions. To resolve that, please check the [tunneling option](https://docs.expo.dev/more/expo-cli/#tunneling) of Expo.

