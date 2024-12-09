import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Components/Common/Button/Button';

const Contact: React.FC = () => {

    const [Success, setSuccess] = useState("")

    const formRef = useRef<HTMLFormElement | any>(null); 

    const PersonSchema = yup.object().shape({
        Name: yup.string().required("Name is required"),
        EmailAddress: yup.string().email("Email format is not valid").required("Valid email address is required"),
        PhoneNumber: yup.string(),
        Subject: yup.string().required("Subject is required"),
        Message: yup.string().required("Message is required")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver : yupResolver(PersonSchema)
    });


    const onSubmit = () => {
        emailjs.sendForm('service_p1q43qr', 'template_fa10n1a', formRef.current, 'PnplNSesRddqlO1I1')
        setSuccess("Message successfully sent.")
    }

return (
    <div>
        <h2 className='font-bold mb-10 text-center text-4xl'>Get In Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center justify-center'>
            <div className='flex flex-col gap-2'>
                <input type="text" id="Name" placeholder='Enter Full Name/Organisation'  
                {...register("Name")} className='bg-inherit pb-2 border-b border-Grey outline-none text-lg w-80 sm:w-tablet lg:w-contact' />
                <span className="text-red-700 text-center">{errors.Name?.message}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <input type="text" id="EmailAddress" placeholder='Enter Email Address' {...register("EmailAddress")} className='bg-inherit pb-2 border-b border-Grey outline-none text-lg w-80 sm:w-tablet lg:w-contact' />
                <span className="text-red-700 text-center">{errors.EmailAddress?.message}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <input type="text" id="PhoneNumber" placeholder='Enter Phone Number'  
                {...register("PhoneNumber")} className='bg-inherit pb-2 border-b border-Grey outline-none text-lg w-80 sm:w-tablet lg:w-contact' />
            </div>
            <div className='flex flex-col gap-2'>
                <input type="text" id="Subject" placeholder='Enter Subject'  
                {...register("Subject")} className='bg-inherit pb-2 border-b border-Grey outline-none text-lg w-80 sm:w-tablet lg:w-contact' />
                <span className="text-red-700 text-center">{errors.Subject?.message}</span>
            </div>
            <textarea placeholder='Enter Message' id="Message" {...register("Message")} className='border-b border-black h-40 mt-2 outline-none p-3 rounded-sm text-black w-80 sm:w-tablet lg:w-contact'></textarea>
            <span className="text-red-700 text-center">{errors.Message?.message}</span>
            <p className='Success' >{Success}</p>
            <Button
                ID='Button'
                onClick={handleSubmit(onSubmit)}
                ButtonText='Send Message'
                ButtonStyle='py-1 rounded text-center w-32'
            />
        </form>
    </div>
)
}

export default Contact