import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

// const FormInitialData = {
//     fullname: { type: "text", value: "" onChange: handleChange },
//     fatherName: { type: "text", value: "" onChange: handleChange },
// }

const Reg = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        fatherName: "",
        profile_image: "",
        familyName: "",
        gender: "",
        cnic: "",
        dob: "",
        subject: "",
        designation: "",
        email: "",
        mobile: "",
        homeContact: "",
        emergencyNumber: "",
        maritalStatus: "",
        religion: "",
        languages: "",
        disability: "",
        domicileDistrict: "",
        domicileType: "",
        qualification: "",
        passingYear: "",
        universityInstitute: "",
        residentialAddress: {
            region: "",
            district: "",
            taluka: "",
            streetAddress: "",
        },
        permanentAddress: {
            region: "",
            district: "",
            taluka: "",
            streetAddress: "",
        },
        sameAsResidential: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("residentialAddress.")) {
            const field = name.split(".")[1];
            setFormData({
                ...formData,
                residentialAddress: {
                    ...formData.residentialAddress,
                    [field]: value,
                },
            });
        } else if (name.startsWith("permanentAddress.")) {
            const field = name.split(".")[1];
            setFormData({
                ...formData,
                permanentAddress: {
                    ...formData.permanentAddress,
                    [field]: value,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setFormData((prevState) => {
            const newFormData = {
                ...prevState,
                sameAsResidential: isChecked,
            };
            if (isChecked) {
                newFormData.permanentAddress = { ...prevState.residentialAddress };
            }
            return newFormData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your form submission logic here
    };

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-sm mt-4 p-8 rounded-2xl shadow-xl w-full max-w-5xl bg-white"
            >
                <div className="form-logo size-32"></div>
                <h2 className="text-4xl font-bold text-green-500 text-center mb-6"> NEW EMPLOYEE DATABASE REGISTRATION FORM</h2>

                <div className="flex justify-normal items-center">

                    <div className="grid grid-cols-2 w-2/3 gap-4 mr-4">
                        {/* Full Name & Father Name */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2" htmlFor="fullName">
                                FULL NAME:
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium mb-2" htmlFor="fatherName">
                                FATHER NAME:
                            </label>
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2" htmlFor="familyName">
                                FAMILY NAME:
                            </label>
                            <input
                                type="text"
                                id="familyName"
                                name="familyName"
                                value={formData.familyName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium mb-2" htmlFor="gender">
                                GENDER:
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            >
                                <option value="">SELECT GENDER</option>
                                <option value="Male">MALE</option>
                                <option value="Female">FEMALE</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/3 mb-4">
                        <ImageUpload />
                    </div>

                </div>

                <div className="grid grid-cols-3 gap-4">

                    {/* CNIC & Date of Birth */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="cnic">
                            CNIC:
                        </label>
                        <input
                            type="text"
                            id="cnic"
                            name="cnic"
                            value={formData.cnic}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="dob">
                            DATE OF BIRTH:
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Subject & Designation */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="subject">
                            SUBJECT:
                        </label>
                        <select
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        >
                            <option value="">SELECT YOUR SUBJECT</option>
                            <option value="Urdu">URDU</option>
                            <option value="english">ENGLISH</option>
                            <option value="mathematics">MATHEMATICS</option>
                            <option value="islamiat">ISLAMIAT</option>
                            <option value="pakistan_studies">PAKISTAN STUDIES</option>
                            <option value="sindhi">SINDHI</option>
                            <option value="computer_science">COMPUTER SCIENCE</option>
                            <option value="chemistry">CHEMISTRY</option>
                            <option value="physics">PHYSICS</option>
                            <option value="botany">BOTANY</option>
                            <option value="Zoology">ZOOLOGY</option>
                            <option value="psychology">PSYCHOLOGY</option>
                            <option value="education">EDUCATION</option>
                            <option value="political_science">POLITICAL SCIENCE</option>
                            <option value="muslim_history">MUSLIM HISTORY</option>
                            <option value="statistic">STATISTIC</option>
                            <option value="Economics">ECONOMICS</option>
                            <option value="sociology">SOCIOLOGY</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="designation">
                            DESIGNATION:
                        </label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value="LECTURER BPS (17)"
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 "
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="email">
                            EMAIL:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="mobile">
                            MOBILE:
                        </label>
                        <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="homeContact">
                            HOME CONTACT:
                        </label>
                        <input
                            type="number"
                            id="homeContact"
                            name="homeContact"
                            value={formData.homeContact}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="emergencyNumber">
                            EMERGENCY NUMBER:
                        </label>
                        <input
                            type="number"
                            id="emergencyNumber"
                            name="emergencyNumber"
                            value={formData.emergencyNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="maritalStatus">
                            MARITAL STATUS:
                        </label>
                        <select
                            id="maritalStatus"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        >
                            <option value="">SELECT MARITAL STATUS</option>
                            <option value="single">SINGLE</option>
                            <option value="married">MARRIED</option>
                            <option value="divorced">DIVORCED</option>
                            <option value="widowed">WIDOWED</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="religion">
                            RELIGION:
                        </label>
                        <input
                            type="text"
                            id="religion"
                            name="religion"
                            value={formData.religion}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="languages">
                            LANGUAGES:
                        </label>
                        <input
                            type="text"
                            id="languages"
                            name="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="disability">
                            DISABILITY (IF ANY):
                        </label>
                        <input
                            type="text"
                            id="disability"
                            name="disability"
                            value={formData.disability}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="domicileDistrict">
                            DOMICILE DISTRICT:
                        </label>
                        <input
                            type="text"
                            id="domicileDistrict"
                            name="domicileDistrict"
                            value={formData.domicileDistrict}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="domicileType">
                            DOMICILE TYPE:
                        </label>
                        <input
                            type="text"
                            id="domicileType"
                            name="domicileType"
                            value={formData.domicileType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="qualification">
                            QUALIFICATION:
                        </label>
                        <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Passing Year - 1 column */}
                    <div className="mb-4 col-span-1">
                        <label className="block font-medium mb-2" htmlFor="passingYear">
                            PASSING YEAR:
                        </label>
                        <input
                            type="text"
                            id="passingYear"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* University Institute - 2 columns */}
                    <div className="mb-4 col-span-2">
                        <label className="block font-medium mb-2" htmlFor="universityInstitute">
                            UNIVERSITY INSTITUTE:
                        </label>
                        <input
                            type="text"
                            id="universityInstitute"
                            name="universityInstitute"
                            value={formData.universityInstitute}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                </div>


                {/* Residential & Permanent Address (Region, District, Taluka, Street Address) */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="residentialAddress.region">
                            RESIDENTIAL REGION:
                        </label>
                        <select
                            type="text"
                            id="residentialAddress"
                            name="residentialAddress.region"
                            value={formData.residentialAddress.region}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        >
                            <option value="">SELECT REGION</option>
                            <option value="karachi">KARACHI</option>
                            <option value="hyderabad">HYDERABAD</option>
                            <option value="mirpurkhas">MIRPURKHAS</option>
                            <option value="shaheed_benazirabad">SHAHEED BENAZIRABAD</option>
                            <option value="larkana">LARKANA</option>
                            <option value="sukkur">SUKKUR</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="residentialAddress.district">
                            RESIDENTIAL DISTRICT:
                        </label>
                        <input
                            type="text"
                            id="residentialAddress"
                            name="residentialAddress.district"
                            value={formData.residentialAddress.district}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="residentialAddress.taluka">
                            RESIDENTIAL TALUKA/TOWN:
                        </label>
                        <input
                            type="text"
                            id="residentialAddress"
                            name="residentialAddress.taluka"
                            value={formData.residentialAddress.taluka}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="residentialAddress.streetAddress">
                            RESIDENTIAL STREET ADDRESS:
                        </label>
                        <input
                            type="text"
                            id="residentialAddress"
                            name="residentialAddress.streetAddress"
                            value={formData.residentialAddress.streetAddress}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                </div>


                {/* Checkbox for Same as Residential Address */}
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="sameAsResidential"
                        checked={formData.sameAsResidential}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label className="">Permanent Address is the same as Residential Address</label>
                </div>


                <div className="grid grid-cols-2 gap-4">
                    {/* Permanent Address (Region, District, Taluka, Street Address) */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="permanentAddress.region">
                            PERMANENT REGION:
                        </label>
                        <select
                            type="text"
                            id="permanentAddress"
                            name="permanentAddress.region"
                            value={formData.permanentAddress.region}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        >
                            <option value="">SELECT REGION</option>
                            <option value="karachi">KARACHI</option>
                            <option value="hyderabad">HYDERABAD</option>
                            <option value="mirpurkhas">MIRPURKHAS</option>
                            <option value="shaheed_benazirabad">SHAHEED BENAZIRABAD</option>
                            <option value="larkana">LARKANA</option>
                            <option value="sukkur">SUKKUR</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="permanentAddress.district">
                            PERMANENT DISTRICT:
                        </label>
                        <input
                            type="text"
                            id="permanentAddress"
                            name="permanentAddress.district"
                            value={formData.permanentAddress.district}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="permanentAddress.taluka">
                            PERMANENT TALUKA/TOWN:
                        </label>
                        <input
                            type="text"
                            id="permanentAddress"
                            name="permanentAddress.taluka"
                            value={formData.permanentAddress.taluka}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="permanentAddress.streetAddress">
                            PERMANENT STREET ADDRESS:
                        </label>
                        <input
                            type="text"
                            id="permanentAddress"
                            name="permanentAddress.streetAddress"
                            value={formData.permanentAddress.streetAddress}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                </div>



                {/* Submit Button */}
                <div className="mb-4 flex justify-center">
                    <button type="submit"
                        className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 shadow-md hover:shadow-lg transition duration-300">
                        SUBMIT
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Reg;


