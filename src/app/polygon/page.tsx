import Header from "@/components/polygon/header";
import Chart from "@/components/polygon/trading-view/chart";

export default async function Polygon() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12">
      <Header />
      <div className="grid gap-y-6 lg:grid-cols-4 gap-x-6">
        <div className="border lg:col-span-3">
          <Chart />
        </div>
        <div className="border bg-indigo-600">2</div>
        <div className="border bg-yellow-600 lg:col-span-3">3</div>
        <div className="border bg-green-600">4</div>
        <div className="border bg-red-600 lg:col-span-3">5</div>
      </div>
    </div>
  );
}
