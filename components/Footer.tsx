import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 text-sm">
      <div className="bg-stone-100 inline-block p-2">
        <p className="text-stone-500 mb-2">©️ Angus Lam 2023</p>
        <p className="text-stone-500 mb-2">
          Angus Lam is a software engineer at Stripe with a background in
          computer science and linguistics, and interest in creating delightful
          products, building communities, and designing spaces. Here is where he
          shares his work and insights.
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="https://linkedin.com/in/angushtlam" passHref>
              <a className="text-blue-500 underline" target="_blank">LinkedIn - /in/angushtlam</a>
            </Link>
          </li>
          <li className="ml-8">
            <Link href="https://www.threads.net/@aspareangus" passHref>
              <a className="text-blue-500 underline" target="_blank">Threads - @aspareangus</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
