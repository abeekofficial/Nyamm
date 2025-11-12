import { useState,  } from "react"
import { supabase } from "@/supabase-client"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  // Sign up or login depending on mode
  const handleAuth = async (e?:React.FormEvent) => {
    if(e)e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      let result

      if (isSignUp) {
        result = await supabase.auth.signUp({email, password, options: {
          data: {
            fullName
          }
        }})
      } else {
        result = await supabase.auth.signInWithPassword({ email, password })
      }
      if (result.error) {
        setError(result.error.message)
        console.error("Auth Error:", result.error.message)
        toast.error(result.error.message)
      } else {
        console.log(isSignUp ? "Sign-up successful" : "Login successful")
        toast.success(isSignUp? "Sign-up successful": "Login successful")
      }
      navigate("/")

          // profile
    if (isSignUp && !result.error && result.data){
      await supabase.from("profile").insert([
        {id: result.data.user.id,
        fullName: fullName
      },
      ])
    }

    } catch (err) {
      console.error("Unexpected error:", err)
      setError("Something went wrong")
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }
    const signInWithGoogle = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      })
      
      if (error) {
        setError(error.message)
        console.error("Google Auth Error:", error.message)
      }
    } catch (err) {
      console.error("Unexpected error with Google auth:", err)
      setError("Something went wrong with Google sign in")
      toast.error("Something went wrong with Google sign in")
    } finally {
      setLoading(false)
    }
  }

  return {
    fullName, 
    setFullName,
    isSignUp,
    setIsSignUp,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleAuth,
    signInWithGoogle
  }
}
