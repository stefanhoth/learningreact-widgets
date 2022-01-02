const Navigation = ({ pathname }) => {
  const renderLink = (href, label) => {
    const isActive = href === pathname;

    return (
      <a href={href} className={`item ${isActive ? "active" : ""}`}>
        {label}
      </a>
    );
  };

  return (
    <div className="ui tabular menu">
      {renderLink("/", "Accordion")}
      {renderLink("/search", "Search")}
      {renderLink("/dropdown", "Dropdown")}
      {renderLink("/translate", "Translate")}
    </div>
  );
};

export default Navigation;
