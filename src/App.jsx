import { useState } from "react";
import Api from "./Api";



function App() {
  const [data, setData] = useState("");
  const [url,setUrl]=useState("");
  const [thumb,setThumb]=useState('');
  const [title,setTitle]=useState('')


  const formHandle=async(e)=>{
    e.preventDefault();

    try {
      const response= await Api(url);
      setData(response.data[0].urls[0].url);
      setThumb(response.data[0].pictureUrl);
      setTitle(response.title)
      
    } catch (error) {
      console.log(error);
      
    }
    console.log(title);
    // console.log(data);
// console.log(url);
// console.log(thumb)
  }

return(
  <div className="flex flex-col items-center justify-center h-screen 	">
    <h1 className="text-center font-bold text-4xl capitalize ">Download videos from <b className="text-[#EC2422]">youtube</b> </h1>
    
    <div className="text-center text-[#8888] my-5">
    <span className=" text-base font-medium ">On <b className="text-[#000]">WilTube</b> you can download long videos, shorts and even gigantic <br /> playlists  in <b className="text-[#000]">just one click.</b></span>
    </div>

<div   className="flex justify-center w-4/4	text-center m-0">
<form onSubmit={formHandle}
>
      <input type="url" value={url} 
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-sky-500 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
      placeholder="Paste the url of the video, shorts"
      onChange={e=>setUrl(e.target.value) 
       
      } />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5" type="submit">enter</button>

</form>
 
</div>
<a href={data} className="text-center text-xl">click me for download</a>
<img src={thumb} alt="" />



<p className="">created by <a href="https://github.com/shahariar270" className="text-red-600 text-[18px]">shahariar270</a></p>

  </div>

)
}

export default App
