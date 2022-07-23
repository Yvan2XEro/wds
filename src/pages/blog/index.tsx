import Head from "next/head";
import React from "react";
import Footer from "@components/layouts/Footer";
import { ArticleBlog } from "@components/shared/Card";
import Header from "@components/shared/Header";
import { useFetch } from "src/common/hooks";
import { Post } from "src/common/types";
import axios from "axios";

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
        <section className="px-6">
          <div className="grid px-2 md:px-8 grid-cols-1 md:grid-cols-2">
            {posts.map((p) => (
              <ArticleBlog key={p.title} data={p} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = response.data;

  return {
    props: {
      posts: data?.map((a: any, id: number) => ({
        id: a.id,
        title: a.title,
        text: a.body,
        createdAt: new Date().toISOString(),
        author: {
          avatar: "https://i.pravatar.cc/300",
          name: "John Doe",
        },
        image:
          "https://i.pinimg.com/originals/49/73/3b/49733b333cdb5476b28fa5c3bbd14c12.gif",
        category: {
          id,
          label: "Développement",
        },
      })),
    },
  };
}

export default Blog;
