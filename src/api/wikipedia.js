import axios from "axios";

const wikipedia = (term) => {
  return axios.get("https://en.wikipedia.org/w/api.php", {
    params: {
      action: "query",
      list: "search",
      format: "json",
      origin: "*",
      srsearch: term,
    },
  });
};

export default wikipedia;
