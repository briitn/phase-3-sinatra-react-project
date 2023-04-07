
import Create from './create'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Pictures from './Posts';

import UserAccount from './userAccount';
function App() {
  const [userInfo, setUserInfo]=useState()
 


  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')

 const [id, setId]=useState('')


 


      
 const [userPic, setUserPic]=useState('')


 const [personId, setPersonId]=useState('')
 const [picture, setPicture]=useState('')
 const [image, setImage]=useState([])


 useEffect(() => {
  fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((info) => {
    
      
      setUserInfo(info)

     } );
}, [image]);





//fetch all pictures and reverse it to show latest posts first

 return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/'>
     <Home userInfo={userInfo} username={username} 
     password={password} id={id} setId={setId} 
     personId={personId}   setPicture={setPicture} 
     setPassword={setPassword} setUsername={setUsername}
     setUserInfo={setUserInfo}  />
     </Route>
     <Route exact path='/create'>
       <Create  username={username} 
     password={password}  picture={picture}
        setPassword={setPassword} setUsername={setUsername}
        setPicture={setPicture}/>
     </Route>
     <Route exact path='/pictures'>
       <Pictures setPicture={setPicture} 
       image={image}
       setUserInfo={setUserInfo}
       userInfo={userInfo}
       setImage={setImage}
       username={username} 
       password={password} id={id} setId={setId} 
       setPassword={setPassword} setUsername={setUsername} setPersonId={setPersonId}
        personId={personId}
  setUserPic={setUserPic}  picture={picture}
      />
     </Route>
   <Route exact path='/userAccount'>
     <UserAccount  
   setUserInfo={setUserInfo} username={username}   personId={personId} userInfo={userInfo}
   setImage={setImage} picture={picture}/>
   </Route>

 
   </Switch>
   </BrowserRouter>
)


}
export default App;
