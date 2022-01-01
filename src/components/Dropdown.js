import { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const ref = useRef();

  const renderedOptions = options
    .filter((option) => option !== selected)
    .map((option) => {
      return (
        <div
          key={option.value}
          className="item"
          onClick={(e) => {
            onSelectedChange(option);
          }}
        >
          {option.label}
        </div>
      );
    });

  return (
    <div ref={ref} className="ui form">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="label">{label}</label>
        </div>
        <div
          className={`ui selection dropdown active ${
            open ? "active visible" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu  ${open ? "transition visible" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </form>
      <h2 style={{ color: selected.value }}>This text is {selected.label}</h2>
    </div>
  );
};

export default Dropdown;
