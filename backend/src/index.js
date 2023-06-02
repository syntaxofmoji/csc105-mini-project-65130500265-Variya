// import express from "express";
// import cors from "cors";
// import mysql from "mysql2";

// import registerGroupOne from "./routes/g1/registerRoute.js";
// import registerGroupTwo from "./routes/g2/registerRoute.js";
// import initDatabase from "./db.js";
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
// import login from "./routes.js/signin.js";
// import Connection from "mysql2/typings/mysql/lib/Connection.js";
const saltRounds = 10;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8000;

app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173","http://localhost:5175"], credentials: true }));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "very secret string",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_1pplpy",
  password: "QLoE22yqlpaRMsj7",
  database: "lab_blank01_1p3rxtq",
});

db.connect((err) => {
  if (err === null) console.log("Database is Connect");
  else console.error(err);
});

app.post("/Signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO User (Email, Password) VALUES (?, ?)",
      [email, hash],
      (err, result) => {
        console.log(err);
        console.log(result);
        res.json({ email, password });
      }
    );
  });
});

app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  try {
    db.query("SELECT * FROM User WHERE Email=?", [email], (err, result) => {
      if (err) {
        return res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].Password, function (error, response) {
          if (response) {
            req.session.user = result;      
            return res.send({success : true});
          } else {
            return res.send({ success: false, message: "Wrong email or password combination" });
          }
        });
      } else {
        return res.send({ message: "User doesn't exist" });
      }
    });
  } catch(e) {
    console.log(e)
  }

 
});

app.post("/addPost", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  db.query(
    "INSERT INTO PostCard (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      console.log(err);
      console.log(result);
      res.json({ title, description });
    }
  );
});

app.get("/getPosts", (req, res) => {
  db.query("SELECT * FROM PostCard", (error, result) => {
    if (error) {
      res.send({ err: error });
    }
    res.send(result);
  });
});

app.get("/Login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.patch("/editPost/:id", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = req.params.id;
  console.log(id);
  db.query(
    "UPDATE PostCard SET title=?, description=? WHERE id=?",
    [title, description, id],
    (error, result) => {
      if (error) {
        res.send({ err: error });
      }
      res.send(result);
    }
  );
});

// app.get("/login", (req,res) => {
//     return res.json({
//         test: "hello world"
//     });
// });

// app.post("/sigup", (req,res) => {
//     const log = req.body;
//     connection.query(
//         `INSERT INTO users (username) VALUES (?)`, [payload.userName], (err, rows) => {
//           // Check if cannot find the data in the database then return the error
//           if (err) {
//             res.json({
//               success: false,
//               data: null,
//               error: err.message,
//             });
//           } else {
//             // Return data to the client if success
//             console.log(rows);
//             if (rows) {
//               res.json({
//                 success: true,
//                 data: {
//                   message: "create success",
//                 },
//               });
//             }
//           }
//         }
//       );
// }
// )
app.listen(port, () => {
	console.log(`App is listenning on http://localhost:${port}`);
});