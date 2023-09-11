import React from 'react'

//importing user button from clerk
import{UserButton} from '@clerk/clerk-react'
//importing useUser from clerk
import { useUser } from "@clerk/clerk-react";


const Dashboard = () => {

  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <>
      <h1>Dashboard page</h1>
      <UserButton />

      <div><h3>Hello {user.fullName}!</h3></div>
    </>
  )
}

export default Dashboard