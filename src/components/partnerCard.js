import { useNavigate } from "react-router-dom";

const PartnerCard = ({ item }) => {
  console.log(item)

  const router = useNavigate()
  const toCheckout = () => router('/checkout')

  return (
    <div className="border shadow-xl bg-white w-full"> 
      <div className="p-6 flex flex-col items-center justify-center border-b border-gray-300 bg-gray-100">
        <p className="font-bold text-2xl pb-4 text-[#2B6CA3] text-center">
          {item?.title}
        </p>
        <div className="flex items-start pb-2 text-[#FF0000]">
          <p className="font-semibold">$</p>
          <p className="font-bold text-6xl"> {item?.price}</p>
        </div>
        <p className="text-[#FF0000] pb-2 text-lg">Every month</p>
        <p className="text-lg">Partnership</p>
      </div>
      <div className="px-10 py-2">
        {item?.benefits.data.map((benefit, i) => (
          <p className={`py-3 ${i < item.benefits.data.length && 'border-b'} text-lg font-thin text-center px-2`} key={i}>{benefit.attributes.description}</p>
        ))}
      </div>
      <div className="px-8 py-8 w-full">
          <button className="italic text-sm border py-3 text-white bg-[#FF0000] w-full" onClick={toCheckout}>
            Sign Up Here
          </button>
        </div>
    </div>
  );
};

export default PartnerCard;
