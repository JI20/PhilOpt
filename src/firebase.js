import { getFirestore } from "@firebase/firestore";
import {initializeApp} from "firebase/app"

const app = initializeApp({
    apiKey: "AIzaSyDFZPjeRwJU8V1g0tQk7O02GbhkB8_9pIY",
    authDomain: "philopt-6f2cd.firebaseapp.com",
    projectId: "philopt-6f2cd",
    storageBucket: "philopt-6f2cd.appspot.com",
    messagingSenderId: "944091867345",
    appId: "1:944091867345:web:3695b50d729e9675e77df0",
    measurementId: "G-V9W8LNCC4H"
})

export const firestore = getFirestore(app);
export default app;