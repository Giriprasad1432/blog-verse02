const sampledata=async ()=>{
    try{
        let response=await fetch("https://google.com")
        console.log(response)
    }
    catch(err){
        console.log("error accesing google"+err)
    }
}
sampledata()