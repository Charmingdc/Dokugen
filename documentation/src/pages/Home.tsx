import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import copy from "clipboard-copy";
  
import CodeSnippet from '../components/helpers/CodeSnippet.tsx';
import { SlCloudDownload } from "react-icons/sl";
import { IoCopyOutline } from "react-icons/io5";


const Home = () => {
 const [currentTab, setCurrentTab] = useState<string>('installing');
 const [copied, setCopied] = useState<boolean>(false);
 const navigate = useNavigate();
 
 let installCode: string;
 if (currentTab === 'installing') {
  installCode = `
  # install dokugen from npm or other registry
  # make sure to install globally when installing dokugen using the -g flag
 
  npm install -g dokugen
 `
 } else {
  installCode = `
   # navigate to your project directory
   cd "my project"
   
   # run the command
   dokugen generate
   
   # you will be prompted for certain configurations
  `
 }
 
 const handleCopy = (): void => {
  copy(installCode)
   .then(() => {
    setCopied(true); // update copy state
    
    setTimeout(() => {
     setCopied(false);
    }, 2000); // reset copy state after 2s
   })
   .catch(err => {
     console.error("Copy failed:", err)
   });
 }
 
 return (
   <section className='home-section'>
     <div className='brief-info'>
       <h1> Dokugen </h1>
       <p>
         Your one stop CLI tool to automatically generate high-quality README files for your projects. Spend less time on documentation and more time building! 🚀
       </p>
       
       <button onClick={() => navigate('/download')}>
         Download Dokugen 
         <SlCloudDownload />
       </button>
       
       <p>
        <strong> Dokugen </strong> can also be installed via <a href='https://www.npmjs.com/package/dokugen' target='_blank'><strong>version managers like npm.</strong></a>
       </p>
     </div>
     
     <div className='home-code-wrapper'>
      <div className='home-code-wrapper-tabs'>
       <button 
        onClick={() => setCurrentTab('installing')}
        style={{borderBottom: currentTab === 'installing' ? '0.2rem solid rgb(64, 13, 200)' : 'none'}}> 
         Installing 
       </button>
       
       <button 
        onClick={() => setCurrentTab('usage')}
        style={{borderBottom: currentTab === 'usage' ? '0.2rem solid rgb(64, 13, 200)' : 'none'}}> 
         Usage 
       </button>
      </div>
      
      <div className='home-codebox'>
        <CodeSnippet 
          lang='bash'
          code={installCode} />
      </div>
      
      { copied ? (
        <button className='home-copy-button'>
         Copied to clipboard
        </button>
       ) : (
        <button 
         onClick={handleCopy}
         className='home-copy-button'>
          Copy to clipboard
          <IoCopyOutline />
        </button>
      )}
     </div>
   </section>
 )
}

export default Home;