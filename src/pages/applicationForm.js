import { TextInput, Button } from "../components/components"
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div className="h-auto bgColor w-screen flex flex-col">
            <div className="flex items-center pl-8">
                <div className="flex items-center justify-center bg-gray-500 w-8 h-8 rounded-full" onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className="p-8 text-lg font-semibold">Application Form</p>
            </div>
            <form className="space-y-5 px-8 pb-12">
                <p>Ministry Information</p>

                <div className="flex flex-col space-y-3">
                    <label htmlFor="ministry_type">Ministry Type</label>
                    <label className="space-x-2 flex items-center">
                        <input type='radio' id="church" name="ministry_type" />
                        <p>Church</p>
                    </label>
                    <label className="space-x-2 flex items-center">
                        <input type='radio' id="outreach" name="ministry_type" />
                        <p>Outreach</p>
                    </label>
                </div>

                <TextInput label='Name' />
                <TextInput label='Title' />
                <TextInput label='Firstname' />
                <TextInput label='Lastname' />

                <div>
                    <label>Birthday</label>
                    <input className="form-control" type='date' />
                </div>

                <TextInput label="Spouse's Title/Name" />
                <div>
                    <label>Spouse's Birthday</label>
                    <input className="form-control" type='date' />
                </div>

                <TextInput label='Home Address' />
                <TextInput label='City' />
                <TextInput label='State/Province' />
                <TextInput label='Zip Code/Postal Code' />
                <TextInput label='Country' />
                <TextInput label='Home Phone' />
                <TextInput label='Ministry Name' />
                <TextInput label='Ministry Street Address' />
                <TextInput label='City' />
                <TextInput label='State/Province' />
                <TextInput label='Zip Code/Postal Code' />
                <TextInput label='Country' />
                <TextInput label='Ministry Phone' />
                <TextInput label='Ministry Postal/Mailing Address' />
                <TextInput label='Email' />
                <TextInput label='Website' />
                <TextInput label='Year Ministry was established' />
                <TextInput label='No. of Members' />
                <TextInput label='No. of Partners' />

                <p>Account Information</p>
                <div>
                    <TextInput label='Preferred Name' />
                    <p className="text-xs lightText">Enter as eg. Minister John Doe</p>
                </div>

                <TextInput label='Password' />
                <TextInput label='Confirm Password' />
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                />
                <Button label='Apply' />
            </form>
        </div>
    )
}

export default ApplicationForm