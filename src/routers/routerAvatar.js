import { Router } from "express";
import multer from "multer";

const storage= multer.diskStorage ( {
    destination: function ( req, file, cb ) {
        cb( null, "upload" )
    },
    filename: function ( req, file, cb ) {
        cb ( null, file.originalname = req.params.username )
    }
})

const router = Router ();
const upload = multer ( { storage } )		

router.post( "/upload/:username", upload.single("myFile"), ( req, res, next )=>{		// subida de archivo
    
    const file= req.file;

    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    res.status(200).send ( { msg: "subido con exito" } );
})

export default router;