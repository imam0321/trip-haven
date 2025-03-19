import { MongoClient } from "mongodb";

if (!process.env.MONGO_DB_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGO_DB_URL"');
}

const uri = process.env.MONGO_DB_URL;

let mongoClientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri);
  }
  mongoClientPromise = global._mongoClient;
} else {
  mongoClientPromise = new MongoClient(uri);
}

export default mongoClientPromise;
