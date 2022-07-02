import { Router } from "express";
import multer from "multer";

const storage= multer.diskStorage ( {
    destination: function ( req, file, cb ) {
        cb( null, "upload" )
    },
    filename: function ( req, file, cb ) {
        cb ( null, file.originalname )
    }
})

const router = Router ();
const upload = multer ( { storage } )		

router.post( "/upload", upload.single("avatar"), (req, res)=>{		// subida de archivo
    
    const file= req.file;
    
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    res.status(200).send ( { msg: "subido con exito" } );
})

router.get("/:file", async (req, res) => {
    const file = req.params.file;
    res.status(200).sendFile(file, { root: "./upload" });
})


export default router;
