import z from 'zod'
import { toast } from 'sonner'
import { Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form-start'
import { FcGoogle } from 'react-icons/fc'
import { FaDiscord } from 'react-icons/fa'

import { authClient } from '#/lib/auth-client'
import { cn } from '#/lib/utils'

import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Checkbox } from '#/components/ui/checkbox'

const formSchema = z.object({
  login: z
    .string()
    .trim()
    .min(3, 'Please enter your email or username.')
    .refine(
      (value) => {
        const isEmail = z.string().email().safeParse(value).success

        const isUsername = /^[a-zA-Z0-9_]{3,20}$/.test(value)

        return isEmail || isUsername
      },
      {
        message: 'Enter a valid email address or username.',
      },
    ),

  password: z.string().min(1, 'Password is required.'),

  remember: z.boolean(),
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const form = useForm({
    defaultValues: {
      login: '',
      password: '',
      remember: false,
    },

    validators: {
      onChange: formSchema,
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {
      const isEmail = z.string().email().safeParse(value.login).success

      const res = await authClient.signIn.email({
        email: isEmail ? value.login : undefined,

        username: !isEmail ? value.login : undefined,

        password: value.password,

        rememberMe: value.remember,

        callbackURL: '/user/dashboard',
      })

      if (res.error) {
        toast.error(res.error.message)
        return
      }

      toast.success(`Welcome back ${res.data?.user.name ?? ''}`)
    },
  })

  return (
    <div
      className={cn('flex flex-col items--center gap-6', className)}
      {...props}
    >
      <Card className="w-[30rem]">
        <CardContent className="p-6 md:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>

                <p className="text-muted-foreground">
                  Login to your Flame Nodes account.
                </p>
              </div>

              <form.Field name="login">
                {(field) => (
                  <Field>
                    <FieldLabel>Email or Username</FieldLabel>

                    <Input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    <FieldDescription className="text-red-500">
                      {field.state.meta.errors[0]?.message}
                    </FieldDescription>
                  </Field>
                )}
              </form.Field>

              <form.Field name="password">
                {(field) => (
                  <Field>
                    <FieldLabel>Password</FieldLabel>

                    <Input
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    <FieldDescription className="text-red-500">
                      {field.state.meta.errors[0]?.message}
                    </FieldDescription>
                  </Field>
                )}
              </form.Field>

              <form.Field name="remember">
                {(field) => (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.state.value}
                      onCheckedChange={(checked) =>
                        field.handleChange(!!checked)
                      }
                    />

                    <label className="text-sm cursor-pointer">
                      Do you want to remember account?
                    </label>
                  </div>
                )}
              </form.Field>

              <Button type="submit">Login</Button>

              <FieldSeparator>Or continue with</FieldSeparator>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    authClient.signIn.social({
                      provider: 'google',
                      callbackURL: '/user/dashboard',
                    })
                  }
                >
                  <FcGoogle />
                  Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={async () =>
                    await authClient.signIn.social({
                      provider: 'discord',
                      callbackURL: '/user/dashboard',
                    })
                  }
                >
                  <FaDiscord />
                  Discord
                </Button>
              </div>

              <FieldDescription className="text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
