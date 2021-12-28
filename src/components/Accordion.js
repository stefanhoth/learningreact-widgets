import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onItemClicked(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="ui styled accordion">{renderedItems}</div>
      <p>Active index: {activeIndex}</p>
    </React.Fragment>
  );
};

export default Accordion;
