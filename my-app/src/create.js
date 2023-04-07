import React from "react"



import { useHistory } from 'react-router-dom'
function Create({username, password, picture, setUsername, setPassword, setPicture}){

function changeUser(e){
    setUsername(e.target.value)
    
}

function changePicture(e){
setPicture(e.target.value)
}
function changePass(e){
    setPassword(e.target.value)
}
const history=useHistory()
 function SubmitFunc(e){
     e.preventDefault();
     e.target.textContent='Account succesfully created. Redirecting to sign in page...'
     fetch  ('http://localhost:9292/users', {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
             username:username,
             password:password,
             picture:picture?picture:"https://avatars.githubusercontent.com/u/35440139?v=4"
         })
     })
    
 setTimeout(() => {
   history.push('/')
 }, 1000); 
 }
//on submit send info to server and push user to sign in page after 1 second.

    return (
        <div className="create">
        <h1 className='cText'>Create Account</h1>
        <form className="form" onSubmit={SubmitFunc}>
            <input type='text'
            name="username"
            placeholder="Username"
            value={username}
            onChange={changeUser}
            />
         
            <input type='text'
            name="password"
            placeholder="Password"
            value={password}
            onChange={changePass}/>
               <input type='url'
            name="picture"
            placeholder="Profile picture"
            value={picture}
            onChange={changePicture}
           />

           <button className="submit">Submit</button>
             </form>
             <span><p>Already have an account?<a href="/">Sign in</a></p></span>
        </div>
    )
}

export default Create