import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../Utils/userSlice'
import { auth } from '../firebaseConfig'
import { Netflix_logo } from '../Utils/constants'

const Header = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const  handleSignOut = ()=>{
    signOut(auth).then(()=>{

    }).catch((error)=>{
      navigate("/error")
    })
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {          
          const {uid,email,displayName} = user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
          }))
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      });
      return ()=> unsubscribe();
},[])

  const user = useSelector((store)=>store.user)
  // console.log("called from header-"+user)
  return (
    <div className='absolute flex justify-between w-full z-10 bg-gradient-to-b from-black'>
      <img className='w-44 mx-16 py-2' src={Netflix_logo} alt="" />

      {user && (<div className='flex p-2 h-12 mt-5'>
        <img className='w-8 ' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
        <button onClick={handleSignOut} className='bg-gray-500 rounded-lg ml-1 px-2 text-white'>SignOut</button>
      </div>)}
    </div>
  )
}

export default Header
