"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState:{errors}}= useForm<FieldValues>({
    defaultValues:{
        email: "",
        password:""
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);
    
  }
  return (
    <>
      <Heading title="Sign in to E-shop" />
      <Button outline label="Continue with Google" icon={AiOutlineGoogle} 
      onClick={()=>{}}/>


      <hr className="bg-slate-300 w-full h-px" />
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
      <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} type="password" required/>
      <Button label={isLoading ? "Loading":"Login"} onClick={handleSubmit(onSubmit)}/>
    
      <p>Do not have an account?{" "}
      <Link className="underline" href="/register">Sign up</Link></p>
    </>
  );
};

export default LoginForm;
