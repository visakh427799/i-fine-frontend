import React, { useState } from 'react'
//  import NavbarSignup from '../Components/navbarSignup'
import Swal from 'sweetalert2'
import axios from 'axios'
import {useRouter} from 'next/router'
// import storage from 'firebase/storage'
import {storage} from '../../firebase'
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import AdminNavbar  from '../../Components/adminNavbar'


function DoctorPhotoUpload() {





    const router = useRouter()
    const [photo,setPhoto]=useState("")
    const [uploaded,setUploaded]=useState(false)
    const [url,setUrl]=useState("")
    const [imgUrl,setImgUrl]=useState();
    const  [loading,setLoading]=useState();

    const handleSubmit=()=>{
        router.push('/admin/allDoctors')
         
      }
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }})
       const handleCertificate = (e) => {
        
         setPhoto(e.target.files[0])
         console.log(e.target.files[0]);
         let url= URL.createObjectURL(e.target.files[0])
         setUrl(url)
     
       }
       
       const handleSubmitCertificate = (event) => {
         
        
         
         if(photo==""){
           Toast.fire({
             icon: 'error',
             title: 'Please select a file first...!!'
           })
         }else{
          setLoading(true)
             console.log(photo);
             const imageRef =storageRef(storage, `doctors/${photo.name}`);
    uploadBytes(imageRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
       console.log(url);
       setImgUrl(url)
       let d_id = localStorage.getItem('doctor_id');
     
       axios.post('http://localhost:5000/doctor-photo-upload', {url,d_id}).then((resp) => {
           if (resp.data.success) {
             Toast.fire({
               icon: 'success',
               title: 'Uploaded...!!'
             })
             setUploaded(true)
             setLoading(false)
            
           }
           else{
             Toast.fire({
               icon: 'error',
               title: 'Something went wrong...!!'
             })
           }
         })

    });
  })
         
         
       }
      }

       const handleAlert=()=>{
        Toast.fire({
          icon: 'error',
          title: 'Please upload the files...!!'
        })
      }
     
  return (
    <div>
        
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 w-80">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://image.winudf.com/v2/image1/Y29tLmh1YXdlaS5waG9uZXNlcnZpY2VfaWNvbl8xNTU0OTkxMDc1XzA3Mw/icon.png?w=&fakeurl=1"
              alt="Workflow"
            />
            <h2 className="mt-4 text-center text-3xl text-gray-900">Upload Doctor's Profile picture</h2>

          </div>
          <div class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
  </svg>
  The file should be image
</div>

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">


            <div class="flex justify-center">
              {
                uploaded ?
                  <div class="bg-green-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                    <div class="bg-green-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-400 rounded-t-lg">
                      <p class="font-bold text-white flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                        Uploaded</p>
                      <div class="flex items-center">
                        <p class="text-white opacity-90 text-xs">just now</p>
                        {/* <button type="button" class="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"></button> */}
                      </div>
                    </div>
                  </div>
                  : <div class="mb-3 w-96">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700"> Certificate</label>
                    <input
                      required={true}
                      onChange={handleCertificate}
                      class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="photo" type="file" id="formFile" />
                  </div>
                  
              }
             
            </div>
            {
                  photo==""|| uploaded?<></>:
                  
                   
                  <div class="grid grid-cols-3 gap-4 flex items-center">
                  <div class="mb-4">
                  </div>
                
                  <div class="mb-4">
                    <img src={url} class="max-w-full h-auto rounded-lg" alt=""/>
                  </div>
                  <div class="mb-4">
                  </div>
                </div>
               
              }
            {
              uploaded ? <></> :
                <div class="flex space-x-2 justify-center">
                  <div>
                    {
                      loading?<div class="loader"></div>
                      
                    :<button onClick={handleSubmitCertificate} type="button" class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                        class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                        </path>
                      </svg>
                      Upload
                    </button>

                    }

                    

                  </div>
                </div>
            }
            
            
            {
                uploaded ?
                <div className='pt-4'>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >

                    Next
                  </button>
                </div> :
                <div  className='pt-4'>
                <button
                 
                  onClick={handleAlert}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >

                  Next
                </button>
                </div>  
            }
          </div>
        </div>
      </div>
    
        
    </div>
  )
}

export default DoctorPhotoUpload