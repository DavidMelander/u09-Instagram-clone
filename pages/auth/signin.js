import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import React from 'react'
import Header from "../../components/Header"

function signIn({ providers }) {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <img className="w-80" src="/./MyImages/Instagram_logo.svg.png" alt=""/>
      <p className="font-xs italic">
        This is not a real app, it's fake app for educational purposes
      </p>
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="p-3 bg-blue-400 text-white font-semibold rounded-lg" onClick={() => 
              SignIntoProvider (provider.id, {callbackUrl: '/'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props:{
            providers
        }
    }
}

export default signIn
