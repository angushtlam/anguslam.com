import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8">
      <hr />
      <p>©️ Angus Lam 2022</p>
      <Link href="https://twitter.com/angushtlam" passHref>
        <a className="text-blue-500 underline">twitter @angushtlam</a>
      </Link>
    </footer>
  );
}
