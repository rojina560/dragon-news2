import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebaseAuth.config";


export const AuthContext = createContext(null)
 const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ loading , setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log(' change the current state', currentUser)
          setUser(currentUser)
          setLoading(false)
      })
        return () => {
           unSubscribe()
       }
    },[])

    const authInfo ={ createUser,user , logIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;