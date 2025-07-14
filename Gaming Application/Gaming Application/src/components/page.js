//use client
//use client::prelude::*;
//use client::prelude::Client;
//use client::prelude::Client::new;
//use client::prelude::Client::new_with_config;

import { cache } from "react"

  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
automatic request cashing-next.revalidate,cache
it works natively in server components

Fetch function in next.js can
    1.performs the standard API
    it can run in the browsers
    it can run in the server
it has build in cashing