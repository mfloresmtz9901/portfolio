import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}
