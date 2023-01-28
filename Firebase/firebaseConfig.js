import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
import ENV from "./.constants"

const firebaseConfig = {
  apiKey: ENV.API_KEY,
  authDomain: ENV.AUTH_DOMAIN,
  databaseURL: ENV.DATABASE_URL,
  projectId: ENV.PROJECT_ID,
  storageBucket: ENV.STORAGE_BUCKET,
  messagingSenderId: ENV.MESSAGING_SENDER_ID,
  appId: ENV.APP_ID,
  measurementId: ENV.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const dbRef = ref(db, 'consultants');
const userId = "karljohnsonexamplecom";

get(child(dbRef, userId)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("There is no data in this node");
  }
}).catch((error) => {
  console.error(error);
});

export default db;