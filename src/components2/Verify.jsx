
const Verify = () =>{
    return(
        <div>
     <div className="lg:px-28 xs:px-6">
     <p  className="lg:text-center text-xl">
     "Validate your achievements effortlessly! Welcome to our verification portal. Enter your unique certificate ID below to confirm your accomplishment. Your certificate symbolizes your journey's milestones, and this platform ensures their integrity. Join us in celebrating your success as we validate your achievements. Input your ID now to authenticate your accomplishments!"
     </p>
     </div>
       <div className="justfiy-center mt-10 text-center h-[100vh] space-y-8">
       
        <p className="text-5xl text-orange-400">
            Unique certificate ID:
        </p>
        <p className="text-lg ">
         By enter your Certificate ID below to confirm your achievement!
        </p>
      <input className="border-2 border-black rounded"></input><br/>
      <button type="button" class="text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500  ">Submit</button>

       </div>   
       </div>
    )


}
export default Verify;