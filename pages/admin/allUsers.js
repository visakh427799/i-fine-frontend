import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function allUsers() {
    const [users,setUsers]=useState([])
    const [view,setView]=useState(false)
    const router = useRouter()
    
    useEffect(()=>{
       axios.get('http://localhost:5000/admin/getAllUsers').then((resp)=>{
            if(resp.data.data){
                setUsers(resp.data.data)
                console.log(resp.data.data);
            }
       }).catch((err)=>{
           console.log(err);

       })

    },[view])


    const handleClick = (u_id) => {
        
        localStorage.setItem('user_profile_id',u_id);
        router.push(`/admin/userProfileView/?u_id=${u_id}`)
      }



      return (
    <div>
        <AdminNavbar/>
        {
            view?
        <button onClick={()=>{setView(false)} } type="button" class="m-4 inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Card view</button>
        :
        <button onClick={()=>{setView(true)} } type="button" class="m-4 inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Table view</button>


        }
        {
            view?
            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-4 m-6">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-6">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               Name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Phone
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date joined
              </th>
              
              
              
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                User_id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               
              </th>
              {/* <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                status
              </th> */}
            </tr>
          </thead>
          <tbody>
            {
                users.length>0?users.map((usr)=>{
                    return(
                        <tr className="bg-white border-b">
             
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {usr.name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {usr.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {usr.phone}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {usr.Date_joined}
              </td>
             
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {usr._id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button type="button" onClick={()=>handleClick(usr._id)} class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
              </td>
              {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Active</span>
              </td> */}
            </tr >
                    )
                }):<></>
            }
            
          </tbody>
        </table>
      </div>
      {
          users.length==0?<div class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
          No users to show
        </div>:<></>
        }
    </div>
  </div>
</div>:
<div>

{
    users.map((usr)=>{
        return(
            
           <h1>This feature is coming</h1>
         
        
        )
    })
}
</div>




 
        
        
}
        


    </div>
  )
}

export default allUsers