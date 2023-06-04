'use client'
import { useSession } from 'next-auth/react'

export default function User() {
    const { data: session } = useSession()

    // Accessing user data from session
    const user = session?.user
    const userName = user?.name
    const userEmail = user?.email
    // ... access other user properties

    return (
        <div>
            <p>Name: {userName}</p>
            <p>Email: {userEmail}</p>
            {/* Render other user information */}
        </div>
    )
}
