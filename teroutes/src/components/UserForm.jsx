import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../libs/axios";
import { UserContext } from "./Context";

const UserForm = () => {
    const { id } = useParams();
    console.log(id)
    const {users, setUsers} = useContext(UserContext);
    const [user, setUser] = useState({id:"", first_name: "", last_name:"", avatar: ""});
    const navigate = useNavigate();

    useEffect(() => {
        if (id != undefined) {
            console.log("xd")
            axios.get(`/users/${id}`).then((response) => {
                let userresponse = response?.data?.data;
                setUser(userresponse);
            })
        }
    }, [id, setUser])
    const handleFirstNameChange = useCallback(
        (e) => {
            setUser({ ...user, first_name: e.target.value })
        }, [user, setUser]
    )
    const handleLastNameChange = useCallback(
        (e) => {
            setUser({ ...user, last_name: e.target.value })
        }, [user, setUser]
    )
    const handleAvatarChange = useCallback(
        (e) => {
            setUser({ ...user, avatar: e.target.value })
        }, [user, setUser]
    )
    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        if (id == undefined) {
            const newUser = { ...user, id: users.length > 0 ? users[users.length - 1].id + 1 : 1 };
            let newUserList = [...users, newUser]
            setUsers(newUserList);
        } else {
            console.log(user)
            let newUserList = users.map((userOld) => userOld.id === user.id ? user : userOld)
            setUsers(newUserList);
        }
        navigate("/usuarios")
    },[users, setUsers, id, navigate, user] )
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={user.first_name}
                    onChange={handleFirstNameChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">
                    Apellido:
                </label>
                <input
                    type="text"
                    id="apellido"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={user.last_name  }
                    onChange={handleLastNameChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="foto" className="block text-gray-700 text-sm font-bold mb-2">
                    Foto de Perfil:
                </label>
                <input
                    type="text"
                    id="foto"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={user.avatar}
                    onChange={handleAvatarChange}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Guardar
            </button>
        </form>
    )
}



export default UserForm