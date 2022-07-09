import { TextInput, Button } from "../components/components";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/solid";

const ApplicationForm = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex items-center pl-8">
        <div
          className="flex items-center justify-center bg-gray-500 w-8 h-8 my-5 rounded-full"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* <p className="p-8 text-lg font-semibold">Application Form</p> */}
      </div>
      <div className="bg-gray-500 py-24">
      </div>

      <form className="space-y-5 px-8 pb-12">

        <p className="mt-16">Fill out the registration form below to gain access to the member-only pages</p>

        <div class="flex items-center justify-start w-full pb-24">
          <label class="flex flex-col mb-8 w-1/2 h-32">
            <div class="flex flex-col items-center justify-start pt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-36 w-auto text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div class="w-full text-start  rounded-full border-green-500 flex items-center justify-center py-2 border-2 w-4/5">
                <p>Upload</p>
              </div>
            </div>
            <input type="file" class="opacity-0" />
          </label>
        </div>

        <div className="space-y-5">
          <p className="text-xl uppercase font-bold">Your Information</p>
          <form className="space-y-8">
            {/* title */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">First name</label> */}
              <input type="text" name="title" id="title" className="form-control2" placeholder="Title *" />
            </div>

            {/* first name */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">First name</label> */}
              <input type="text" name="first_name" id="first_name" className="form-control2" placeholder="First Name *" />
            </div>

            {/* last name */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Last name</label> */}
              <input type="text" name="first_name" id="last_name" className="form-control2" placeholder="Last Name *" />
            </div>

            {/* Country */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Phone</label> */}
              <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Phone Number" />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Phone</label> */}
              <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Country *" />
            </div>

            {/* Address */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Phone</label> */}
              {/* <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Country *" /> */}
              <textarea className="form-control2" rows="2" placeholder="Address *"></textarea>
            </div>

            {/* Church name */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Phone</label> */}
              <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Church Name *" />
            </div>

            {/* Email */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Email</label> */}
              <input type="text" name="email" id="email" className="form-control2" placeholder="Email *" />
            </div>

            {/* Username */}
            <div className="flex flex-col space-2 items-start">
              {/* <label htmlFor="title">Email</label> */}
              <input type="text" name="email" id="email" className="form-control2" placeholder="Username *" />
            </div>

            {/* Password */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-2 items-start w-full">
                {/* <label htmlFor="title">Email</label> */}
                <input type="password" name="email" id="email" className="form-control2" placeholder="Password *" />
              </div>
              <EyeIcon className="h-6 text-gray-500" />
            </div>

            {/* Cofirm Password */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-2 items-start w-full">
                {/* <label htmlFor="title">Email</label> */}
                <input type="text" name="email" id="email" className="form-control2" placeholder="Confirm Password *" />
              </div>
              <EyeIcon className="h-6 text-gray-500" />
            </div>

            {/* summary here */}
            <div className="py-5 border-b-2">
              <div className="flex justify-between bg-gray-100 p-2 w-full">
                <p className="font-bold">CAMA Membership</p>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-bold">0.00 USD</p>
                  <p>Every 24</p>
                  <p>months</p>
                </div>
              </div>
            </div>
            <p className="text-xl font-bold">Total</p>
            <div className="flex justify-between bg-gray-100 p-2 w-full">
                <p className="font-bold text-green-500">Fee</p>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-bold text-green-500">0.00 USD</p>
                  <p>Every 24</p>
                  <p>months</p>
                </div>
              </div>
            {/* summary end */}

            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
            <div className="pb-4">
              <button className="py-4 rounded-md outline-none px-20 primaryColor w-full tracking-widest uppercase font-bold mt-4">Apply</button>
            </div>
          </form>
        </div>
        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        {/* <Button label="Apply" /> */}
      </form>
    </div>
  );
};

export default ApplicationForm;
