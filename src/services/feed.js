import axios from "axios";

const loadUrl = "https://www.mocky.io/v2/5afd36143200005500f1aab7";

export const apiLoadFeed = () => {
  return axios({
    url: loadUrl,
    method: "GET"
  });
};