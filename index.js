// Härifrån startar vi upp vår webshop 
const {app, port, config} = require("./src/server")
const mongoose = require("mongoose")



// För att undvika error i terminalen när man använder mongoose.
const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

// Connecta till mongoose och starta sedan applikationen 
mongoose.connect(config.databaseURL, options).then(() => {
    console.log(`You are successfully connected to port: ${port}`);
    app.listen(port)
})
