import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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
    city?: string;
    trainerOption?: string;
}

export default async function handler(
    req: { method: string; body: ContactForm },
    res: { status: (arg0: number) => { send: (arg0: string) => any } }
) {
    if (req.method === 'POST') {
        const { fullName, email, message, selectedCountry, trainerOption, phoneNumber, city }: ContactForm = req.body;

        // Validate required fields
        if (!fullName || !email || !message || !city) {
            return res.status(400).send('Missing required fields');
        }

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const formattedTime = today.toTimeString().split(' ')[0];

        // Define CSV file path
        const csvFilePath = path.join(process.cwd(), 'src', 'components', 'LeadStorage', 'ECBALeads.csv');
        const csvWriter = createCsvWriter({
            path: csvFilePath,
            header: [
                { id: 'fullName', title: 'Full Name' },
                { id: 'email', title: 'Email' },
                { id: 'message', title: 'Message' },
                { id: 'selectedCountry', title: 'Selected Country' },
                { id: 'phoneNumber', title: 'Phone Number' },
                { id: 'city', title: 'City' },
                { id: 'trainerOption', title: 'Trainer Option' },
                { id: 'date', title: 'Date' },
                { id: 'time', title: 'Time' },
            ],
            append: true,
        });

        const csvData = [
            {
                fullName,
                email,
                message,
                selectedCountry: selectedCountry || 'N/A',
                phoneNumber: phoneNumber || 'N/A',
                city,
                trainerOption: trainerOption || 'N/A',
                date: formattedDate,
                time: formattedTime,
            },
        ];

        try {
            // Ensure the directory exists
            const dir = path.dirname(csvFilePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Write data to CSV
            await csvWriter.writeRecords(csvData);

            var ccList = [
                'cs@adaptiveus.com',
                'ann@adaptiveus.com'
            ];
            // Configure email options
            const mailOptions = {
                from: process.env.NEXT_PUBLIC_EMAIL,
                to: process.env.NEXT_PUBLIC_EMAIL,
                cc:ccList,
                subject: 'New Message from ECBA Certification Form',
                html: `
          <h2>New ECBA Certification Form Submission For Enquiry</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Selected Country:</strong> ${selectedCountry || 'N/A'}</p>
          <p><strong>Phone No:</strong> ${phoneNumber || 'N/A'}</p>
          <p><strong>Selected Trainer:</strong> ${trainerOption || 'N/A'}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${formattedTime}</p>
          <br>
          <p>Best Regards,<br>Adaptive us</p>
        `,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            return res.status(200).send('Email sent and data saved to CSV successfully');
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send('Error processing the request');
        }
    } else {
        return res.status(405).send('Method Not Allowed');
    }
}
