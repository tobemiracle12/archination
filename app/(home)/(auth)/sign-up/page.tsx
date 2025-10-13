import SignUpClient from '@/components/Public/Auth/SignUpClient'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Sign Up | Archination',
  description: 'Create your Archination account now.',
  twitter: {
    card: 'summary',
    site: '@archination',
  },
})

export default function SignUp() {
  return (
    <>
      <SignUpClient />
    </>
  )
}
