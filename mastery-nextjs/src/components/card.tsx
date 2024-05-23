const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div style={{border: "1px solid blue", borderRadius: "5px", padding: "1rem", marginBottom: "1rem"}}>
      {children}
    </div>
  )
}

export default Card