import React from 'react'

const Error404 = () => {
  return (
    <>

{/* <!-- This is an example component --> */}
<div className="h-screen w-screen bg-gray-100 flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          
    </div>
      <div className="max-w-lg">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" ></svg>
    </div>
    
  </div>
</div>
    </>
  )
}

export default Error404