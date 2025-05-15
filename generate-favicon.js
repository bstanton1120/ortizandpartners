const favicons = require('favicons');
const fs = require('fs');
const path = require('path');

// Source image (SVG or PNG)
const source = path.resolve(__dirname, 'public/favicon.svg');

// Configuration
const configuration = {
  path: '/favicon/', // Path for generated files
  appName: 'Ortiz And Partners',
  appShortName: 'Ortiz And Partners',
  appDescription: 'Ortiz And Partners Law Firm',
  background: '#FFFFFF',
  theme_color: '#1B2B4B',
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false,
    yandex: false
  }
};

// Generate favicons
favicons(source, configuration)
  .then(response => {
    // Create the directory if it doesn't exist
    if (!fs.existsSync(path.resolve(__dirname, 'public/favicon'))) {
      fs.mkdirSync(path.resolve(__dirname, 'public/favicon'));
    }

    // Save the generated files
    response.images.forEach(image => {
      fs.writeFileSync(
        path.resolve(__dirname, 'public', image.name),
        image.contents
      );
    });

    // Copy favicon.ico to the root directory
    const faviconPath = response.images.find(img => img.name === 'favicon.ico');
    if (faviconPath) {
      fs.writeFileSync(
        path.resolve(__dirname, 'public/favicon.ico'),
        faviconPath.contents
      );
    }

    console.log('Favicon generated successfully!');
  })
  .catch(error => {
    console.error('Error generating favicon:', error);
  });
