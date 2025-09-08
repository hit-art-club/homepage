import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE as string,
  apiKey: process.env.MICROCMS_KEY as string,
});
