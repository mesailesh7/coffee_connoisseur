import { useRouter } from "next/router";
import Link from "next/link";

const coffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <p>Coffee Store page {router.query.id}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default coffeeStore;
