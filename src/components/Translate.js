import { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const Translate = () => {
  const options = [
    {
      label: "Afrikaans",
      value: "af",
    },
    {
      label: "German",
      value: "de",
    },
    {
      label: "Russian",
      value: "ru",
    },
  ];

  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <label htmlFor="input">Enter text to translate</label>
            <input
              name="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
            />
          </div>
        </form>
      </div>
      <Dropdown
        label="Please select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
