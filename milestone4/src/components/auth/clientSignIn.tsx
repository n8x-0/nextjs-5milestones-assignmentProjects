import { signIn } from "next-auth/react";

export function SignIn({children}: {children: React.ReactNode}) {
    return <button onClick={() => signIn('google')}>{children}</button>
  }
  