// Härifrån startar vi upp vår webshop 
const {app, port} = require("./src/server")


// Starta igång servern
const server = app.listen(port, () => {
    console.log(`App listenning on port ${port}`)
})
