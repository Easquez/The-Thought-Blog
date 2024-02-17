require("dotenv").config();

const { MongoClient } = require("mongodb");

const mongo_URI = process.env.MONGO_URI;
let client;

const connectMongo = async function (fastify, dbName) {
  client = new MongoClient(mongo_URI);

  try {
    await client.connect();

    client.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    client.on("error", (err) => {
      console.error("MongoDB connection error:", err.message, err.stack);
      process.exit(1);
    });

    const db = client.db(dbName);
    fastify.decorate("mongo", { db });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message, err.stack);
    process.exit(1);
  }
};

module.exports = {
  client,
  connectMongo,
};
