const express = require("express")
const { mongoConnection } = require("./src/DB/mongoConnection");
const expressApp = require("./src/express-app");
require("dotenv").config();

const StartServer = async () => {
    const app = express();
    await expressApp(app);
    await mongoConnection(); 
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Study Server is running on port ${process.env.PORT || 3000}`)
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();