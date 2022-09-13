import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/users">Users</Link>
    </>
  );
};

export default Home;
