import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Post } from "src/common/types";
import {
  asset,
  getIdFromSlug,
  postsUrl,
  singlePostUrl,
} from "src/common/utils";
import ReactMarkdown from "react-markdown";
import { dataToPost } from "src/common/utils/dataToModels";
import Link from "next/link";
import { OtherPost } from "@components/shared/Card";
import { useFetch } from "src/common/hooks";
import Spinner from "@components/shared/Spinner";

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
            src={post.image}
            className="w-full rounded-lg max-h-[500px] object-cover"
            alt="Image Developpement d'application android"
            width={200}
            height={170}
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
        <div className="mt-16">
          <OthersPost
            url={postsUrl(
              `?&filter[category][id][_eq]=${post.category.id}&limit=10`
            )}
          />
          <Link href="/blog">
            <a className="inline-block px-4 py-2 mx-auto mt-4 font-bold text-white transition-all rounded hover:scale-105 primary-gradient">
              <span>Plus d&apos; articles</span>
            </a>
          </Link>
        </div>
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

const OthersPost = ({ url }: { url: string }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const { loading, error, data } = useFetch(url);
  useEffect(() => {
    if (data && data.data) {
      setRelatedPosts(data.data.map(dataToPost));
    }
  }, [data]);
  if (loading) return <Spinner className="pt-8" />;
  return (
    <>
      <h1 className="text-3xl">Toujour dans la meme catégorie</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {relatedPosts.map((p, i) => (
          <OtherPost key={i} post={p} />
        ))}
      </div>
    </>
  );
};

export default Details;
