import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import { useAuth0 } from '@auth0/auth0-react'

function Home () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <div>
          <h1 className='flex justify-center font-extrabold my-8 mt-20 text-2xl'>Safehouse Search Options:</h1>
          {ourUser?.house_id
            ? <Link to={`/house/manage/${ourUser.house_id}`}>MANAGE MY HOUSE</Link>
            : null
          }
          {ourUser?.isMasterAdmin
            ? <Link className='flex justify-center' to='/houses/add'>Add New House</Link>
            : null
          }
          <NorthIslandButton />
          <SouthIslandButton />
          <ViewAllButton />
          </div>
        </div>}
    </>
  )
}

export default Home
