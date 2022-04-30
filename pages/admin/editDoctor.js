import React from 'react'

function editDoctor() {
  return (
    <div>
        <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-4 xl:mt-20">
      <h1 className="text-center">Add Doctor</h1>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
            <div className="max-w-md w-full space-y-8 w-120">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">

    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text"
         name="name"
         onChange={handleChange}
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Name"/>
      </div>
      <div class="form-group mb-6">
      <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select 
      name='specialization'
      onChange={handleChange}
      class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Specializations</option>
        {
          DoctorSpec.map((spec)=>{
            return(
              <option name="specialization" value={spec.type}>{spec.type}</option>
            )
          })
        }
        
        
    </select>
  </div>
</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-8">
        <input type="email"
         name="email"
         onChange={handleChange}
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Email"/>
      </div>
      <div class="form-group mb-8">
        <input
          name="phone"
          onChange={handleChange}
          type="Number" class="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Phone"/>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-8">
        <input type="text"
         name="gender"
         onChange={handleChange}
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Gender"/>
      </div>
      <div class="form-group mb-8">
        <input
          name="experience"
          onChange={handleChange}
          type="text" class="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Experience"/>
      </div>
    </div>
    {/* <div class="form-group mb-6">
      <input type="email" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address"/>
    </div>
    <div class="form-group mb-6">
      <input type="password" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Password"/>
    </div>
    <div class="form-group form-check text-center mb-6">
      <input type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck25" checked/>
      <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
    </div> */}
    <button type="submit"
    onClick={handleSubmit}
    class="
      w-full
      px-6
      py-2.5
      bg-green-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add
      
      
      </button>
      
      
 
</div>       
      
            </div>
            </div>
</main>
    </div>
  )
}

export default editDoctor