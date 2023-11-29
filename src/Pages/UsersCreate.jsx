import UserForm from "../components/UserForm";

const UserCreate = () =>{
    return(
        <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-5xl font-bold mb-4">Usuario</h1>
      
      <UserForm />
    </div>
    )
}

export default UserCreate;