import React, { useEffect } from 'react'
import NavbarSignin from '../Components/navbarSignin'
import { LockClosedIcon } from '@heroicons/react/solid'
import Dropdown from '../Components/dropdown'
import { Fragment,useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import {useRouter} from 'next/router'

const people = [
  {
    id: 1,
    name: 'Parent',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Therapists',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Administrator',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function signin() {

  
const router=useRouter()

useEffect(()=>{
  let u_id=localStorage.getItem("user_id");
  if(u_id!=undefined){
    router.push('/userProfile')
  }
},[])

  const [selected, setSelected] = useState(people[1])
  return (
   <div>

<NavbarSignin/>
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 w-80">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://image.winudf.com/v2/image1/Y29tLmh1YXdlaS5waG9uZXNlcnZpY2VfaWNvbl8xNTU0OTkxMDc1XzA3Mw/icon.png?w=&fakeurl=1"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl  text-gray-900">Sign in </h2>
            
          </div>
          <form className="mt-8 space-y-6 " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
              
    </div>
            </div>

            <div className="flex items-center justify-between">
              

              
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>


  )
}

export default signin