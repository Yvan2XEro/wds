import Head from "next/head";
import React from "react";
import Footer from "@components/layouts/Footer";
import { ArticleBlog } from "@components/shared/Card";
import Header from "@components/shared/Header";
import { Post } from "src/common/types";
import { postsUrl } from "src/common/utils";
import { dataToPost } from "src/common/utils/dataToModels";
import Link from "next/link";

function Blog({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Les articles au top de la technologie"
        />
      </Head>
      <div>
        <Header title="Blog" />
        <div className="px-8 md:px-16">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {posts.map((p) => (
                <ArticleBlog key={p.title} data={p} />
              ))}
            </div>
          </section>
          <Link href="/services">
            <a className="block mt-5 text-primary-300">
              Découvrez aussi nos services...
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await fetch(postsUrl()).then((res) => res.json());
  return {
    props: {
      posts: data?.map(dataToPost) || [],
    },
  };
}

export default Blog;
