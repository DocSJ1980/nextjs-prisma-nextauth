import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/user'
export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <section>
      <h2>Home</h2>
      <h2>Server Side Rendered </h2>
      <pre>
        {JSON.stringify(session)}
      </pre>
      <h2>Client Side Rendered </h2>
      <User />
    </section>
  )
}
