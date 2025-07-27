const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'p.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading HTML file');
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  });
};
