const app = require('./App');
const config = require('./utilis/config');
const mongoose = require('mongoose');


mongoose.connect(config.MONGO_DB)
    .then(() => {
        console.log("Connected to the mongodb");
        app.listen(config.PORT, () => {
            console.log("Server connecting Port :", config.PORT)
        })
    })
    .catch((error) => {
        console.log("Error in connecting mongodb: ", error)
    })