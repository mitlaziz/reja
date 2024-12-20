console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });


//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish code
app.use(express.static("public")); //har qanday browserdan kirib kelayotgan zaproslar un public folderi ochiq degan means.public folderni kora oladi degani. google request qilayotgan payti clientlarga ochib beryapmiz. publicni ichiga kk boladigan css, styling, imagelarni joylashtiramiz.
app.use(express.json());  // bu kirib kelayotgan json formatdagi datani object korinishiga otkazib beradi.
app.use(express.urlencoded({extended: true}));  // bu html dan traditional request form qilish instrumenti. if formdan smth tortsak bu server qabul qilib oladi.

// 2  Session

// 3  Views code  setdagi front end view folderning in means
app.set("views", "views");
// app.set('views', join(author, 'views'));
app.set("view engine", "ejs");  //view fronted matori ejs da

// 4 Routing code

// app.get malumotni oladi va ozi jonatadi
// app.get("/hello", function (req, res) {
//     res.end(`<h1 style="background: red">"HELLO WORLD"</h1>`);// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1 style="background: green">"sovgalar bolimidasiz"</h1>`);
// });
//
 // app.post ozi bn information olib keladi va ejs formatdagi dataga malumot beradi
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
        // bu traditional post
        // if(err) {
        //     console.log(err);
        //     res.end('something went wrong');
        // } else {
        //     res.end("successfully added");
        // }
    });
    //console.log({finished:well});
    // res.json({ test: "success"});
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
    function(err, data) {
        res.json({state: "success"});
    })
});


app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}},
    function (err, data) {
        res.json({state: "success"});
    });
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "hamma rejalar ochirildi"});
        })
    }
})

app.get("/", function name(req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data });
        }
    });
}) ;

module.exports = app;

