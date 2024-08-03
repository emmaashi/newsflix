const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');


const UNIVERSITIESURL = [
  'university1',
  'university2',
  // Add other universities' URLs here
];

const universitiesInfo = [];

// Function to collect data for the universities
async function getDataUni({newsSource}) {
  try {
    
    for (const universityUrl of UNIVERSITIESURL) {
      
    // URL to get the data from
      const url = `https://www.ontariouniversitiesinfo.ca/universities/${universityUrl}`;

      // Fetch and parse the HTML
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      // Get the name of the university
      const universityName = $('div.content-header h1').first().text().trim() || 'N/A';

      // Get the phone number
      const phoneNum = $('ul.contact-list span').first().text().trim() || 'N/A';

      // Get the location
      const location = $('div.location-address span').first().text().trim() || 'N/A';

      // Get the link to the uni's website
      const link = $('.visit-website.offsite-noicon').first().attr('href') || 'N/A';

      // Add the collected information to the array
      universitiesInfo.push([universityName, phoneNum, location, link]);
    }

    // Add the data to a text file
    addToFile('data/universities.txt', universitiesInfo);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to write data to a file
function addToFile(filePath, data) {
  const fileContent = data.map(row => row.join('\t')).join('\n');
  fs.writeFileSync(path.resolve(__dirname, filePath), fileContent, 'utf8');
}

// Call the function to start data collection
getDataUni();
