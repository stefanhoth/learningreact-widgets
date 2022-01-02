import Link from "./Link";

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" label="Accordion" />
      <Link href="/search" label="Search" />
      <Link href="/dropdown" label="Dropdown" />
      <Link href="/translate" label="Translate" />
    </div>
  );
};

export default Navigation;
