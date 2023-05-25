import { PrismaClient } from "@prisma/client"

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV === 'production') globalThis.prisma = client

export default client

// export default async function handler(req, res) {
//     const songs = await client.song.findMany({})
//     res.status(200).json(songs)
// }