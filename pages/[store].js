import { useRouter } from "next/router";
import Head from "next/head";

const ankita = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <div>
      <Head>
        <title>{router.query.store}</title>
      </Head>
      <div>
        <h1>page {router.query.store}</h1>
      </div>
    </div>
  );
};

export default ankita;
