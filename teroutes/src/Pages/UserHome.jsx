import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";

const UserHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-5xl font-bold mb-4">Usuarios</h1>
      <button
        onClick={()=>{navigate("/create-usuarios")}}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear Usuario
      </button>
      <UserList />
    </div>
  )
}

export default UserHome