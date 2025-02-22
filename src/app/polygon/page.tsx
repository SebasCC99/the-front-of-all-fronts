import Logo from "@/components/polygon/logo";
import Navigation from "@/components/polygon/navigation";

export default async function Polygon() {
  return (
    <div className="p-3">
      <div className="p-3 max-w-7xl mx-auto flex items-center">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
