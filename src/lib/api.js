const isServer = typeof window === "undefined"

const story = (path) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default function fetchAPI(fetch, path) {
  const url = path.startsWith("user") ? user(path) : story(path);
  const headers = isServer ? { "User-Agent": "chrome" } : {};

  return fetch(url, { headers }).then((r) => r.json());
}
