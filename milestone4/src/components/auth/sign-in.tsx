import { signIn } from "@/auth"

const signInAndCreateUser = async () => {
  "use server"
  await signIn("google")
}

export default function SignIn({ children }: { children: React.ReactNode }) {
  return (
    <form action={signInAndCreateUser}>
      <button type="submit">{children}</button>
    </form>
  )
} 