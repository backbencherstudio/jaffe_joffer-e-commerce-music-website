import React from "react";
import Image from "next/image";
import EventsImage from "@/public/events-img.jpg";
import SectionHeader from "../reusable/SectionHeader";
import CustomSlider from "../reusable/CustomSlider";

export default function Events() {
  const slides = [
    <Image
      className=" w-[1200px] h-[580px] rounded-[48px]"
      src={EventsImage}
      alt="event-image"
    />,
    <Image
      className=" w-[1200px] h-[580px] rounded-[48px]"
      src={EventsImage}
      alt="event-image"
    />,

    <Image
      className=" w-[1200px] h-[580px] rounded-[48px]"
      src={EventsImage}
      alt="event-image"
    />,
  ];

  return (
    <section className="bg-[image:var(--events-bg)] bg-cover py-28">
      <div className=" container ">
        <SectionHeader
          heading="Current Events"
          subheading="Experience electrifying live performances! Explore upcoming concerts and festivals, and grab your tickets now."
          buttonText="View More Events"
        />

        <div className="mx-6 lg:mx-0">
          <CustomSlider
            sliderId="event"
            slides={slides}
            bulletColor="#DCA04A"
            activeBulletFill="#DCA04A"
            activeBulletBorder="#000000"
          />
        </div>
      </div>
    </section>
  );
}
