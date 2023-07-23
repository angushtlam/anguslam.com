import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 text-sm">
      <div className="bg-stone-100 inline-block p-2">
        <p className="text-stone-500 mb-2">©️ Angus Lam 2023</p>
        <p className="text-stone-500 mb-2">
          Angus Lam is a software engineer at Stripe with a background in
          computer science and linguistics, and interest in creating delightful
          products, building communities, and designing spaces. Here is where he shares his work and insights. 
        </p>
        <Link href="https://linkedin.com/in/angushtlam" passHref>
          <a className="text-blue-500 underline">linkedin - angushtlam</a>
        </Link>
      </div>
    </footer>
  );
}
