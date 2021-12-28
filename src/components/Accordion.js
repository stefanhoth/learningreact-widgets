const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div className="ui item">
        <div className="content">
          <div className="header">{item.title}</div>
          <div className="description">{item.content}</div>
        </div>
      </div>
    );
  });

  return <div className="accordion ui items">{renderedItems}</div>;
};

export default Accordion;
