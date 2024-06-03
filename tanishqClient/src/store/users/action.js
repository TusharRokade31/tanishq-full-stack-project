import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "loginUser",
    async (loginData,{rejectWithValue})=>{
        try {
            const {data} = await axios.post(
                `http://localhost:8001/users/login`,
                loginData
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
) 


export const signUp = createAsyncThunk(
    "signUp",
    async (signUpData,{rejectWithValue})=>{
        try {
            const {data} = await axios.post(
                `http://localhost:8001/users/sign-up`,
                signUpData
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const updateUser = createAsyncThunk(
    "updateUser",
    async({values, ID},{rejectWithValue})=>{
        try {
            const { data } = await axios.put(
              `http://localhost:8001/users/update-user/${ID}`,
              values
            );
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
    }
  )

export const getUser = createAsyncThunk(
    "getUser",
    async (userid,{rejectWithValue})=>{
        try {
            const {data} = await axios.get(
                `http://localhost:8001/users/get-user/${userid}`
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getUsers = createAsyncThunk(
    "getUsers",
    async (arg,{rejectWithValue})=>{
        try {
            const {data} = await axios.get(
                `http://localhost:8001/users/get-users`
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const sendOtp = createAsyncThunk(
    "SendOtp",
    async (sendEmail,{rejectWithValue})=>{
        try {
            const {data} = await axios.post(
                `http://localhost:8001/otp/send-otp`,
                {email:sendEmail}
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const LoginOtp = createAsyncThunk(
    "loginotp",
    async (emailOtp,{rejectWithValue})=>{
        try {
            const {data} = await axios.post(
                `http://localhost:8001/otp/otp-login`,
                emailOtp
            )

            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (userID,{rejectWithValue})=>{
        try {
            const {data} = await axios.delete(
                `http://localhost:8001/users/delete-user/${userID}`
            )

            return userID
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)