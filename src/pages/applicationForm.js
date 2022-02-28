import { TextInput, Button } from "../components/components"
import ReCAPTCHA from "react-google-recaptcha";

const ApplicationForm = () => {
    return (
        <div className="h-auto bgColor w-screen flex flex-col">
            <p className="p-8 text-lg font-semibold">Application Form</p>
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