import { createTransport } from "nodemailer";
import dotenv from "dotenv";
import logger from "./logger.js";

dotenv.config();

const transporterGmail = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL,
    },
});

export async function sendMailGmail( username, fullname, address, email, dni) {
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: ["mgroman96@gmail.com"],
        subject: "Nuevo Registro",
        text: `
            username: ${username},
            fullname: ${fullname},
            address: ${address},
            email: ${email},
            dni: ${dni},
        `,
    };

    try {
    
        const response = await transporterGmail.sendMail(mailOptions);
        logger.info(response);

    } catch (error) { console.log(error); }
}

export async function sendCartMail( username, email, carrito) {
    
    try {

        const mailOptions = {
            from: process.env.EMAIL,
            to: ["mgroman96@gmail.com"],
            subject: `Nuevo Pedido de ${username}, ${email}`,
            text: carrito,
        };
    
        const response = await transporterGmail.sendMail(mailOptions);
        logger.info(response);

    } catch (error) { console.log(error); }
}