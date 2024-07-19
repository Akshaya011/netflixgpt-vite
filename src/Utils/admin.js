// config/admin.js

const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Update this path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com' // Update this URL
});

const auth = admin.auth();

module.exports = { auth };
