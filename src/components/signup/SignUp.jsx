import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../../features/authSlice";
import Btn from "../button/Btn";
import Input from "../input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { service } from "../../appwrite/auth";
const authService = service;

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const createUserAcc = async ()=>{
    setError("")
    try {
        
    } catch (error) {
        setError(error.message)
    }
  }
  return <h1>Signup</h1>;
}

export default SignUp;
