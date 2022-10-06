import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <h1>Popular Front-End Development Tools</h1>
      <br />
      <div>
      <img src={"/images/angular-logo.png"} alt="" />
      <h3>Angular</h3>
      </div>
      <div>
      <img src={"/images/react-logo.png"} alt="" />
      <h3>React</h3>
      </div>
      <div>
      <img src={"/images/next-logo.png"} alt="" />
      <h3>Next</h3>
      </div>
      <div>
      <img src={"/images/view-logo.png"} alt="" />
      <h3>View</h3>
      </div>
      <div>
      <img src={"/images/node-logo.png"} alt="" />
      <h3>Node</h3>
      </div>
      <div>
      <img src={"/images/express-logo.jpg"} alt="" />
      <h3>Express</h3>
      </div>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
