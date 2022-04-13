import { PartnerCard, TextInput, Button } from "../components/components";

const Partner = () => {
  return (
    <div className="w-screen h-screen">
      
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

      <div>
        <div className="p-6">
          <p className="pb-8 text-xl">Are you already a partner? Login Now</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Partner;

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <TextInput label="Username/Email" type="tex" />
      <TextInput label="password" type="password" />
      <Button label="Login" />
      <p>Forgot Password? </p>
    </div>
  );
};

const PartnerShipReason = () => {
  return (
    <div className="p-6 space-y-10">
      <div className="space-y-2">
        <p className="text-xl font-semibold">
          The Purpose of Partnering with us...
        </p>
        <p className="text-lg">
          The vision of this ministry is to use every channel available to bring
          hope to people all over the world, to make a difference in the lives
          of those we touch with the transforming healing power of Christ. To
          reach the lost, encourage and equip believers and spread the good news
          of Jesus Christ is the purpose of Ed Citronnelli Ministries. Through
          your faithful and consistent support, you become an expression of
          Christ’s love for people. When you become a covenant partner with us
          as a world healer, you share the blessings, the eternal rewards and
          the fulfillment of what God is doing throughout the earth. Miracles
          happen for others and for you. Because of your generosity, God’s favor
          and goodness become a part of your life and your whole household.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-semibold">You're a world healer...</p>
        <p className="text-lg">
          As a World Healer, you partner with Pastor Ed and the Holy Spirit to
          heal the nations. Your heart and hands are joined with them by praying
          and financially supporting Ed Citronnelli Ministries each month. The
          amount of your giving is between you and God. Giving is meant to be an
          expression of your love and commitment to advancing the kingdom of
          God. A World Healer is someone who is an extension of the healing
          hands of Jesus Christ and a hero who comes to the rescue of those in
          need. In our world today we need healers. People need hope and
          healing, they need to discover the miracle of a personal relationship
          with Jesus Christ
        </p>
      </div>
    </div>
  );
};


const Subscriptions = () => {
    return(
        <div className="bg-[#AA9055] p-6 space-y-6">
            <p className="text-lg text-white">By Sowing and partnering with Prophet Asante and the Holy Spirit, you will become a:</p>
            <div className="grid gap-5">
                {
                    [1, 2, 3, 4].map(item => <PartnerCard />)
                }
            </div>
        </div>
    )
}