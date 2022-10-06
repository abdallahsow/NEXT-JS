import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <h1>JavaScript libraries</h1>
      <br />
      <h3>Angular</h3>
      <h3>React</h3>
      <h3>Next</h3>
      <h3>Vue</h3>
      <h2>
        <Link href="/" target={"_blank"}>Back Home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
