# Elenas Clients

## Introduction

Technical test from Elenas

## Requirements

  - Git
  - Node Lts
  - Yarn or Npm
  - [Setting up your environment](https://reactnative.dev/docs/environment-setup)

## Installation

  - Clone the project:
    ```
    https://github.com/daibergm/ElenasClients.git
    ```
  - Move to the project dir:
    ```
    cd ElenasClients
    ```
  - Install dependencies:
    ```
    yarn
    # or
    npm i
    ```

### Android

  - Clean project:
    ```
    yarn android:clean
    # or
    npm run android:clean
    ```
  - Start metro:
    ```
    yarn start
    # or
    npm run start
    ```
  - Connect your device or use an android emulator
  - Build debug:
    ```
    yarn android
    # or
    npm run android
    ```

### IOS

  - Clean project:
    ```
    yarn ios:clean
    # or
    npm run ios:clean
    ```
  - Start metro:
    ```
    yarn start
    # or
    npm run start
    ```
  - Build debug:
    ```
    yarn ios
    # or
    npm run ios
    # or
    Build project using XCode
    ```

## Commands

  - To create a release apk:
    ```
    yarn android:release
    # or
    npm run android:release
    ```
  - To check lint errors:
    ```
    yarn lint
    # or
    npm run lint
    ```
  - To check ts:
    ```
    yarn check-ts
    # or
    npm run check-ts
    ```
  - To run tests:
    ```
    yarn test
    # or
    npm run test
    ```
  - To start metro without cache:
    ```
    yarn start:clean
    # or
    npm run start:clean
    ```