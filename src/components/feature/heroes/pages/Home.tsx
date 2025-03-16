import { useEffect,useState } from "react"
import axios from 'axios';
import { Usuario } from "../../../../types/interfaces";
import { MuiDataTable, MuiPaper } from "../../../MuiComponents";
import { columns } from "../../../../helpers";
const getall = import.meta.env.VITE_GETALL;



export const Home = () => {
  const [userdata, setUserData] = useState<Usuario[]>([])
  
  const getUsers = async() =>{
    try {
      const { data } = await axios.get<{status: boolean,data:Usuario[]}>(getall); 
      setUserData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
      
    }
  }
  
  // const paginationModel = { page: 0, pageSize: 5 };
  
   console.log(userdata);
   const rows = userdata.map((user: Usuario, index) => ({     
    id: index,
    _id: user._id,
    gender: user.gender,
    name: user.name,
    streetNumber:user.location.street.number || "",
    streetName: user.location.street.name || "",
    streetCity: user.location.city || "",
    streetState: user.location.state || "",
    streetCountry:  user.location.country || "",
    stretPostcode: user.location.postcode || "",
    email: user.email || "",
    nat: user.nat || "",
  }));
    console.log("rows: ",rows);
   

   

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
