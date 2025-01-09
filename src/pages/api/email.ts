import nodemailer from 'nodemailer';
// import { NextApiRequest, NextApiResponse } from 'next';

// SMTP configuration for Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,   
        pass: process.env.NEXT_PUBLIC_PASSWORD,  
    },
});

interface ContactForm {
    fullName: string;
    email: string;
    message?: string;
    selectedCountry?: string;
    phoneNumber?: string;
    city: string;
}

export default async function handler(req: { method: string; body: ContactForm; } , res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { fullName, email, message, selectedCountry, phoneNumber, city }: ContactForm = req.body;

        if (!fullName || !email || !message || !city) {
            return res.status(400).send('Missing required fields');
        }

        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL,   
            to: process.env.NEXT_PUBLIC_EMAIL,    
            subject: 'New Message from CBAP Certification Form',
            html: `
                <h2>New CBAP Certification Form Submission For Enquiry</h2>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Selected Country:</strong> ${selectedCountry || 'N/A'}</p>
                <p><strong>Phone No:</strong> ${phoneNumber || 'N/A'}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br>
                <p>Best Regards,<br>Adaptive us</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            return res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
    } else {
        console.log(`No Handler For ${req.method}`);
        return res.status(405).send('Method Not Allowed');
    }
}
