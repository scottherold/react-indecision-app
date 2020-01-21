// *** Server to host React App *** //

// *** MODULES *** //
// ** Native Modules ** //
const path = require('path');

// ** npm Modules ** //
const express = require('express');

// *** EXPRESS SETUP *** //
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); // <-- goes up a folder
const port = process.env.PORT || 3000; // <-- dynamic port for production

// ** Settings ** //
app.use(express.static(publicPath));

// *** ROUTING *** //
app.get('*', (req, res) => {
    return res.sendFile(path.join(publicPath, 'index.html')); // <-- returns only index.html regardless of server route
});

// *** PORTS *** //
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});