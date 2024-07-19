import * as admin from "firebase-admin";

const serviceAccount = require("./firebase-admin.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
// ... export other Firebase services if needed

export { db };
