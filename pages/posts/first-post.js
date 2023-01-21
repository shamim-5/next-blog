import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
  const post = await getPost("first-post");

  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  console.log("[FirstPostPage] getStaticProps()", post);

  return (
    <>
      <Head>
        <title>{`${post.title} - My Blog`}</title>
      </Head>
      <main>
        <h1>{`${post.title}`}</h1>
        {/* <p>{`${post.body}`} </p> */}
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
