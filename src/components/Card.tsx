import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const data = [
  {
    icons: <FaInstagram size={60} />,
    text: "Auto-Sync",
    subtext: "Instagram Stories",
  },
  {
    icons: <FaFacebook size={60} />,
    text: "Upload",
    subtext: "Facebook Stories",
  },
  {
    icons: <FaTiktok size={60} />,
    text: "Sync",
    subtext: "TikTok Stories",
  },
  {
    icons: <FaTwitter size={60} />,
    text: "Upload",
    subtext: "Twitter Fleets",
  },
  {
    icons: <FaLinkedin size={60} />,
    text: "Upload",
    subtext: "LinkedIn Stories",
  },
];

export const Card = () => {
  return (
    <div className="grid grid-cols-5 gap-5 justify-center  max-lg:grid-cols-3  max-sm:grid-cols-1 ">
      {data.map((data) => {
        return (
          <div className="w-full py-[18px] rounded shadow-lg bg-white flex flex-col items-center max-sm:mx-auto max-lg:mx-auto max-lg:max-w-[16rem]">
            {data.icons}
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{data.text}</div>
              <p className="text-base">{data.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
