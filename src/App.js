import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

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

  return (
    <div>
      <h1>Widgets App</h1>
      <Dropdown
        label="Please select a color"
        selected={selection}
        onSelectedChange={setSelection}
        options={dropdownOptions}
      />
      <h2 style={{ color: selection.value }}>This text is {selection.label}</h2>
    </div>
  );
};

export default App;
