import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const USERNAME ='adaptiveus';
const PASSWORD ='adminpass';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Authenticate user
    if (username !== USERNAME || password !== PASSWORD) {
      res.status(401).send('Unauthorized');
      return;
    }

    const filePath = path.join(process.cwd(), 'src', 'components', 'LeadStorage', 'ECBALeads.csv');

    try {
      if (!fs.existsSync(filePath)) {
        res.status(404).send('ECBALeads.csv file not found');
        return;
      }

      // Read the file contents
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Set headers for file download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="ECBALeads.csv"');
      res.status(200).send(fileContents);
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).send('Error reading file');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
