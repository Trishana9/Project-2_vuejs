<template>
    <section>]
    <header>
        <nav class="relative nav-bar">
            <div class="fixed top-0 left-0 right-0 flex items-center justify-between h-24 drop-shadow px-32 bg-white sm:px-5 sm:grid sm:h-44 md:grid md:h-32 md:px-10">
                <div class="pl-20 sm:pl-0 md:pl-0">
                    <a href="/"><svg width="120" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#a)" d="M0 0h120v60H0z"/><defs><pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#b" transform="scale(.00459 .00917)"/></pattern><image id="b" width="218" height="109" xlink:href="data:image/png;base64,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"/></defs></svg>
              </a>
                    
                </div>
               <div class="space-x-10 flex sm:grid sm:grid-cols-4 sm:space-x-0" >
                  <a class="font-medium text-gray-900 hover:text-gray-500 "><router-link to="/">Career</router-link></a>
   
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500">Work</a>
    
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500">Service</a>
    
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500">Our Customer</a>
   
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500">Team</a>
   
                  <a class="font-medium text-gray-900 hover:text-gray-500"><router-link to="/CareerPage">Career</router-link></a>
   
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500">Contact</a>
   
                  <a href="#" class="font-medium text-gray-900 hover:text-gray-500"><img src="../assets/search.png"></a>
    
               </div>
           </div>
       </nav>
   </header>

   <div class="pt-32 pb-10 bg-[#F8F8F8] flex justify-center sm:pt-52 md:pt-40">
    <p class="text-4xl">Front End Developer</p>

    </div>

    <main>
        <div class="flex px-44 py-32 sm:grid grid-cols-1 px-0 py-20 justify-center md:grid"> 
            <div class="pl-48 sm:px-5 md:pl-0">
                <section class="pl-32 tracking-wide sm:pl-5 sm:w-96 md:px-32">
                    <p class="text-lg font-bold pb-5 ">Requirements :</p>
                    <p class="pb-2 sm:flex">
                        - Frontend Dev Candidate must possess at least Diploma,
                           Bachelor's Degree in Engineering (Computer/Telecommunication)
                           or equivalent.
                    </p>
                    <p class="pb-2">
                        - At least 1 Year(s) of working experience in the related field is
                           required for this position.
                    </p>

                    <p class="pb-16">
                        - Preferably Staff (non-management & non-supervisor) specialized
                           in IT/Computer - Software or equivalent.
                        
                    </p>
                </section>

                <section class="pl-32 sm:pl-5 sm:w-96 md:px-32">
                    <p class="text-lg font-bold pb-5">Frontend Expertise:</p>
                    <p class="pb-2">  
                        -  API implementation
                     </p>
                     <p class="pb-2">
                        -  Experience in html, CSS, ReactJS and Angular Framework
                    </p>
                    <p class="pb-2">
                        -  Experience in using Git
                    </p>
                    <p class="pb-2">
                        -  Strong logical and analytical thinking
                    </p>
                    <p class="pb-2">
                        -  Willing to learn new technology
                    </p>
                    <p class="pb-2">
                        -  Fresh Graduated are welcome
                    </p>
                </section>

            </div>
            <div class="pt-16 pr-72 sm:px-5 md:px-32">
                <div class="pl-32 sm:pl-5 sm:pr-5 md:pl-0">
                     <form class="bg-white border border-gray-300 rounded-lg w-105 px-8 pb-8 mb-4 sm:w-auto md:w-auto">
                        <p class="flex justify-center text-2xl font-medium py-8"> Submit Your Application</p>
                   
                      <div class="mb-6">
                        <label class="text-sm mb-2 inline-block" for="username">
                          Full Name
                        </label>
                        <input class="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 " id="username" type="text" >
                      </div>

                      <div class="mb-6">
                        <label class="text-sm mb-2 inline-block" for="password">
                          Password
                        </label>
                        <input class="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 " id="password" type="password" >
                        
                      </div>

                      <div class="mb-6">
                        <label class="text-sm mb-2 inline-block" for="phone">
                          Phone
                        </label>
                        <input class="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 " id="password" type="text" >
                        
                      </div>

                      <div class="flex items-center justify-between">
                        <button class="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg " type="button">
                          Sign In
                        </button>
                      </div>
                    </form>
                    
                  </div>
        </div>
        </div>
    </main>
    </section>
</template>