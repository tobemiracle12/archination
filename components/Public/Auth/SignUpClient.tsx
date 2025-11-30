'use client'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { validateInputs, ValidationResult } from '@/lib/validateInputs'
import apiRequest from '@/lib/axios'
import { useAuthStore } from '@/src/authStore'
import { ApiResponse } from '@/src/interface'

import { getUserDeviceInfo } from '@/lib/helpers'
import Spinner from '@/components/Spinner'

export default function SignUpClient() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ValidationResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const { password, email, confirmPassword } = formData
    const validation = validateInputs(password, confirmPassword, email)
    if (!validation.valid) {
      setError(validation)
      return
    }

    if (!isChecked) {
      setGeneralError('Please accept the terms and conditions to continue.')
      return
    }

    setLoading(true)

    const form = new FormData()
    form.append('email', formData.email.trim().toLocaleLowerCase())
    form.append('username', formData.username.trim())
    form.append('password', formData.password.trim())
    form.append('device', getUserDeviceInfo().device)
    form.append('operatingSystem', getUserDeviceInfo().os)

    try {
      setLoading(true)
      const response = await apiRequest<ApiResponse>('/users', {
        method: 'POST',
        body: form,
      })

      if (response.status === 200) {
        const { user, token } = response.data
        useAuthStore.getState().login(user, token)
        router.replace('/signup-successful')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setGeneralError(error.response?.data?.message || 'Login failed')
      } else {
        setGeneralError('Unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="text-[25px] text-black font-bold mb-4">
        Create Account
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="homeInputLabel">Email</label>
          <input
            type="text"
            className="customHomeInput pl-5"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter Email"
          />
          {error?.emailMessage && (
            <div className="text-red-500 text-sm">{error.emailMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Password</label>

          <div className="relative">
            <i className="bi bi-shield-lock absolute top-3 left-2 text-lg pl-3"></i>
            <input
              className="customHomeInput pl-12"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type={`${showPassword ? 'text' : 'password'}`}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`bi ${
                showPassword ? 'bi-eye' : 'bi-eye-slash'
              }  cursor-pointer text-lg absolute right-2 top-3`}
            ></i>
          </div>
          {error?.passwordMessage && (
            <div className="text-red-500 text-sm">{error.passwordMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Confirm Password</label>

          <div className="relative">
            <i className="bi bi-shield-lock absolute top-3 left-2 text-lg pl-3"></i>
            <input
              className="customHomeInput pl-12"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              type={`${showPassword ? 'text' : 'password'}`}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`bi ${
                showPassword ? 'bi-eye' : 'bi-eye-slash'
              }  cursor-pointer text-lg absolute right-2 top-3`}
            ></i>
          </div>
          {error?.confirmPasswordMessage && (
            <div className="text-red-500 text-sm">
              {error.confirmPasswordMessage}
            </div>
          )}
        </div>
        <div className="text-sm block">
          {`Already have an account? `}
          <Link
            href={`/sign-in`}
            className="text-[var(--custom-text-color)] hover:underline"
          >
            Click Here.
          </Link>
        </div>
        <div className="mb-2">
          {isChecked ? (
            <i
              onClick={() => setIsChecked(false)}
              className="bi bi-check-square mr-2 text-[var(--custom-color)] cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setIsChecked(true)}
              className="bi bi-square mr-2 cursor-pointer"
            ></i>
          )}
          By signing up, in you have agreed to our
          <Link
            href="/terms-conditions"
            className="text-[var(--custom-color)]"
            style={{ display: 'inline-block', marginLeft: '3px' }}
          >
            terms and conditions
          </Link>
          <div className="f-response-msg auth"></div>
        </div>
        {loading ? (
          <button className="homeButton mb-6">
            <Spinner size={30} />
          </button>
        ) : (
          <button type="submit" className="homeButton mb-6">
            Sign Up
          </button>
        )}
        {generalError && (
          <div className="text-red-500 text-center text-sm">{generalError}</div>
        )}
      </form>
      <div className="flex items-center mb-3">
        <div className="flex-1 h-[1px] bg-[var(--secondaryBackground)]"></div>
        <div className="text mx-2">Or Sign Up With</div>
        <div className="flex-1 h-[1px] bg-[var(--secondaryBackground)]"></div>
      </div>

      <div className="flex justify-center w-full max-w-[500px]">
        <div className="flex  w-full rounded-full overflow-hidden justify-center px-3 items-center">
          <div className="flex h-[35px] w-[35px] rounded-full border-[var(--secondaryBackground)] border-1 items-center mr-10 justify-center">
            <Link href={`/sign-up`}>
              {' '}
              <Image
                src={'/GoogleIcon2.png'}
                sizes="100vw"
                className="h-[17px] w-[17px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
          </div>
          <div className="flex h-[35px] w-[35px] rounded-full border-[var(--secondaryBackground)] border-1 items-center justify-center">
            {' '}
            <Link href={`/sign-up`}>
              {' '}
              <Image
                src={'/AppleIcon3.png'}
                sizes="100vw"
                className="h-[17px] w-auto"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="text w-[35px] h-[35px] rounded-full justify-center items-center border-2 border-[var(--secondaryBackground)">
  <Image
    src={'/GoogleIcon2.png'}
    sizes="100vw"
    className="h-[17px] w-[17px]"
    width={0}
    height={0}
    alt="real"
  />
</div> */
}
