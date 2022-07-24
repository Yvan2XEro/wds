import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import Head from "next/head";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Post } from "src/common/types";
import { asset, getIdFromSlug, singlePostUrl } from "src/common/utils";
import ReactMarkdown from "react-markdown";
import { dataToPost } from "src/common/utils/dataToModels";

function Details({ post }: { post: Post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.category.label + " - " + post.title}
        />
      </Head>
      <Header title={post.title} />
      <main className="px-8 md:px-36">
        <div className="relative">
          <span className="p-2 px-3 text-xl uppercase border-2 top-14 -left-10">
            7 Mars 2021
          </span>
          <img
            src={asset(post.image)}
            className="w-full rounded-lg max-h-[500px] object-cover"
            alt="Image Developpement d'application android"
          />
        </div>
        <div className="my-3">
          <ul>
            <li className="flex items-center text-xl">
              <FaUser className="inline mr-2 text-primary-500" /> Editer par
              <span className="ml-2 font-bold">{post.author.name}</span>
            </li>
          </ul>
        </div>
        <ReactMarkdown>{post.text}</ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const id = getIdFromSlug(slug);
  const post = (await fetch(singlePostUrl(id)).then((res) => res.json())).data;
  return {
    props: {
      post: dataToPost(post),
    },
  };
}

export default Details;
