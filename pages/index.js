import { useState } from "react";

export default function Home() {

  const [link,setLink] = useState("")

  async function upload(e){
    e.preventDefault()

    const file = e.target.file.files[0]

    const data = new FormData()
    data.append("file",file)

    const res = await fetch("/api/upload",{
      method:"POST",
      body:data
    })

    const json = await res.json()

    setLink(json.url)
  }

  return (
    <div style={{textAlign:"center",marginTop:"100px",fontFamily:"Arial"}}>

      <h2>📤 Upload Image</h2>

      <form onSubmit={upload}>
        <input type="file" name="file" required />
        <br/><br/>
        <button type="submit">Upload</button>
      </form>

      {link && (
        <div style={{marginTop:"20px"}}>
          <h3>✅ Share this link</h3>
          <a href={link} target="_blank">{link}</a>
        </div>
      )}

    </div>
  )
}
