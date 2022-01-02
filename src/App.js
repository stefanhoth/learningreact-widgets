import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is a React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const dropdownOptions = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const App = () => {
  const [selection, setSelection] = useState(dropdownOptions[0]);

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };

  const showSearch = () => {
    if (window.location.pathname === "/search") {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return (
        <div className="dropdown">
          <Dropdown
            label="Please select a color"
            selected={selection}
            onSelectedChange={setSelection}
            options={dropdownOptions}
          />
          <h2 style={{ color: selection.value }}>
            This text is {selection.label}
          </h2>
        </div>
      );
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  console.log(window.location.pathname);
  return (
    <div>
      <h1>Widgets App</h1>
      <Navigation />

      {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
