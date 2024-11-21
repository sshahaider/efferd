"use server";


import { ContactFormTypes } from "@/app/contact/types";
import { ContactTemplateAdmin, ContactTemplateUser } from "./templates";
import { Emailfrom, siteName } from "@/config";
import { render } from '@react-email/render';
import { createTransport } from "nodemailer"


const transport = createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});


// export async function sendStartProjectEmail(data: StartProjectFormTypes) {
//   const { name, email, phone, planId } = data;

//   let success: boolean = true;
//   await transport.sendMail({
//     to: "sshahaider@gmail.com",
//     from: Emailfrom,
//     subject: `Contact Us Message from: ${siteName}`,
//     text: `name: ${name}, email: ${email}, phone: ${phone}, planId: ${planId}`,
//     html: await render(<StartProjectTemplateAdmin {...data} />),
//   }, (err: any) => {
//     if (err) {
//       success = false;
//     }
//   })

//   await transport.sendMail({
//     to: email,
//     from: Emailfrom,
//     subject: `Thank You for Contacting Us!`,
//     html: await render(<StartProjectTemplateUser {...data} />),
//   })

//   return { success };
// }


export async function sendContactEmail(data: ContactFormTypes) {
  const { email, message } = data;

  let success: boolean = true;
  await transport.sendMail({
    to: "sshahaider@gmail.com",
    from: Emailfrom,
    subject: `Contact Us Message from: ${siteName}`,
    text: `email ${email}, message ${message}`,
    html: await render(<ContactTemplateAdmin {...data} />),
  }, (err: any) => {
    if (err) {
      success = false;
    }
  })

  await transport.sendMail({
    to: email,
    from: Emailfrom,
    subject: `Thank You for Contacting Us!`,
    text: `We have received your message and will get back to you as soon as possible.`,
    html: await render(<ContactTemplateUser />),
  })



  return { success };

}
