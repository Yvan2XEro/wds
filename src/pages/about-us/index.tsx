import Footer from "@components/layouts/Footer";
import AboutUs from "@components/shared/AboutUs";
import { UserCard } from "@components/shared/Card";
import Header from "@components/shared/Header";
import Statistcis from "@components/shared/Statistics";
import Head from "next/head";
import React from "react";
import { UserAbout } from "src/common/types";

function About({ users }: { users: UserAbout[] }) {
  return (
    <div>
      <Head>
        <title>A propos de nous</title>
        <meta
          name="description"
          content="Nous sommes une agence de dans le développement d'application mobiles et web, nous realisons aussi des affiches publicitaires et vous proposons des services de qualité et de qualité."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title="A propos de nous" />
      </div>
      <section className="px-6">
        <div className="flex justify-center w-full mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-center">Fondateurs</h2>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3">
              {users
                .filter((u) => u.founder)
                .map((u) => (
                  <UserCard
                    key={u.id}
                    name={u.name}
                    tags={u.tags}
                    avatar={u.avatar}
                    socials={u.socials}
                    text={u.bio}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mx-auto mt-32">
          <div>
            <h2 className="text-4xl font-bold text-center">Equipe</h2>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3">
              {users
                .filter((u) => !u.founder)
                .map((u) => (
                  <UserCard
                    avatar={u.avatar}
                    name={u.name}
                    text={u.bio}
                    tags={u.tags}
                    socials={u.socials}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="mt-10 md:mx-16">
          <AboutUs withMore={false} />
        </div>
      </section>
      <section>
        <div className="mx-8 md:mx-16">
          <Statistcis />
        </div>
      </section>
      <Footer />
    </div>
  );
}

const avatar = "https://i.pravatar.cc/300";

export async function getStaticProps() {
  return {
    props: {
      users: [
        {
          name: "Yvan Jules Kana",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "UI/UX", "Fullstack"],
          founder: true,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
        {
          name: "Cedric Tefoye",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "Designer", "Frontend", "Backend"],
          founder: true,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
        {
          name: "Franck Armel Djoya",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "UI/UX", "Backend"],
          founder: true,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
        // Other users with different names
        {
          name: "Yvan Jules Kana",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "UI/UX", "Fullstack"],
          founder: false,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
        {
          name: "Cedric Tefoye",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "Designer", "Frontend", "Backend"],
          founder: false,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
        {
          name: "Franck Armel Djoya",
          avatar,
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          tags: ["Web Dev", "Mobile Dev", "UI/UX", "Backend"],
          founder: false,
          socials: {
            twitter: "https://twitter.com/yvanjuleskana",
            linkedin: "https://www.linkedin.com/in/yvanjuleskana/",
            github: "#",
          },
        },
      ],
    },
  };
}

export default About;
