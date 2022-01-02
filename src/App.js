import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Navigation from "./components/Navigation";
import Route from "./components/Route";
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

  const renderAccordion = () => {

      return <Accordion items={items} />;
  };

  const renderDropdown = () => {

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
    };

  return (
    <div>
      <h1>Widgets App</h1>
      <Navigation pathname={window.location.pathname} />

      <Route route='/' component={ renderAccordion() } />
      <Route route='/search' component={ <Search /> }/>
      <Route route='/dropdown' component={ renderDropdown() } />
      <Route route='/translate' component={ <Translate /> }/>
    </div>
  );
};

export default App;
