import Head from 'next/head'
import Login from '../components/Login'
import {useMoralis} from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'
export default function Home() {
  const {isAuthenticated } = useMoralis()
   if (!isAuthenticated) return <Login/>
  return (
    <div className="h-screen   overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 ">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen  ">
        <div className="max-w-screen-2xl mx-auto">
          <Header/>
          <Messages/>
        </div>
      </div>
    </div>
  )
}
