import SignupSuccessful from '@/components/Public/SignupSuccessful'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Sign Up Successful | Archination',
  description: 'Congratulations, your account has been created successfully.',
  twitter: {
    card: 'summary',
    site: '@archination',
  },
})

export default function SignInClient() {
  return (
    <>
      <SignupSuccessful />
    </>
  )
}
