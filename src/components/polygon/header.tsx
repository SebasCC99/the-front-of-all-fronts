import Logo from "./logo";
import Navigation from "./navigation";

export default async function Header() {
  return (
    <div className="flex items-center">
      <Logo />
      <Navigation />
    </div>
  );
}
