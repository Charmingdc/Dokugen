import { LiaAngleRightSolid } from "react-icons/lia";
import { SlCloudDownload } from "react-icons/sl";


const Home = () => {
 return (
   <section className='home-section'>
     <div className='brief-info'>
       <h1> Dokugen </h1>
       <p>
         Your one stop CLI tool to automatically generate high-quality README files for your projects. Spend less time on documentation and more time building! 🚀
       </p>
       
       <button>
         Download Dokugen 
         <SlCloudDownload />
       </button>
       
       <p>
        <strong> Dokugen </strong> can also be installed via
         <a href='/' target='_blank'>
         <strong>
           version managers like npm.
         </strong>
        </a>
       </p>
     </div>
     
     <div className='home-codebox'>
     </div>
   </section>
 )
}

export default Home;