# After upgrading, I face compactibility issue with other packages and this is how I finally solved it. 

## 1.) I prompted chatgpt with this prompt:

```txt
I upgraded my react native project to expo 54, I need to update other packages to this:

The following packages should be updated for best compatibility with the installed expo version:
  @expo/metro-runtime@4.0.0 - expected version: ~6.1.2
  @react-native-async-storage/async-storage@1.23.1 - expected version: 2.2.0
  @react-native-picker/picker@2.9.0 - expected version: 2.11.1
  expo-build-properties@0.13.1 - expected version: ~1.0.9
  expo-constants@17.0.3 - expected version: ~18.0.9
  expo-image@2.0.3 - expected version: ~3.0.9
  expo-image-picker@16.0.3 - expected version: ~17.0.8
  expo-linear-gradient@14.0.1 - expected version: ~15.0.7
  expo-linking@7.0.3 - expected version: ~8.0.8
  expo-router@4.0.11 - expected version: ~6.0.12
  expo-status-bar@2.0.0 - expected version: ~3.0.8
  expo-updates@0.26.10 - expected version: ~29.0.12
  react@18.3.1 - expected version: 19.1.0
  react-dom@18.3.1 - expected version: 19.1.0
  react-native@0.76.3 - expected version: 0.81.4
  react-native-gesture-handler@2.20.2 - expected version: ~2.28.0
  react-native-pager-view@6.5.1 - expected version: 6.9.1
  react-native-safe-area-context@4.12.0 - expected version: ~5.6.0
  react-native-screens@4.1.0 - expected version: ~4.16.0
  react-native-web@0.19.13 - expected version: ^0.21.0
  react-native-webview@13.12.5 - expected version: 13.15.0
  @types/react@18.3.12 - expected version: ~19.1.10
  babel-preset-expo@12.0.3 - expected version: ~54.0.0
  react-native-reanimated@3.16.3 - expected version: ~4.1.1
  typescript@5.7.2 - expected version: ~5.9.2
  @react-navigation/bottom-tabs@^7.1.3 - expected version: ^7.0.0
  @react-navigation/native@^7.0.13 - expected version: ^7.0.0
  @react-navigation/native-stack@^7.1.14 - expected version: ^7.0.0
  @react-navigation/drawer@^7.0.19 - expected version: ^7.0.0
Your project may not work correctly until you install the expected versions of the packages.
› Installing 29 SDK 54.0.0 compatible native modules using yarn


from this:

{
  "name": "loadway-mobile",
  "version": "1.0.0",
  "main": "src/App.tsx",
  "scripts": {
    "start": "expo start -c",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo/metro-runtime": "~4.0.0",
    "@gorhom/bottom-sheet": "^5.0.6",
    "@react-native-async-storage/async-storage": "1.23.1",
    "@react-native-picker/picker": "2.9.0",
    "@react-navigation/bottom-tabs": "^7.1.3",
    "@react-navigation/drawer": "^7.0.19",
    "@react-navigation/material-top-tabs": "^7.0.18",
    "@react-navigation/native": "^7.0.13",
    "@react-navigation/native-stack": "^7.1.14",
    "@react-navigation/stack": "^7.0.18",
    "add": "^2.0.6",
    "axios": "^1.7.8",
    "eas-cli": "^0.49.0",
    "expo": "^54.0.13",
    "expo-build-properties": "~0.13.1",
    "expo-constants": "~17.0.3",
    "expo-image": "^2.0.3",
    "expo-image-picker": "~16.0.3",
    "expo-linear-gradient": "~14.0.1",
    "expo-linking": "~7.0.3",
    "expo-router": "~4.0.11",
    "expo-status-bar": "~2.0.0",
    "expo-updates": "~0.26.10",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-native": "^0.76.3",
    "react-native-calendars": "^1.1307.0",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-modalize": "^2.1.1",
    "react-native-pager-view": "6.5.1",
    "react-native-paystack-webview": "^4.3.1",
    "react-native-portalize": "^1.0.7",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.1.0",
    "react-native-tab-view": "^4.0.5",
    "react-native-toast-message": "^2.2.1",
    "react-native-web": "^0.19.12",
    "react-native-webview": "^13.12.5",
    "tailwindcss": "^3.4.16",
    "yarn": "^1.22.22"
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@types/react": "^18.3.12",
    "@types/react-native": "^0.73.0",
    "babel-preset-expo": "^12.0.3",
    "nativewind": "^4.1.23",
    "react-native-reanimated": "^3.16.3",
    "typescript": "^5.7.2"
  },
  "private": true
}


I am using yarn
```


## What GPT did:

* It updated the package.json and gave me a need package.json, deleted yarn.lock && node_modules and reinstalled packages. 
* Inspected again with nxp-expo-doctor
* Fixed other errors.

# Had to remove entry point from app.json.
