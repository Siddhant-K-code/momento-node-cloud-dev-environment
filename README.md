# Cloud Dev Environment for Momento Node.js SDK

This project demonstrates how to use the Momento Node.js SDK to perform various cache operations such as setting and getting cache values, and manipulating lists in the cache. The examples include operations like concatenating arrays, popping elements, pushing elements, and removing specific values from lists in the cache.

## Create Momento API Key

1. Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email address, Google account, or GitHub account.
2. In the console, select the [API Keys](https://console.gomomento.com/tokens) menu option.
3. Once on the API key page, select the information that matches where your caches live.
4. Once complete, click on the Generate button to create your API Key.

## Setting Up Environment Variables

### Gitpod Environment Variables

Add a new environment variable with the name `MOMENTO_API_KEY` and paste your generated API key as the value in [user settings in Gitpod](https://gitpod.io/user/variables).

## Installation and Setup

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Siddhant-K-code/momento-node-cloud-dev-environment)

## Usage

The code examples demonstrate various cache operations using the Momento Node.js SDK. The following examples are included:

1. Setting and getting cache values.
2. Concatenating arrays to a list.
3. Popping elements from the front and back of a list.
4. Pushing elements to the front and back of a list.
5. Removing specific values from a list.

### Running the Examples

Each example is included in a separate code block within the project file. You can run the examples as follows:

1. Ensure you have set up the environment variables as mentioned above.
2. Run the project:
   ```bash
   node index.js
   ```
