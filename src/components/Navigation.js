const Navigation = () => {
  const renderLink = (href, label) => {
    const isActive = href === window.location.pathname;

    return (
      <a href={href} className={`item ${isActive ? "active" : ""}`}>
        {label}
      </a>
    );
  };

  return (
    <div className="ui secondary pointing menu">
      {renderLink("/", "Accordion")}
      {renderLink("/search", "Search")}
      {renderLink("/dropdown", "Dropdown")}
      {renderLink("/translate", "Translate")}
    </div>
  );
};

export default Navigation;
