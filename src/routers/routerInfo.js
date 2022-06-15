import { Router } from "express"
import minimist from "minimist";
import os from "os";

const router = Router();

router.get("/", ( req, res ) => {
    
    const argvi = minimist(process.argv.slice(2))
    
    res.render("index",{
        argumentos: JSON.stringify(argvi),
        path: process.cwd(),
        so: process.platform,
        pid: process.pid,
        version: process.version,
        folder: process.execPath,
        memory: process.memoryUsage().rss,
        procesadores: os.cpus().lenght 
    })
})

export default router;