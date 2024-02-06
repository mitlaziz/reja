console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish code
app.use(express.static("public")); //har qanday browserdan kirib kelayotgan zaproslar un public folderi ochiq degan means.public folderni kora oladi degani. google request qilayotgan payti clientlarga ochib beryapmiz. publicni ichiga kk boladigan css, styling, imagelarni joylashtiramiz.
app.use(express.json());  // bu kirib kelayotgan json formatdagi datani object korinishiga otkazib beradi.
app.use(express.urlencoded({extended: true}));  // bu html dan traditional request form qilish instrumenti. if formdan smth tortsak bu server qabul qilib oladi.


// 2  Session


// 3  Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

// app.get("/hello", function (req, res) {
//     res.end(`<h1 style="background: red">"HELLO WORLD"</h1>`);// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1 style="background: green">"sovgalar bolimidasiz"</h1>`);
// });
//

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success"});
});

app.get("/", function name(req, res) {
    res.render("harid");
}) ;

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});


//biz expressni how qurishni organdik, session hali kk emas, viewni shakllantirdik va routeni shakllantirib serverga pass did. serverni http by did. serverni 3000 chi portga did va hammasi togri bolsa 