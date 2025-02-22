import Link from "next/link";

export default async function Navigation() {
  return (
    <>
      <div className=" text-sm text-gray-900 gap-x-12 lg:flex hidden items-center font-semibold">
        <Link href="/polygon">Products</Link>
        <Link href="/polygon">Docs</Link>
        <Link href="/polygon">Company</Link>
        <Link href="/polygon">Pricing</Link>
        <Link href="/polygon">Contact</Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link href="/polygon" className="font-semibold text-sm text-gray-900">
          Dashboard
        </Link>
      </div>
    </>
  );
}
