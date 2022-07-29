import Footer from "@components/layouts/Footer";
import AboutUs from "@components/shared/AboutUs";
import { UserCard } from "@components/shared/Card";
import Header from "@components/shared/Header";
import Statistcis from "@components/shared/Statistics";
import Head from "next/head";
import React from "react";
import { UserAbout } from "src/common/types";
import { usersUrl } from "src/common/utils/api";
import { dataToUser } from "src/common/utils/dataToModels";

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
            <p className="max-w-sm mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              odio voluptatum quod rem consequatur, aliquam repellendus
              expedita. Commodi inventore dolore aliquid, aliquam corrupti
              tenetur esse!
            </p>
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
            <p className="max-w-sm mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              odio voluptatum quod rem consequatur, aliquam repellendus
              expedita. Commodi inventore dolore aliquid, aliquam corrupti
              tenetur esse!
            </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3">
              {users
                .filter((u) => !u.founder)
                .map((u) => (
                  <UserCard
                    avatar={u.avatar}
                    name={u.name}
                    key={u.id}
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

export async function getServerSideProps() {
  const { data } = await fetch(usersUrl()).then((r) => r.json());
  return {
    props: {
      users: data.map(dataToUser) || [],
    },
  };
}

export default About;
