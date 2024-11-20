import { signOut } from "@/auth"
 
export default function SignOut({children}: {children: React.ReactNode}) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">{children}</button>
    </form>
  )
} 