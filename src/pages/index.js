import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <h1>Login</h1>
        <form action="api/test" method={"post"} >
          Enter Your Name : <input type="text" name={"name"} placeholder={"name"}/><br/><br/>
          Enter Your Email : <input type="email" name={"email"} placeholder={"email"}/><br/><br/>
            <input type={"submit"}/>
        </form>
      </>
  )
}
