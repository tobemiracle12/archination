import SignInClient from '@/components/Public/Auth/SignInClient'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Sign In | Archination',
  description: 'Sign in to your Archination account to continue.',
  twitter: {
    card: 'summary',
    site: '@archination',
  },
})

export default function SignIn() {
  return (
    <>
      <SignInClient />
    </>
  )
}
