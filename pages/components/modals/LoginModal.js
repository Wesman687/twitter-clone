import { auth } from '@/firebase';
import { closeLoginModal, openLoginModal, openSignupModal } from '@/redux/modalSlice';
import Modal from '@mui/material/Modal'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginModal() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isOpen = useSelector(state => state.modals.loginModalOpen)
    const dispatch = useDispatch()
    async function handleSignIn(){
        await signInWithEmailAndPassword(auth, email, password)
    }
    async function handleGuestSignIn(){
        await signInWithEmailAndPassword(auth, "guest1111000@gmail.com", "123456")
    }
  return (
    <>
      <button 
      onClick={() => dispatch(openLoginModal())}
      className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7] hover:text-black">
        Log In
      </button>
      <Modal
      open={isOpen}
      onClose={()=> dispatch(closeLoginModal())}
      className='flex justify-center items-center'
      >
        <div className='w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px] border border-gray-600 rounded-lg flex justify-center'>
            <div className='w-[90%] mt-8 flex flex-col'>
                    <h1 className='mt-4 font-bold text-4xl'>Sign in to your account</h1>
                    <input
                    placeholder='Email'
                    onChange={(e)=> setEmail(e.target.value)}
                    className='h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6'
                    type={"email"}></input>
                    <input 
                    placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                    className='h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6'
                    type={"password"}></input>
                    <button 
                    onClick={handleSignIn}
                    className='bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md'>
                        Sign in</button>
                        
                    <h1 className='text-center mt-8 font-bold text-lg'>or</h1>
                    <button 
                    onClick={handleGuestSignIn}
                    className='bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md mb-10'>
                        Sign in as Guest</button>

            </div>
        </div>
      </Modal>
    </>
  );
}
