import React, { useState } from "react";
import { handleFormSubmit } from "../Email/HandleSubmit";
import Alert from "../others/Alert";
import { countryCode } from "./CountryCode"; // Adjust the path as needed

interface FormProps {
    onClose: () => void;
    onSuccess: (message: string) => void;
}

const Form: React.FC<FormProps> = ({ onClose, onSuccess }) => {
    const [selectedCountry, setSelectedCountry] = useState("+1"); // Default to US
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [countries, setCountries] = useState<{ name: string; code: string }[]>([
        { name: "US", code: "+1" },
    ]);
    const [isDropdownLoaded, setIsDropdownLoaded] = useState(false);

    const loadCountryCodes = () => {
        if (!isDropdownLoaded) {
            const loadedCountries = Object.entries(countryCode).map(([code, name]) => ({
                name,
                code: `+${code}`,
            }));
            setCountries((prev) => [...prev, ...loadedCountries]); // Keep US at the top
            setIsDropdownLoaded(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const clearForm = () => {
            setFullName("");
            setEmail("");
            setMessage("");
            setPhoneNumber("");
            setCity("");
        };

        if (!fullName || !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(fullName)) {
            setAlertMessage("Please enter a valid full name.");
            return;
        }
    
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setAlertMessage("Please enter a valid email address.");
            return;
        }
    
        if (!selectedCountry) {
            setAlertMessage("Please select a country code.");
            return;
        }
    
        if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
            setAlertMessage("Please enter a valid phone number (numeric only).");
            return;
        }
    
        if (!city) {
            setAlertMessage("Please enter your city.");
            return;
        }
    
        onSuccess("Your message has been sent successfully. We will get back to you soon");
        clearForm();

        try {
            const resultMessage = await handleFormSubmit({
                fullName,
                email,
                selectedCountry,
                phoneNumber,
                city,
                message,
            });

        } catch (error) {
            console.error("Something went wrong, please try again later.");
        }
    };

    const closeAlert = () => {
        setAlertMessage("");
    };

    return (
        <div>
            <h3 className="text-base md:text-lg text-black text-center font-semibold mb-4">
                Unlock Your Potential With Expert Guidance
            </h3>

            {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}

            <form className="space-y-3 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border text-black py-2 md:py-2 lg:py-3 px-4 w-full text-xs md:text-sm lg:text-base md:w-11/12 focus:outline-none rounded-md"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <input
                    type="email"
                    className="border text-black py-2 md:py-2 lg:py-3 px-4 text-xs md:text-sm lg:text-base w-full md:w-11/12 focus:outline-none rounded-md"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="w-full md:w-11/12 flex flex-row md:flex-row lg:flex-row gap-y-5 text-black text-xs gap-x-3">
                    <select
                        name="countryCode"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        onFocus={loadCountryCodes}
                        className="border text-black text-xs py-2 md:py-2 lg:py-3 px-2 w-1/3 focus:outline-none rounded-l-md"
                    >
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border text-black text-xs md:text-sm lg:text-base py-2 md:py-2 lg:py-3 px-4 w-2/3 focus:outline-none rounded-r-md"
                    />
                </div>

                <input
                    type="text"
                    className="border text-black text-xs md:text-sm lg:text-base py-2 md:py-2 lg:py-3 px-4 w-full md:w-11/12 focus:outline-none rounded-md"
                    placeholder="Your City Name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <textarea
                    className="border text-black text-xs md:text-sm lg:text-base py-2 md:py-2 lg:py-3 px-4 w-full md:w-11/12 focus:outline-none rounded-md"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="w-full flex items-center justify-center">
                    <button
                        type="submit"
                        className="border w-11/12 py-2 text-sm md:text-sm lg:text-base bg-custom-gradient text-white rounded-md"

                    >
                        Submit Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
