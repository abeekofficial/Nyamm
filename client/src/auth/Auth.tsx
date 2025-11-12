import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { type ChangeEvent, } from "react"
import { useAuth } from "@/hooks/useAuth"
const Auth = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    isSignUp,
    setIsSignUp,
    loading,
    error,
    handleAuth,
    signInWithGoogle } = useAuth()

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{isSignUp ? "Create an Account" : "Login to your Account"}</CardTitle>
        <CardDescription>
          {isSignUp
            ? "Enter your email below to create your account"
            : "Enter your email below to login to your account"}
        </CardDescription>
        <div className="pt-2">
          <Button
            variant="link"
            className="p-0 h-auto"
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleAuth}>
          <div className="flex flex-col gap-6">
            {isSignUp && (
              <div className="grid gap-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input id="fullname"
                  type="text"
                  placeholder="Xo'jamedov Jahongir"
                  value={fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                  required />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {!isSignUp && (
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                )}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            </div>
          </div>

          <CardFooter className="flex-col gap-2 pt-4">
            <Button type="submit" disabled={loading} className={loading ? "bg-orange-300 w-full" : "w-full"}>
              {loading ? "Processing" : isSignUp ? "Sign Up" : "Login"}
            </Button>
            <Button onClick={signInWithGoogle} variant="secondary" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

export default Auth
