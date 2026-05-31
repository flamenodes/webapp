import { Mail, MapPin, Phone } from "lucide-react";
import { ThemeSwitch } from "@/components/theme/ThemeSwitch";
// ---------------------------------------------------------------------------
// Contact data
// ---------------------------------------------------------------------------
const contactItems = [
    {
        icon: Mail,
        title: "Email us",
        description: "Our team is ready to help. Drop us a line and we'll get back to you within 24 hours.",
        detail: "hello@flamenodes.com",
    },
    {
        icon: Phone,
        title: "Call us",
        description: "Monday – Friday, 9 am to 6 pm. Happy to walk you through anything.",
        detail: "+1 (555) 000-0000",
    },
    {
        icon: MapPin,
        title: "Visit us",
        description: "Come say hello at our headquarters any time during business hours.",
        detail: "123 Cloud Ave, San Francisco, CA",
    },
];
// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function Badge({ children }) {
    return (<span className="inline-flex w-fit items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>);
}
function ContactItem({ icon: Icon, title, description, detail, }) {
    return (<div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
        <Icon className="h-5 w-5" aria-hidden="true"/>
      </div>

      <div>
        <p className="text-lg font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{detail}</p>
      </div>
    </div>);
}
function FormField({ id, label, type = "text", placeholder, }) {
    const baseInput = "h-12 w-full rounded-lg border border-input bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring";
    return (<div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} className={baseInput}/>
    </div>);
}
function TextareaField({ id, label, placeholder, }) {
    return (<div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea id={id} placeholder={placeholder} rows={5} className="min-h-28 w-full resize-y rounded-lg border border-input bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"/>
    </div>);
}
// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function ContactUS() {
    return (<section className="w-full bg-background">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-end px-5 py-4 md:px-8 lg:px-12">
        <ThemeSwitch />
      </div>

      {/* Hero grid */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:gap-10 md:px-8 md:py-14 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-20 xl:gap-16">

        {/* ---------------------------------------------------------------- */}
        {/* Left panel — information                                          */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col gap-6 lg:flex-[55]">
          <Badge>Get in touch with us</Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            We&apos;d love to{" "}
            <br className="hidden sm:block"/>
            hear from you
          </h1>

          {/* Contact info stack */}
          <div className="mt-4 flex flex-col gap-8">
            {contactItems.map((item) => (<ContactItem key={item.title} {...item}/>))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Right panel — elevated form card                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="lg:flex-[45]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg dark:shadow-black/50 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-card-foreground">Say hello!</h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()} noValidate>
              <FormField id="name" label="Full name" placeholder="Jane Smith"/>
              <FormField id="email" label="Email address" type="email" placeholder="jane@example.com"/>
              <FormField id="subject" label="Subject" placeholder="How can we help?"/>
              <TextareaField id="message" label="Message" placeholder="Tell us what's on your mind…"/>

              {/* CTA */}
              <button type="submit" className="h-12 w-full rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px hover:brightness-110 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Send message
              </button>

              {/* Legal */}
              <p className="text-center text-sm leading-relaxed text-muted-foreground">
                By sending a message you agree to our{" "}
                <a href="#" className="font-semibold underline underline-offset-2 transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>);
}
//# sourceMappingURL=ContactUS.js.map