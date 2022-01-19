import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC0Quzc2wu3R7LVh3XOSF324VRgQcXzZjo",
    authDomain: "fro-ecommerce.firebaseapp.com",
    projectId: "fro-ecommerce",
    storageBucket: "fro-ecommerce.appspot.com",
    messagingSenderId: "66311306601",
    appId: "1:66311306601:web:ef29e05396a624c1e751f8"
  }

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)