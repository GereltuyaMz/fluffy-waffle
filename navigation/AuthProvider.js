import { createContext, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await signInWithEmailAndPassword(auth, email, password)
              .then((userCredentials) => {
                const user = userCredentials.user;
                // console.log("user", user)
                const add = setDoc(doc(db, "users", auth.currentUser?.uid), {
                  email: email
                })
                // console.log('add', add);
              })
          } catch (error) {
            console.log('something is wrong', error);
          }
        },
        logout: async () => {
          try {
            await signOut(auth);
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}