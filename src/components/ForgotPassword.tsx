import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12 px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link to="/login" className="font-medium underline underline-offset-4" >
          Login
        </Link>
      </div>
    </div>
  )
}