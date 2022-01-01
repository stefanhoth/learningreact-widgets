import { useEffect, useState } from "react";
import GoogleTranslate from "../api/googleTranslate";

// provided via this course https://www.udemy.com/course/react-redux/
// only works on localhost:3000
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (text === "") return; //don't do empty search

    const doTranslation = async () => {
      const reponse = await GoogleTranslate(text, language, KEY);

      setTranslated(
        reponse.data.data?.translations[0]?.translatedText ??
          "No translation available"
      );
    }; //could also be written as: (async () { //method })() without method name assignment

    //delay search to throttle number of API requests while typing
    const timeoutId = setTimeout(() => {
      doTranslation();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, language]);

  return <div>{translated ? translated : "Please enter a search term!"}</div>;
};

export default Convert;
