import Link from "next/link";

export default async function Logo() {
  return (
    <Link href="/polygon" className="font-semibold text-2xl flex-1">
      <span>polygon</span>
      <span className="text-[#6b6b6b]">.io</span>
    </Link>
  );
}
