import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const greet = (req, res) => res.send("greet from lost and found!");

app.get("/greet", greet);

app.get("/hello", (req, res) => {
  res.send("hello from lost and found!");
});

app.post("/items", async (req, res) => {
  console.log(req.body);

  // 1. Replace with your MongoDB Atlas connection string
  const uri =
    "mongodb+srv://mepawida_db_user:Thailand1@cluster0.aqbf1ni.mongodb.net/?appName=Cluster0";
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected successfully to MongoDB Atlas!");
  const database = client.db("lostandfound");
  const collection = database.collection("items");
  const result = await collection.insertOne(req.body);

  res.json({
    message: "data received",
    data: req.body,
  });
});

app.get("/items", async (req, res) => {
  const uri =
    "mongodb+srv://mepawida_db_user:Thailand1@cluster0.aqbf1ni.mongodb.net/?appName=Cluster0";
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected successfully to MongoDB Atlas!");

  // Specify the database and collection you want to query
  const database = client.db("lostandfound");
  const collection = database.collection("items"); //

  // --- OPTION A: Get ALL documents ---
  const allDocs = await collection.find({}).toArray(); //
  console.log("All Documents:", allDocs);
    res.json({
    message: "data received",
    data: allDocs,
  });
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
