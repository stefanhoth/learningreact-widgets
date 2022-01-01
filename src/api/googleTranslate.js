import axios from "axios";

const googleTranslate = (text, language, key) =>
  axios.post(
    "https://translation.googleapis.com/language/translate/v2",
    {
      q: text,
      target: language.value,
    },
    {
      params: {
        key: key,
      },
    }
  );

export default googleTranslate;
