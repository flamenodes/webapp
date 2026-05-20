'use client'

import { useState } from 'react'
import { cn } from '#/lib/utils.ts'
import { Button } from '#/components/ui/button.tsx'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '#/components/ui/field.tsx'
import { Input } from '#/components/ui/input.tsx'
import { Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form-start'
import z from 'zod'
import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'
import { FcGoogle } from 'react-icons/fc'
import { FaDiscord } from 'react-icons/fa'

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [step, setStep] = useState<1 | 2>(1)

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
  }

  const formSchema = z
    .object({
      firstname: z
        .string()
        .trim()
        .min(2, 'First name must be at least 2 characters.')
        .max(50, 'First name is too long.'),

      lastname: z
        .string()
        .trim()
        .min(2, 'Last name must be at least 2 characters.')
        .max(50, 'Last name is too long.'),

      username: z
        .string()
        .trim()
        .min(3, 'Username must be at least 3 characters.')
        .max(20, 'Username must be under 20 characters.')
        .regex(
          /^[a-zA-Z0-9_]+$/,
          'Username can only contain letters, numbers, and underscores.',
        ),

      email: z.string().trim().email('Please enter a valid email address.'),

      password: z
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .max(100, 'Password is too long.')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
        .regex(/[0-9]/, 'Password must contain at least one number.')
        .regex(
          /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
          'Password must contain at least one special character.',
        ),

      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match.',
      path: ['confirmPassword'],
    })
  const form = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onChange: formSchema,
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const res = await authClient.signUp.email({
        firstname: value.firstname,
        lastname: value.lastname,
        username: value.username,
        name: `${value.firstname} ${value.lastname}`,
        email: value.email,
        password: value.confirmPassword,
        callbackURL: '/user/dashboard',
      })

      if (res.error) {
        toast.error(res.error.message)
      } else {
        toast.success('You are succssfully registerd.')
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {step === 1 ? 'Tell us about yourself' : 'Set up your credentials'}
          </p>
        </div>

        {step === 1 && (
          <>
            <div className="flex gap-4">
              <form.Field
                name="firstname"
                children={(field) => (
                  <Field className="flex-1">
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      value={field.state.value}
                    />
                    {field.state.meta.errors.map((err: any) => (
                      <FieldDescription
                        key={err.message}
                        className="text-red-500"
                      >
                        {err.message}
                      </FieldDescription>
                    ))}
                  </Field>
                )}
              />

              <form.Field
                name="lastname"
                children={(field) => (
                  <Field className="flex-1">
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      value={field.state.value}
                    />
                    {field.state.meta.errors.map((err: any) => (
                      <FieldDescription
                        key={err.message}
                        className="text-red-500"
                      >
                        {err.message}
                      </FieldDescription>
                    ))}
                  </Field>
                )}
              />
            </div>
            <form.Field
              name="email"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    required
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    value={field.state.value}
                  />
                  <FieldDescription>
                    We&apos;ll use this to contact you. We will not share your
                    email with anyone else.
                  </FieldDescription>
                  {field.state.meta.errors.map((err: any) => (
                    <FieldDescription
                      key={err.message}
                      className="text-red-500"
                    >
                      {err.message}
                    </FieldDescription>
                  ))}
                </Field>
              )}
            />
            <Field>
              <Button
                type="button"
                variant="great"
                onClick={handleContinue}
                className="w-full"
              >
                Continue
              </Button>
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <form.Field
              name="username"
              children={(field) => (
                <Field className="flex-1">
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    id="username"
                    type="text"
                    required
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.map((err: any) => (
                    <FieldDescription
                      key={err.message}
                      className="text-red-500"
                    >
                      {err.message}
                    </FieldDescription>
                  ))}
                </Field>
              )}
            />

            <form.Field
              name="password"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>

                  {field.state.meta.errors.map((err: any) => (
                    <FieldDescription
                      key={err.message}
                      className="text-red-500"
                    >
                      {err.message}
                    </FieldDescription>
                  ))}
                </Field>
              )}
            />

            <form.Field
              name="confirmPassword"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password
                  </FieldLabel>

                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  <FieldDescription>
                    Please confirm your password.
                  </FieldDescription>

                  {field.state.meta.errors.map((err: any) => (
                    <FieldDescription
                      key={err.message}
                      className="text-red-500"
                    >
                      {err.message}
                    </FieldDescription>
                  ))}
                </Field>
              )}
            />

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                Back
              </Button>

              <Button type="submit" className="flex-1">
                Create Account
              </Button>
            </div>
          </>
        )}
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <FcGoogle />
            Sign up with Google
          </Button>
          <Button variant="outline" type="button">
            <FaDiscord />
            Sign up with Discord
          </Button>

          <FieldDescription className="px-6 text-center">
            Already have an account? <Link to="/login">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
