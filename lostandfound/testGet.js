import { MongoClient } from 'mongodb';

// Replace with your actual Atlas connection string
const uri = "mongodb+srv://mepawida_db_user:Thailand1@cluster0.aqbf1ni.mongodb.net/?appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri); //

async function run() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");

    // Specify the database and collection you want to query
    const database = client.db('lostandfound'); 
    const collection = database.collection('products'); //

    // --- OPTION A: Get ALL documents ---
    const allDocs = await collection.find({}).toArray(); //
    console.log("All Documents:", allDocs);

    
    // --- OPTION B: Get documents with a FILTER ---
    // Example: Find users where age is greater than 18
    const query = { name: { $eq: 'Mouse' } };
    const filteredDocs = await collection.find(query).toArray();
    console.log("Filtered Documents:", filteredDocs);

    // --- OPTION C: Get a SINGLE document ---
    const singleDoc = await collection.findOne({ name: "Alice" });
    console.log("Single Document:", singleDoc);

  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  } finally {
    // Ensure the client closes when you finish or if an error occurs
    await client.close(); //
  }
}

run().catch(console.dir);
