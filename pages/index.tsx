import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className={""}>
      <Head>
        <title>Daniel Lee</title>
        <meta name="description" content="Site about Daniel Lee" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <footer className={""}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={""}>
            {/*<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
