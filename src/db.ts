import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

 const db = admin.database();
 const auth=admin.auth()
 export {db,auth}
