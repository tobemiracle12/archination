'use client'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { validateSignUp, ValidationResult } from '@/lib/validateInputs'
import apiRequest from '@/lib/axios'
import { useAuthStore } from '@/src/authStore'
import { ApiResponse } from '@/src/interface'

export default function SignInClient() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ValidationResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const { password, email } = formData
    const validation = validateSignUp(password, email)

    if (!validation.valid) {
      setError(validation)
      return
    }

    setLoading(true)
    const form = new FormData()
    form.append('email', formData.email.trim().toLocaleLowerCase())
    form.append('password', formData.password.trim())

    try {
      setLoading(true)
      const response = await apiRequest<ApiResponse>('/users/login/', {
        method: 'POST',
        body: form,
      })

      if (response.status === 200) {
        const { user, token } = response.data
        useAuthStore.getState().login(user, token)

        setTimeout(() => {
          router.replace('/dashboard')
        }, 100)
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
      <div className="flex items-end mb-10">
        <Image
          style={{ height: 'auto', width: 40 }}
          src="/images/logos/ArchinationIcon.png"
          loading="lazy"
          sizes="100vw"
          className="my-auto mr-2"
          width={0}
          height={0}
          alt="Archination Logo"
        />
        <h2 className="text-2xl uppercase mb-[-6px] font-semibold text-[var(--custom-text-color)]">
          Archi Nation
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="homeInputLabel ">Email</label>
          <input
            type="text"
            className="customHomeInput pl-5"
            name="username"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter email"
          />
          {error?.emailMessage && (
            <div className="text-red-500 text-sm">{error.emailMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Password</label>

          <div className="relative ">
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
        <div className="text-sm block">
          {`Don't have an account? `}
          <Link
            href={`/sign-up`}
            className="text-[var(--custom-text-color)] hover:underline"
          >
            Click Here.
          </Link>
        </div>

        {loading ? (
          <button type="button" className="homeButton">
            Processing
          </button>
        ) : (
          <button type="submit" className="homeButton">
            Login
          </button>
        )}
        {generalError && (
          <div className="text-red-500 text-sm">{generalError}</div>
        )}
        <Link
          href={`/forgotten-password`}
          className="mt-1 text-center text-sm text-[var(--custom-text-color)] block hover:underlinec mb-4"
        >
          Forgot Password?
        </Link>
      </form>
      <div className="flex items-center mb-3">
        <div className="flex-1 h-[1px] bg-[var(--secondaryBackground)]"></div>
        <div className="text mx-2">Or With</div>
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
