export const handleFormSubmit = async (formData: {
    fullName: string;
    email: string;
    selectedCountry: string;
    phoneNumber: string;
    city: string;
    message: string;
}) => {
    const { fullName, email, selectedCountry, phoneNumber, city, message } = formData;

    // Validation
    if (!fullName || !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(fullName)) {
        return "Full Name is required.";
    }

    if (!email) {
        return "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        return "Email is invalid.";
    }

    if (!selectedCountry) {
        return "Country code is required.";
    }

    if (!phoneNumber) {
        return "Phone Number is required.";
    } else if (!/^\d+$/.test(phoneNumber)) {
        return "Phone Number should be numeric.";
    }

    if (!city) {
        return "City is required.";
    }

    try {
        const response = await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to send email");
        }
        

    } catch (error) {
        console.error("Error during form submission:", error);

    }
};
