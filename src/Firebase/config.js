import React from "react";
import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import ENV from "./constants"

const config = {
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
const app = initializeApp(config);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export {
  app,
  analytics,
  db
}