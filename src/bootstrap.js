import React from 'react'

function bootstrap() {
  return (
    <section  className='bg-bisque'>
    <div className="container">
    <div className="row ">
    <div className="col-lg-3 ">
    <div className='left text-center'>
    <img src="http://localhost/midas_pms/assets/images/miniicon.png" />
    </div>
      
     
   </div>

   <div className='col-lg-7  text-center'> 
   <div className="menu-bar ">
          <ul className='d-flex align-items-center justify-content-between'>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>  


          </ul>
        </div>
        
   </div>

   <div className='col-lg-2 right text-center '> 
   icons </div>
    
    </div>
   </div>
   </section>
   
  )
}



export default bootstrap;