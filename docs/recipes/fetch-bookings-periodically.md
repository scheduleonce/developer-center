---
id: fetch-bookings-periodically
title: Fetch bookings periodically
slug: /docs/recipes/fetch-bookings-periodically/
---

```node Node
import parse from "parse-link-header";
const baseUrl = "https://api.oncehub.com";
const apiKey = "{{api_key}}";
const headers = { "api-key": apiKey };

let lastFetchTime = new Date();

async function fetchBookingSince(date) {
  // here we'll store the final results after all pages returned
  let results = [];

  async function fetchNextPage(url) {
    const res = await fetch(url, { headers });
    const data = await res.json();
    results = results.concat(data.data);
    const nextUrl = parse(res.headers.get("link"))?.next?.url;
    if (nextUrl) {
      await fetchNextPage(nextUrl);
    }
  }
  const res = await fetch(
    `${baseUrl}/v2/bookings?limit=10&last_updated_time.gt=${lastFetchTime.toJSON()}`,
    {
      headers,
    }
  );
  const data = await res.json();
  results = results.concat(data.data);
  const nextUrl = parse(res.headers.get("link"))?.next?.url;
  if (nextUrl) {
    await fetchNextPage(nextUrl);
  }

  return results;
}

async function fetchPeriodically() {
  const data = await fetchBookingSince(lastFetchTime);
  // check if we have any new entries
  if (data.length) {
    lastFetchTime = new Date();
    // here we can do anything else once we get results of new entries
    // it could be for example to update the database or send an email
    // or update some remote system
    console.log(data);
  } else {
    console.log("No new booking events");
  }

  setTimeout(() => {
    fetchPeriodically();
  }, 60 * 1000);
}

fetchPeriodically();

```

```json Response Example
{"success":true}
```

# Import depenencies and declare constants

<!-- node@1-4 -->

Notice that this recipe uses native fetch in Node.js  
This requires node version > 17.6.0 and at the time of writing this script, to run node with the flag `--experimental-fetch` on.

Read more about fetch api [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

If you are running an older version of Node.js you can import [node-fetch](https://github.com/node-fetch/node-fetch).

# Put in your Oncehub API key

<!-- node@3 -->



# Change the initial fetch time

<!-- node@6 -->

You can set the initial time from which you want to fetch all bookings.  
In this case, we are only fetching bookings that were updated since the script has started running.

You can set 

```
lastFetchTime = new Date(0)
```

To get all bookings since the beginning.

# Fetch all bookings periodically

<!-- node@37-53 -->

This is the part where we are polling Oncehub API to fetch bookings periodically

# Fetch period

<!-- node@50-52 -->

You can change the polling period from 60 seconds to anything else you want.