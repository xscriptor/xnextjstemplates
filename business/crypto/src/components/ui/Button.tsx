import Link from "next/link"

type ButtonProps = {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow hover:shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={combinedClassName}>
      {children}
    </button>
  )
}
