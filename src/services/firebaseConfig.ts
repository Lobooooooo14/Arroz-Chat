import { FirebaseApp, initializeApp } from "firebase/app"
import { Analytics, getAnalytics } from "firebase/analytics"
import { Auth, getAuth } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore"

interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
}

export const app: FirebaseApp = initializeApp(firebaseConfig)
export const analytics: Analytics = getAnalytics(app)
export const auth: Auth = getAuth(app)
export const databaseApp: Firestore = getFirestore(app)
