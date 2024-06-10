import {
  CacheClient,
  CacheGet,
  CacheListFetch,
  CacheListPopBack,
  CacheListPopFront,
  CacheListPushBack,
  CacheListPushFront,
  CacheListRemoveValue,
  Configurations,
  CredentialProvider,
} from "@gomomento/sdk";

const CACHE_NAME = "momento-sandbox";

/*
 * Generate the cache client with specific configuration and credentials.
 * This function creates a CacheClient instance using the provided configuration
 * for a laptop environment and the API key from environment variables.
 */
const genClient = async () => {
  return await CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: "MOMENTO_API_KEY",
    }),
    defaultTtlSeconds: 300,
  });
};

/*
 * Example of setting and getting a cache value.
 * This block demonstrates how to set a value in the cache and then retrieve it.
 */
genClient()
  .then(async (client) => {
    /*
     * Set a key-value pair in the cache.
     * The key 'my_key' is associated with the value 'Hello_world'.
     */
    await client.set(CACHE_NAME, "my_key", "Hello_world");

    /*
     * Retrieve the value associated with 'my_key' from the cache.
     * The result can be a hit (value found), a miss (value not found), or an error.
     */
    const result = await client.get(CACHE_NAME, "my_key");

    if (result instanceof CacheGet.Hit) {
      console.log(result);
      console.log(result.valueString());
    } else if (result instanceof CacheGet.Miss) {
      console.log(result);
    } else if (result instanceof CacheGet.Error) {
      console.error(result);
    }
    /*
     * Delete the key 'my_list_key' from the cache.
     */
    await client.delete(CACHE_NAME, "my_list_key");
  })
  .catch((error) => {
    console.error(error);
  });

/*
 * Example of concatenating arrays to a list in the cache.
 * This block demonstrates how to concatenate arrays to the front and back of a list in the cache.
 */
genClient()
  .then(async (client) => {
    /*
     * Initialize the list with an array of elements.
     * The key 'my_list_key' is associated with the array ["a", "b", "c"].
     */
    await client.listConcatenateBack(CACHE_NAME, "my_list_key", [
      "a",
      "b",
      "c",
    ]);

    /*
     * Concatenate an array to the end of the existing list.
     * The array ["d", "e", "f"] is added to the end of the list associated with 'my_list_key'.
     */
    await client.listConcatenateBack(CACHE_NAME, "my_list_key", [
      "d",
      "e",
      "f",
    ]);

    /*
     * Concatenate an array to the beginning of the existing list.
     * The array ["g", "h", "i"] is added to the beginning of the list associated with 'my_list_key'.
     */
    await client.listConcatenateFront(CACHE_NAME, "my_list_key", [
      "g",
      "h",
      "i",
    ]);

    /*
     * Retrieve the list associated with 'my_list_key' from the cache.
     * The result can be a hit (list found), a miss (list not found), or an error.
     */
    const result = await client.listFetch(CACHE_NAME, "my_list_key");

    if (result instanceof CacheListFetch.Hit) {
      console.log(result);
      console.log(result.valueListString());
    } else if (result instanceof CacheListFetch.Miss) {
      console.log(result);
    } else if (result instanceof CacheListFetch.Error) {
      console.error(result);
    }

    /*
     * Delete the key 'my_list_key' from the cache.
     */
    await client.delete(CACHE_NAME, "my_list_key");
  })
  .catch((error) => {
    console.error(error);
  });

/*
 * Example of popping elements from a list in the cache.
 * This block demonstrates how to remove elements from the front and back of a list in the cache.
 */
genClient()
  .then(async (client) => {
    /*
     * Initialize the list with an array of elements.
     * The key 'my_list_key' is associated with the array ["a", "b", "c"].
     */
    await client.listConcatenateBack(CACHE_NAME, "my_list_key", [
      "a",
      "b",
      "c",
    ]);

    /*
     * Remove an element from the back of the list.
     * The last element of the list associated with 'my_list_key' is removed and returned.
     */
    const listPopBackResult = await client.listPopBack(
      CACHE_NAME,
      "my_list_key"
    );
    if (listPopBackResult instanceof CacheListPopBack.Hit) {
      console.log(listPopBackResult);
      console.log(`Removed value: ${listPopBackResult.valueString()}`);
    }

    /*
     * Remove an element from the front of the list.
     * The first element of the list associated with 'my_list_key' is removed and returned.
     */
    const listPopFrontResult = await client.listPopFront(
      CACHE_NAME,
      "my_list_key"
    );
    if (listPopFrontResult instanceof CacheListPopFront.Hit) {
      console.log(listPopFrontResult);
      console.log(`Removed value: ${listPopFrontResult.valueString()}`);
    }

    /*
     * Retrieve the list associated with 'my_list_key' from the cache.
     * The result can be a hit (list found), a miss (list not found), or an error.
     */
    const result = await client.listFetch(CACHE_NAME, "my_list_key");

    if (result instanceof CacheListFetch.Hit) {
      console.log(result);
      console.log(result.valueListString());
    } else if (result instanceof CacheListFetch.Miss) {
      console.log(result);
    } else if (result instanceof CacheListFetch.Error) {
      console.error(result);
    }

    /*
     * Delete the key 'my_list_key' from the cache.
     */
    await client.delete(CACHE_NAME, "my_list_key");
  })
  .catch((error) => {
    console.error(error);
  });

/*
 * Example of pushing elements to a list in the cache.
 * This block demonstrates how to add elements to the front and back of a list in the cache.
 */
genClient()
  .then(async (client) => {
    /*
     * Initialize the list with an array of elements.
     * The key 'my_list_key' is associated with the array ["a", "b", "c"].
     */
    await client.listConcatenateBack(CACHE_NAME, "my_list_key", [
      "a",
      "b",
      "c",
    ]);

    /*
     * Add an element to the back of the list.
     * The element "d" is added to the end of the list associated with 'my_list_key'.
     */
    const listPopBackResult = await client.listPushBack(
      CACHE_NAME,
      "my_list_key",
      "d"
    );
    if (listPopBackResult instanceof CacheListPushBack.Success) {
      console.log(listPopBackResult);
      console.log(`List length: ${listPopBackResult.listLength()}`);
    }

    /*
     * Add an element to the front of the list.
     * The element "e" is added to the beginning of the list associated with 'my_list_key'.
     */
    const listPopFrontResult = await client.listPushFront(
      CACHE_NAME,
      "my_list_key",
      "e"
    );
    if (listPopFrontResult instanceof CacheListPushFront.Success) {
      console.log(listPopFrontResult);
      console.log(`List length: ${listPopFrontResult.listLength()}`);
    }

    /*
     * Retrieve the list associated with 'my_list_key' from the cache.
     * The result can be a hit (list found), a miss (list not found), or an error.
     */
    const result = await client.listFetch(CACHE_NAME, "my_list_key");

    if (result instanceof CacheListFetch.Hit) {
      console.log(result);
      console.log(result.valueListString());
    } else if (result instanceof CacheListFetch.Miss) {
      console.log(result);
    } else if (result instanceof CacheListFetch.Error) {
      console.error(result);
    }

    /*
     * Delete the key 'my_list_key' from the cache.
     */
    await client.delete(CACHE_NAME, "my_list_key");
  })
  .catch((error) => {
    console.error(error);
  });

/*
 * Example of removing a specific value from a list in the cache.
 * This block demonstrates how to remove a specified element from a list in the cache.
 */
genClient()
  .then(async (client) => {
    /*
     * Initialize the list with an array of elements.
     * The key 'my_list_key' is associated with the array ["a", "b", "c"].
     */
    await client.listConcatenateBack(CACHE_NAME, "my_list_key", [
      "a",
      "b",
      "c",
    ]);

    /*
     * Remove the specified element from the list.
     * The element "b" is removed from the list associated with 'my_list_key'.
     */
    const listPopBackResult = await client.listRemoveValue(
      CACHE_NAME,
      "my_list_key",
      "b"
    );
    if (listPopBackResult instanceof CacheListRemoveValue.Success) {
      console.log(listPopBackResult);
      console.log(`isSuccess: ${listPopBackResult.is_success}`);
    }

    /*
     * Retrieve the list associated with 'my_list_key' from the cache.
     * The result can be a hit (list found), a miss (list not found), or an error.
     */
    const result = await client.listFetch(CACHE_NAME, "my_list_key");

    if (result instanceof CacheListFetch.Hit) {
      console.log(result);
      console.log(result.valueListString());
    } else if (result instanceof CacheListFetch.Miss) {
      console.log(result);
    } else if (result instanceof CacheListFetch.Error) {
      console.error(result);
    }

    /*
     * Delete the key 'my_list_key' from the cache.
     */
    await client.delete(CACHE_NAME, "my_list_key");
  })
  .catch((error) => {
    console.error(error);
  });
