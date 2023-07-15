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
    apiKey: "AIzaSyDtqiJgW3slfgIrsMmtwsIIl11pvHtOmRk",
    authDomain: "arroz-chat.firebaseapp.com",
    projectId: "arroz-chat",
    storageBucket: "arroz-chat.appspot.com",
    messagingSenderId: "481308224598",
    appId: "1:481308224598:web:25d2df5468413aba859ff7",
    measurementId: "G-Z4BMY3DV6G"
}

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig)
export const analytics: Analytics = getAnalytics(app)
export const auth: Auth = getAuth(app)
export const databaseApp: Firestore = getFirestore(app)