import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

import styles from "../../styles/coffee-stores.css";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params", params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const coffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading State...</div>;
  }
  const { address, name, neighbourhood } = props.coffeeStore;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.col1}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <p>{name}</p>
      </div>
      <div className={styles.col2}>
        <p>{address}</p>
        <p>{neighbourhood}</p>
      </div>
    </div>
  );
};

export default coffeeStore;
