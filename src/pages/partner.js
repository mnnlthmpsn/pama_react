import { useState } from "react";
import { PartnerCard, TextInput, Button } from "../components/components";
import { useGetHook } from "../hooks/useGetHook";

const Partner = () => {
  return (
    <div className="w-screen h-screen">
      <div className="h-80 text-white text-5xl bg-hero bg-center bg-black bg-contain bg-no-repeat"></div>
      <div className="p-6">
        <p className="text-xl">Are you already a partner?</p>
        <p className="pb-8 text-xl font-semibold">Login Now</p>
        <LoginForm />
      </div>
      <div className="bg-partner h-80 bg-top bg-no-repeat bg-cover">
        <div className="absolute h-80 bg-opacity-50 bg-blue-800 w-full flex flex-col text-white space-y-2 items-center p-5 justify-center">
          <p className="text-lg">BECOME A</p>
          <p className="text-6xl">Partner</p>
          <p className="text-2xl">
            <span className="text-lg">WITH</span> PROPHET ASANTE
          </p>
        </div>
      </div>
      <PartnerShipReason />
      <Subscriptions />
    </div>
  );
};

export default Partner;

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <TextInput label="Username/Email" type="tex" />
      <TextInput label="Password" type="password" />
      <Button label="Login" />
      <p>Forgot Password? </p>
    </div>
  );
};

const PartnerShipReason = () => {
  const [active, setActive] = useState("1");

  return (
    <div className="p-6 space-y-1">
      <div className="space-y-2">
        <p
          className="font-semibold text-center uppercase border bg-gray-100 rounded py-2 px-4 flex items-center justify-center"
          onClick={() => setActive("1")}
        >
          Vision
        </p>
        <p
          className={`text-lg duration-300 ${active === "1" ? "opacity-100" : "opacity-0 h-0"
            }`}
        >
          The vision of this ministry is to use every channel available to bring hope to people
          all over the world, to make a difference in the lives of those we touch with the
          transforming healing power of Christ. To reach the lost, encourage and equip believers
          and spread the good news of Jesus Christ is the purpose of  Chris Asante Ministries.
          Through your faithful and consistent support, you become an expression of Christ’s love for people
        </p>
      </div>

      {/* why become a partner */}
      <div className="space-y-2">
        <p
          className="text-center font-semibold uppercase space-y-2 border bg-gray-100 rounded py-2 px-4 flex items-center justify-center"
          onClick={() => setActive("2")}
        >
          Why should I become a Partner?
        </p>
        <p
          className={`text-lg duration-300 ${active === "2" ? "opacity-100" : "opacity-0 h-0"
            }`}
        >
          Who ever receives a prophet in the name of a prophet will receive the reward of a prophet.
          The Gospel is free to all, but it is very expensive to take it to the nations.
          When you become a covenant partner with us , you share the blessings, the eternal rewards and the fulfillment of what God is
          doing throughout the earth. Miracles happen for others and for you. Because of your generosity, God’s favor and goodness 
          become a part of your life and your whole household

          Your decision to make the commitment to partner with me, with your generous monthly ministry gift is a covenant decision. 
          God is a God of Covenants and Principles. Simply pray about it, and use one of the options below to decide what kind 
          of Partnership level you feel led of the Holy Spirit to do
        </p>
      </div>

      <div className="space-y-2">
        <p
          className="w-full h-full font-semibold text-center uppercase border bg-gray-100 rounded py-2 px-4 flex items-center justify-center"
          onClick={() => setActive("3")}
        >
          Who can become a partner
        </p>
        <ul
          className={`px-10 flex flex-col space-y-4 duration-300 list-disc ${active === "3" ? "opacity-100" : "opacity-0 h-0"
            }`}
        >
          <li>Anyone who believes in our Lord Jesus Christ and His Kingdom</li>
          <li>Anyone who believes in CAM and what it stands for can become a partner</li>
          <li>You don’t have to be a Pastor, Prophet, evangelist or preacher</li>
          <li>Our Partners range from ordinary members of the community, COGA and non- COGA members</li>
        </ul>
      </div>

      <div className="space-y-2">
        <div
          className="w-full h-full font-semibold text-center uppercase border bg-gray-100 rounded py-2 px-4 flex items-center justify-center"
          onClick={() => setActive("4")}
        >
          What makes you a partner
        </div>
        <p
          className={`text-lg duration-300 ${active === "4" ? "opacity-100" : "opacity-0 h-0"
            }`}
        >
          Partners are individuals, and families, businesses and ministries that faithfully and periodically sow some level of 
          financial support and prayer into Chris Asante Ministries. Your Partner gift enables CAM to carry out its global 
          mission and positions you to receive the rewards for the work, the anointings of the ministry and a grand harvest 
          on your seed sown
        </p>
      </div>
    </div>
  );
};

const Subscriptions = () => {

  const { data } = useGetHook('packages')

  return (
    <div className="bg-[#AA9055] p-6 space-y-6">
      <p className="text-lg text-white">
        By Sowing and partnering with Prophet Asante and the Holy Spirit, you
        will become a:
      </p>
      <div className="grid gap-5">
        {data?.map((item) => (
          <PartnerCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
