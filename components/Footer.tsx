import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 text-sm">
      <div className="bg-stone-100 inline-block p-2">
        <p className="text-stone-500">©️ Angus Lam 2022</p>
        <Link href="https://twitter.com/angushtlam" passHref>
          <a className="text-blue-500 underline">twitter @angushtlam</a>
        </Link>
      </div>
    </footer>
  );
}
