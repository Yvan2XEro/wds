import React, { useEffect, useState } from "react";
import { Testimonial } from "src/common/types";
import AppCarousel from "../AppCarousel";
import { UserCard } from "../Card";

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    (() => {
      setTestimonials([
        {
          id: 1,
          name: "John Doe",
          avatar: "https://i.pravatar.cc/300",

          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        },
        {
          id: 2,
          name: "John Doe",
          avatar: "https://i.pravatar.cc/300",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        },
        {
          id: 3,
          name: "John Doe",
          avatar: "https://i.pravatar.cc/300",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        },
      ]);
    })();
  }, []);
  return (
    <div className="w-full">
      <AppCarousel>
        {testimonials.map((t) => (
          <UserCard key={t.id} name={t.name} avatar={t.avatar} text={t.text} />
        ))}
      </AppCarousel>
    </div>
  );
}

export default Testimonials;
