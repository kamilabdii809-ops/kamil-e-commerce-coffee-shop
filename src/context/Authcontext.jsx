import {createContext, useContext,  useState } from "react";

const AuthContext = createContext(null);


export function AuthProvider({ children }) {

const [user, setUser] = useState(() => {
    try{
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        return null;
    }
})
const [loading, setLoading] = useState(false);
const[error, setError] = useState(null);

function signup(email, password, name) {
    try {
      setLoading(true);
      setError(null);

      if (!email || !password || !name) {
        setError("All fields are required");
        setLoading(false);
        return { success: false, error: "All fields are required" };
      }

      const existingUser = localStorage.getItem("registeredUser");
      if (existingUser) {
        const parsedUser = JSON.parse(existingUser);
        if (parsedUser.email === email.trim().toLowerCase()) {
          setError("User already exists");
          setLoading(false);
          return { success: false, error: "User already exists" };
        }
      }

      const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        Phone: " ",
        bio: " ",
        profileImage: "",
        password: password.trim(),
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setLoading(false);
      return { success: true, user: newUser };
    } catch (err) {
      const errormsg = err instanceof Error ? err.message : "signup failed";
      setError(errormsg);
      setLoading(false);
      return { success: false, error: errormsg}
    }
  }
      function SignIn(email, password) {
        try{
          setLoading(true);
          setError(null);
          const savedUser = localStorage.getItem("registeredUser");
          if (!savedUser) {
            setError("User not found. please sign up first.");
            setLoading(false);
            return false;
          }

          const parsed = JSON.parse(savedUser);
          if (parsed.email === email.trim().toLowerCase() && parsed.password === password.trim()) {
            localStorage.setItem("user",JSON.stringify(parsed));
            setUser(parsed);
            setLoading(false);
            return true;
          }
          setError("Invalid email or password");
          setLoading(false);
          return false;
        } catch (err) {
          const errormsg = err instanceof Error ? err.message : "signin failed";
          setError(errormsg);
          setLoading(false);
          return false;
        }
      }
       
      function signOut() {
        localStorage.removeItem("user");
        setUser(null);
      }

      function updateProfile(update) {
       if (!user) {
          return { success: false, error: "No user is currently signed in." };}
       const updatedUser = { ...user, ...update };
       localStorage.setItem("user", JSON.stringify(updatedUser));
       localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
       setUser(updatedUser);
       return { success: true, user: updatedUser };

      }


    const value = {
        user,
        loading,
        error,
        signup,
        SignIn,
        signOut,
        updateProfile,
    };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;}