// Test för server 
const supertest = require("supertest")
const { app, port } = require("../src/server")

describe("Simplpe test, does it work", () => {
    
    // Innan testet, sätt igång servern
    beforeEach(() => {
        server = app.listen(port, () => {
            console.log("Testing server is up");
        })
    })
    // Ett test för att se om serverns svarar på get req
    it("", (done) => {
        supertest(server).get("/").expect(200, done);
    })
    // Efter testet är klart, stäng servern
    afterEach((done) => {
        server.close(done);
    })
})