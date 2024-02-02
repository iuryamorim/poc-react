import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const navigate = useNavigate()

  return (
    <>
      <h2>Menu</h2>
      <ul >
        <li><a onClick={() => navigate("/")} >Home</a></li>
        <li><a onClick={() => navigate("/devices")} >Devices</a></li>
      </ul>
    </>
  )
}