import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];
let i = 0;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res)=>{
    res.render("index.ejs", {aP:posts});
})
app.get("/create", (req, res)=>{
    res.render("create.ejs");
});
app.post("/submit", (req, res)=>{
    let np = {"t" : req.body.title,
        "c" : req.body.content,
        "i" : i,
    }
    posts.push(np);
    i++;
    res.redirect("/");
})
app.get("/edit/:id", (req, res)=>{
    const dI = req.params.id;
    const pTE = posts.find((post) => {
        return post.i == dI;
    });
    res.render("edit.ejs", { p: pTE });
})
app.post("/delete/:id", (req, res)=>{
    const dI = req.params.id;
    posts = posts.filter((post) => {
        return post.i != dI;
    })
    res.redirect("/");
})
app.post("/update/:id", (req, res)=>{
    const dI = req.params.id;
    const pTE = posts.find((post) => {
        return post.i == dI;
    });
    pTE.t = req.body.title;
    pTE.c = req.body.content;
    res.redirect("/");
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});