import { useRouter } from "next/router";

export default function DetailedPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <>
      <h1>Detailed Page</h1>
    </>
  );
}
