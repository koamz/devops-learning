const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to my DevOps App!");
});

module.exports = app; 

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}