const PartnerCard = () => {
  return (
    <div className="border shadow-xl bg-white w-full">
      <div className="p-6 flex flex-col items-center justify-center border-b border-gray-300 bg-gray-100">
        <p className="font-bold text-3xl pb-4 text-[#2B6CA3]">
          Platinum Partner
        </p>
        <div className="flex items-start pb-2 text-red-500">
          <p className="font-semibold">$</p>
          <p className="font-bold text-6xl"> 300</p>
        </div>
        <p className="text-red-500 pb-2 font-semibold text-sm">Every month</p>
        <p className="pb-16">Partnership</p>
        <div className="px-8 w-full">
          <button className="italic text-sm border py-3 text-white bg-[#AA9055] w-full">
            Sign Up Here
          </button>
        </div>
      </div>
      <div className="px-10 py-2">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <p className={`py-2 ${i < 4 && 'border-b'} text-lg font-thin text-center px-2`}>20% discount from the mission field</p>
        ))}
      </div>
    </div>
  );
};

export default PartnerCard;
