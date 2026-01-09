export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-xl glass-card p-6 transition-all duration-300 hover:shadow-md dark:hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  )
}
