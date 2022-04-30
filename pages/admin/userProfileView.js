import React, { useState } from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
function userProfileView() {

  const router = useRouter()
  const [user, setUser] = useState()

  useEffect(() => {
    let { u_id } = router.query
   
   
    if(u_id==undefined){
      
      u_id=localStorage.getItem("user_profile_id");
    }
      axios.post('http://localhost:5000/admin/getUserDetails',{u_id}).then((resp) => {
        if (resp.data.success) {
          setUser(resp.data.data)
          console.log(resp.data.data);
        }

      }).catch((err) => {

      })
  

  },[])



  return (
    <div>
      <AdminNavbar />
      {
        user? <div class="text-center pt-2">
        <img
          src={`http://localhost:5000/user_images/${user.dat2.photo}`}
          class="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">{user.dat1.name}</h5>
        <p class="text-gray-500"></p>
      </div>:<></>
      }
     
    </div>
  )
}

export default userProfileView