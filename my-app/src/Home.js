
import { useHistory } from "react-router-dom"


function Home({userInfo, setId, setPassword,
setUsername, username, password, id, setFindUser, setPicture}){
 
function changeUser(e){
    setUsername(e.target.value)
   
}
const history=useHistory()

function changeSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/login",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username,
            password
        }
        )
    })
    .then((res) => res.json())
.then((res) => {
    if (res.hasOwnProperty('errors')){
        alert(res.errors)
    }
     else {   history.push('/pictures')
       setId(res.id)
    
       setPicture(res.profile_pic)
}

});}
   
//check if login ifo matches
function changePass(e){
    setPassword(e.target.value)
}






return (


    <div className='create'>
    <h1 className='cText'>Sign in</h1>
    <form onSubmit={changeSubmit} className='form'>
        <input type='text'
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={changeUser}
        />
     
        <input type='text'
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={changePass}/>

       <button className='submit' type="submit" >Submit</button>
         </form>

  <span>New here?</span>  <a href='./create'>Create an account</a>
   
    </div>

    
)}

export default Home