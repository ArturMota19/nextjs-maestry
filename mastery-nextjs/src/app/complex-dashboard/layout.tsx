

export default function RootLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  // parallel routes are important because they allow us to render multiple components at the same time
  // and each component can be responsible for its own data fetching and states
  // this is a good way to split the logic and make the code more maintainable

  const isLoggedIn = false; // hard code bc we don't have backend
  return isLoggedIn ?(
    <>
      <div>{children}</div>
      <div style={{display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{display: "flex", flex: "1"}}>{notifications}</div>
      </div>
    </>
  ) : (
    <div>{login}</div>
  ) ;
}
