export const handleFormSubmit = async (formData: {
    fullName: string;
    trainerOption?: string;
    email: string;
    selectedCountry: string;
    phoneNumber: string;
    city?: string;
    message: string;
}) => {
    const { fullName, email, selectedCountry, phoneNumber, city, message, trainerOption } = formData;

    // Validation
    if (!fullName || !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(fullName)) {
        return Promise.reject("Full Name is required and should contain only alphabets.");
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return Promise.reject("Email is invalid or missing.");
    }

    if (!selectedCountry) {
        return Promise.reject("Country code is required.");
    }

    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
        return Promise.reject("Phone Number is required and should be numeric.");
    }

    if (!city) {
        return Promise.reject("City is required.");
    }

    if (!message) {
        return Promise.reject("Message is required.");
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
            const errorText = await response.text();
            throw new Error(`Failed to send email: ${errorText}`);
        }

    } catch (error) {
        console.error("Error during form submission:", error);
        return Promise.reject("An unknown error occurred. Please try again later.");
    }
};
