import { MongoClient } from "mongodb";


let client;
let clientPromise;

const uri = process.env.MONGO_URI; // מהקובץ .env
console.log("MongoDB URI:", uri);
if (!uri) throw new Error("Please define the MONGO_URI environment variable");

if (process.env.NODE_ENV === "development") {
  // בפיתוח נשתמש ב-global כדי למנוע חיבורים כפולים בזמן Hot Reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // בפרודקשן
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
