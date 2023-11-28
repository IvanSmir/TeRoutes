import axios from "../libs/axios";
import {useCallback, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { reject } from "lodash";
import { UserContext } from "./Context";

const UserList = () => {
    const {users, setUsers} = useContext(UserContext)
    useEffect(() => {
        console.log(users)
        if(users.length == 0){
            axios.get('users').then((response) => {
                let userlist = response?.data?.data
                setUsers(userlist)
                console.log("se volvio a cargar")
            })
        }
    }, [setUsers, users])
    const navigate = useNavigate();
    const onDelete = useCallback((id)=>{
        setUsers((reject(users, { id: id })))
    }, [setUsers, users])
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Avatar
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            #
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Apellido
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.avatar} alt="Perfil" />
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {user.id}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {user.first_name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {user.last_name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex justify-start space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-white border border-blue-500 hover:border-blue-700 hover:bg-blue-700 rounded py-2 px-4"
                                        onClick={()=> {
                                            navigate(`/usuarios/${user.id}`
                                        )
                                        }}
                                    >
                                        Editar
                                    </button>
                                    
                                    <button
                                        className="text-red-500 hover:text-white border border-red-500 hover:border-red-700 hover:bg-red-700 rounded py-2 px-4"
                                        onClick={() => onDelete(user.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;