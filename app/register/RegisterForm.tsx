"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState:{errors}}= useForm<FieldValues>({
    defaultValues:{
        name: "",
        email: "",
        password:""
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);
    
  }
  return (
    <>
      <Heading title="Sign up for E-shop" />
      <Button outline label="Sign up with Google" icon={AiOutlineGoogle} 
      onClick={()=>{}}/>


      <hr className="bg-slate-300 w-full h-px" />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
      <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} type="password" required/>
      <Button label={isLoading ? "Loading":"Sign up"} onClick={handleSubmit(onSubmit)}/>
    
      <p>Already have an account?{" "}
      <Link className="underline" href="/login">Log in</Link></p>
    </>
  );
};

export default RegisterForm;
