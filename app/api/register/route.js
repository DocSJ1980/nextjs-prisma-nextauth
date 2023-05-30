import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { name, email, password } = await request.json()
    if (!name || !email || !password) {
        return new NextResponse('Missing fields', { status: 400 })
    }
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        console.log("Reached: ", name, email, password)
        throw new Error('Email already exists')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    })
    return NextResponse.json(user)
}
