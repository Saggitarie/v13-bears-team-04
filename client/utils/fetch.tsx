import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";

type GivenOptionsType = {
  ctx?: {};
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: string;
};

// custom fetch wrapper
export default async function fetchIt(
  url: string,
  givenOptions: GivenOptionsType = {}
): Promise<any> {
  const options = makeOptions(givenOptions);
  // typical fetch
  const resp = await fetch(`${process.env.API_URL}${url}`, options);
  // parse the response
  const data = await resp.json();
  // if there's was an error, throw it
  if (!resp.ok) throw data;
  // otherwise return the results
  return data;
}

// used to expand our fetch options object with additional details
function makeOptions({ method = "GET", body, ctx }: GivenOptionsType) {
  const auth = ctx ? getSessionId(ctx) : {};
  return {
    method,
    body,
    headers: { "Content-Type": "application/json", ...auth },
  };
}

// when needed, we send our session cookie along with requests
// if no cookies are found, we will NOT fetch
function getSessionId(ctx: {}) {
  const { sid } = parseCookies(ctx);
  if (!sid) throw new Error("Sorry, no session cookie found");
  return { Authorization: JSON.stringify({ sid }) };
}
