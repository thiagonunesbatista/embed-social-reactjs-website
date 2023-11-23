import { FaStar } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

const data = [
  {
    src: "/src/assets/reviews/people1.png",
    title: "Terry Dias",
    text: "I just signed up for a trial and within a couple of hours had abrand new customer testimonials page built on our website aswell as sliders...",
  },
  {
    src: "/src/assets/reviews/people2.png",
    title: "James Workman",
    text: "Seriously impressed by Embed Social.Good job making the app so easy to use.",
  },
  {
    src: "/src/assets/reviews/people3.png",
    title: "Ahmad Vaccaro",
    text: "Emebed Social and their services is just perfect ! It has made my business life so much easier ! 5 stars!",
  },
  {
    src: "/src/assets/reviews/people4.png",
    title: "Allison Culhane",
    text: "Awesome products, Superior human support.",
  },
  {
    src: "/src/assets/reviews/people5.png",
    title: "Davis Herwitz",
    text: "I've been on the look out for lots of companies to do what they do, and I've never found any company who are so quick to get in touch and...",
  },
  {
    src: "/src/assets/reviews/people6.png",
    title: "Jessie Grant ",
    text: "Very impressed. 5 stars!",
  },
  {
    src: "/src/assets/reviews/people7.png",
    title: "John Smith",
    text: "Our experience with EmbedStories is very good, very solid, loads fast, looks good.",
  },
  {
    src: "/src/assets/reviews/people8.png",
    title: "Ben Calahen,",
    subtitle: " COO at Clovin",
    text: "Storytelling on another level. EmbedStories is great - it takes pride of place on our homepage...",
  },
];

export const CustomersCards = () => {
  return (
    <div className="grid grid-cols-4 gap-5 justify-center  max-lg:grid-cols-3  max-sm:grid-cols-1 ">
      {data.map((data) => {
        return (
          <div className="flex flex-col justify-between w-full h-full rounded-2xl shadow-xl bg-white p-7">
            <div className="grid grid-row-3 items-start gap-3 ">
              <img src={data.src} />
              <div className="flex">
                <h1 className="font-bold text-lg">{data.title}</h1>
                <h1 className="font-normal text-lg">{data.subtitle}</h1>
              </div>

              <div className="flex gap-2">
                <FaStar style={{ color: "#FFD600" }} size={20} />
                <FaStar style={{ color: "#FFD600" }} size={20} />
                <FaStar style={{ color: "#FFD600" }} size={20} />
                <FaStar style={{ color: "#FFD600" }} size={20} />
                <FaStar style={{ color: "#FFD600" }} size={20} />
              </div>
              <p className="text-base">{data.text}</p>
            </div>
            <div className="flex gap-3 pt-10">
              <FaGoogle size={20} />
              <p className="text-[#9CA0AC]">2 weeks ago</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
