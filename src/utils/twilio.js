import twilio from "twilio";
import dotenv from "dotenv";
import logger from "./logger.js";

dotenv.config();

const client = twilio(process.env.SID, process.env.TOKEN);

export async function sms ( body ) {
    
    try {
        
        const message = {
            body: body,
            from: process.env.SMS,
            to: "+541133107886",
        }

        const response = await client.messages.create(message);
        logger.info(response)

    } catch (error) { logger.error("Error sms: ", error); }
}

export async function whatsapp( body ) {
    
    try {
   
        const message = {
            body: body,
            from: "whatsapp:+14155238886",
            to: "whatsapp:+541133107886",
        }
   
        const response = await client.messages.create(message);
   
    } catch (error) { console.log(error); }
}

