import { MongoClient } from 'mongodb';


// 1. Replace with your MongoDB Atlas connection string
const uri =
  "mongodb+srv://mepawida_db_user:Thailand1@cluster0.aqbf1ni.mongodb.net/?appName=Cluster0";

// 2. Define the JSON data you want to save
const myJsonObject = {
  name: "Keypad",
  price: 24.99,
  category: "Electronics",
  instock: true,
  tags: ["computer", "accessories"],
};

async function saveToAtlas() {
  // Create a new MongoClient
  const client = new MongoClient(uri);

  try {
    // Connect to the Atlas cluster
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");

    // Specify the database and collection names
    const database = client.db("lostandfound");
    const collection = database.collection("products");

    // Insert the JSON object
    const result = await collection.insertOne(myJsonObject);

    console.log(`Success! Document inserted with _id: ${result.insertedId}`);
  } catch (error) {
    console.error("Error saving data to Atlas:", error);
  } finally {
    // Ensure the client closes when you finish
    await client.close();
  }
}

saveToAtlas();
