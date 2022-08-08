const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig();

import bcrypt from 'bcryptjs';
import  { apiHandler } from '../../helper/api/apiHandler';
//const jwt = require('jsonwebtoken')

export default apiHandler(handler);

async function handler(req, res) {
    // if(req.method === 'POST') {
    //     return authenticate();
    // }
    // else {
    //     return res.status(405).end(`Method ${req.method} is not allowed.`)
    // }
    console.log("Inside auth")
    return req.method === 'POST' ? authenticate() : res.status(405).end(`Method ${req.method} is not allowed.`)

    async function authenticate() {
        console.log("Inside function")
        console.log(req.body)
        const data = JSON.parse(req.body);
        const user = await prisma.user.findUnique({
            where: {
                email: data.username,
            }
        })
        if(!user) {throw 'User does not exist'}
        if(!bcrypt.compareSync(data.password, user.password)) {throw 'Password incorrect.'}
        console.log("PASSWORD CORRECT!")
        return res.status(200).json({
            
        })
    }
}