export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <p>Auth Header</p>
        {children}
    </div>
  )
}
