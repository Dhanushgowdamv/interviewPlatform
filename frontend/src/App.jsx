import './App.css'
import { 
  SignInButton, 
  SignUpButton,
  SignOutButton, 
  UserButton,
  SignedOut,
  SignedIn
} from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1>Hi, this application</h1>

      <SignedOut>
        <SignInButton mode="modal">
  <button className="btn">Login</button>
</SignInButton>

        
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </>
  )
}

export default App
