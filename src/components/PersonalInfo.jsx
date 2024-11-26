import {useState} from 'react'



const PersonalInfo = () => {
    const [fullName, setFullName]= useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [linkedin, setLinkedin]= useState(null);
    const [github, setGithub]= useState(null)
   
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleDownlaod=()=>{
        window.print()
    }
  return (
    <>
    <form className="w-1/2 min-h-[200px] rounded mx-auto my-10 dark:bg-blue-400 dark:text-white"
    onSubmit={handleSubmit}>
        <fieldset className="w-full flex flex-col">
            <legend className='text-2xl'>
            Enter your Personal Info
            </legend>
           
            <input  type="text" placeholder="Enter your Name" name="fullName"
            value={fullName} onChange={(e)=>setFullName(e.target.value)}
            className='p-2 border-b-2'/>
    <input type="email" placeholder="Enter Your Email" name="email" 
    value={email} onChange={(e)=>setEmail(e.target.value)}
    className='p-2 border-b-2' />
    <input type="tel" placeholder="Enter your Mobile Number" name="phone"
    value={phone} onChange={(e)=>setPhone(e.target.value)}
    className='p-2 border-b-2'/>
    <input type="url" placeholder="Enter your LinkedIn  URL" name="linkedin"
    value={linkedin} onChange={(e)=>setLinkedin(e.target.value)}
    className='p-2 border-b-2'/>  
    <input type="url" placeholder="Enter your GitHub  URL" name="github"
    value={github} onChange={(e)=>setGithub(e.target.value)}
    className='p-2 border-b-2'/>
        </fieldset>
        
             
    </form>

    
    <div className='result w-1/2 min-h-[300px] my-10 rounded 
    mx-auto dark:bg-slate-600  dark:text-white  p-8'>
    
        <h1 className='text-3xl'> Name: {fullName}</h1>
        <div className='basic '  >
            <p className=''> Email: {email}</p>
            <p className=''> Mobile: {phone}</p>

        </div>
        <div className="social text-xl">Social: {linkedin}</div>
        <div className="tech text-xl"> Tech: {github}</div>
        {
            fullName && email && phone && linkedin && github && <button onClick={handleDownlaod} className='mt-4 dark:bg-white dark:text-blue-700 py-1 px-2 rounded-lg bg-slate-200'>Download </button>

        }
            </div>
    </>
  )
}

export default PersonalInfo