import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps() {
  const param = static.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === 0;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: `1` } }],
  };
}

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
