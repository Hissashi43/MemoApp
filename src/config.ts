import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyBXGJOoSaZGIMtzynBQiYVDoprodtETeAY",
  authDomain: "memoapp-8e45f.firebaseapp.com",
  projectId: "memoapp-8e45f",
  storageBucket: "memoapp-8e45f.appspot.com",
  messagingSenderId: "637277825192",
  appId: "1:637277825192:web:2758c15350f1fa65ae7a9d"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
