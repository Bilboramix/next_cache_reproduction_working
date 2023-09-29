import Link from "next/link";

export const getServerSideProps = async () => {
  console.log("\nGET_SERVER_SIDE_PROPS FIRED !");
  return {
    props: { test: new Date().getTime() },
  };
};

export default function Test({ test }: { test: string }) {
  return (
    <>
      <Link href="/">Home</Link>
      <br />
      <Link href="/test">Test</Link>
      <p>Test - {test}</p>
    </>
  );
}
