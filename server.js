const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://mitmax93:WvFsPADDs5vhCen4@cluster0.ntofc2t.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
   if(err) console.log("ERROR on connection MongoDB");
   else {
    console.log("MongoDB connection succeed");
    module.exports = client;

    const app = require("./app");
    const server = http.createServer(app);  //bu single thread. mana shu yerda asosiy portlash boladi
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
   } 
});



// const server = http.createServer(app);  //bu single thread. mana shu yerda asosiy portlash boladi
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });