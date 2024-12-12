const fs = require('fs');

const exportTokenToFile = () => {
  const token = process.env.ACCESS_TOKEN || 'your-token-here';
  const timestamp = new Date().toISOString();
  const csvContent = `Timestamp,Token\n${timestamp},${token}`;
  
  fs.writeFileSync('access_token.csv', csvContent);
  console.log('CSV file created successfully!');
}

exportTokenToFile();
