import formidable from "formidable"
import fs from "fs"
import path from "path"

export const config = {
  api: {
    bodyParser:false
  }
}

export default function handler(req,res){

  const form = new formidable.IncomingForm({
    uploadDir:"./public",
    keepExtensions:true
  })

  form.parse(req,(err,fields,files)=>{

    const file = files.file

    const filename = path.basename(file.filepath)

    res.status(200).json({
      url:`/${filename}`
    })

  })

}
