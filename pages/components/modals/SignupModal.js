import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";

export default function SignupModal() {
  //const [isOpen, setIsOpen] = useState(true)
  //const handleClose = () => setIsOpen(false)
  //const handleOpen = () => setIsOpen(true)
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: `/assets/profilePicture/pfp${Math.ceil(Math.random() * 6)}.jpg`
    })
  }
  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest1111000@gmail.com", "123456")
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser)
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });
    return unsubscribe;
  });
  return (
    <>
      <button
        onClick={() => dispatch(openSignupModal())}
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-600 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button 
            onClick={handleGuestSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your account</h1>
            <input
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"text"}
            ></input>
            <input
              placeholder="Email"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
            ></input>
            <input
              placeholder="Password"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
            ></input>
            <button
              onClick={handleSignUp}
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md"
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
