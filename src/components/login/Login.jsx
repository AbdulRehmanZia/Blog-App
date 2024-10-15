import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../../features/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {authService} from '../../appwrite/auth'

function Login() {
    const navigate = useNavigate()
    const dipatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState()
    return (
        
    )
}

export default Login
