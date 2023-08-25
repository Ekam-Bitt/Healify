// components/Home/ServicesSection.jsx
import React from "react";
import BgImg from "../../assets/Vector.svg";
import BgImg2 from "../../assets/Doctors-bro 1.svg";
import Arrow from "../../assets/Arrow 1.svg";
import { Link } from "react-router-dom";

const ServiceItem = ({ title, items }) => {
  return (
    <div className="service-item rounded-3xl h-[260px] px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
      <h3 className="text-center text-[#5717A9] text-xl font-semibold">
        {title}
      </h3>
      <ul className="list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      title: "Mental Health",
      items: [
        "Anxiety",
        "Depression",
        "Stress",
        "Grief & Loss",
        "Postpartum",
        "Mood Disorders",
        "PTSD",
      ],
    },
    {
      title: "Mental Health",
      items: [
        "Anxiety",
        "Depression",
        "Stress",
        "Grief & Loss",
        "Postpartum",
        "Mood Disorders",
        "PTSD",
      ],
    },
    {
      title: "Mental Health",
      items: [
        "Anxiety",
        "Depression",
        "Stress",
        "Grief & Loss",
        "Postpartum",
        "Mood Disorders",
        "PTSD",
      ],
    },
    {
      title: "Mental Health",
      items: [
        "Anxiety",
        "Depression",
        "Stress",
        "Grief & Loss",
        "Postpartum",
        "Mood Disorders",
        "PTSD",
      ],
    },
    {
      title: "Mental Health",
      items: [
        "Anxiety",
        "Depression",
        "Stress",
        "Grief & Loss",
        "Postpartum",
        "Mood Disorders",
        "PTSD",
      ],
    },
    // Add more services as needed...
  ];

  return (
    <div className="bg-white w-full h-[730px] relative">
      <img
        src={BgImg}
        alt="Background Image"
        className="w-full h-full p-12 object-center absolute top-0 left-0"
      />
      <div className="absolute h-full w-full px-12 py-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-black text-[55px] font-semibold">
          Services we Provide
        </h2>
        <div className="flex w-full justify-around my-20">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
        <div className="flex justify-end translate-y-20 -translate-x-3">
          <Link
            to="/TeleMedicine"
            className="text-xl text-[#5717A9] flex items-center justify-between w-[350px]"
          >
            Consult a Doctor right now
            <img src={Arrow} alt="Arrow" />
          </Link>
        </div>
      </div>
      <div className="absolute h-[330px] w-[330px] translate-y-[400px] translate-x-[110px]">
        <img src={BgImg2} alt="Doctors Yellow" />
      </div>
    </div>
  );
};

export default ServicesSection;
