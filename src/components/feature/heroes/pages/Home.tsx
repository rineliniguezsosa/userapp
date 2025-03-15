import { useEffect,useState } from "react"
import axios from 'axios';
import { Usuario } from "../../../../types/interfaces";
import { MuiDataTable, MuiPaper } from "../../../MuiComponents";
import { columns } from "../../../../helpers";
const getall = import.meta.env.VITE_GETALL;



export const Home = () => {
  const [userdata, setUserData] = useState<Usuario[] | []>([])
  console.log(userdata);
  
  const getUsers = async() =>{
    try {
      const req = await axios.get<Usuario>(getall);
      const resp = await req.data;
      console.log(resp);
      setUserData(resp);
    } catch (error) {
      console.log(error);
      
    }
  }

  // const paginationModel = { page: 0, pageSize: 5 };
 
   const rows = userdata.map((user)=>({
      genre: user.gender,
      name: user.name,
      location: {
        street:{
          number: user.location?.street.number,
          name: user.location?.street.name
        },
        city: user.location?.city,
        state: user.location?.state,
        country: user.location?.country,
        postcode: user.location?.postcode
      },
      email:user.email,
      nat:user.nat
   }))
   console.log(rows);
   

   

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="w-full h-screen border-2 flex border-blue-600">
        {/* contenido de mi api, lista de usuarios  */}
        <div className="w-3/5 border-2 border-red-500 p-5">
            <MuiPaper height={400} width={'100%'}>
              <MuiDataTable
                rows={rows}
                columns={columns}
                checkboxSelection
              />
            </MuiPaper>
        </div>

        <div className="w-2/5 border-2 border-red-500">
          {/* form,agregar nuevas items */}

        </div>
    </div>
  )
}
