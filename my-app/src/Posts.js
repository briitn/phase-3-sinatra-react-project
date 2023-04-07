import {useState, useEffect} from 'react'
import { Redirect, useHistory } from 'react-router-dom'

function Pictures({
  username, id, setPersonId,  personId,
image,setImage, setUserInfo, setUserStuff, setId, picture}){
console.log(id)
useEffect(()=>{
    fetch('http://localhost:9292/pictures')
   .then(r=>r.json())
    .then((res)=>setImage(res.reverse()))
  },[])
  
   
const [canUpload, setCanUpload]=useState(false)
 
    function changeImage(e){
   
        setUserPic(e.target.value)
  
    }
  
    
    const [count, setCount]=useState(0)
//for likes tracker

    
    const [userPic, setUserPic]=useState('')
  



const history=useHistory()
    function sendImage(e){

        e.preventDefault()
     
     fetch('http://localhost:9292/pictures',{
         method:"POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
            image:userPic,
         
            id:id}
         )
     } )
     .then(r=>r.json())
     .then((res)=>{
        console.log(res)
    setUserPic("")
        setImage([res, ...image])})
  
    
        
     
    }
  


 
    console.log(image)
  

    const mapImages= image.map(item=>{
        
  
        return (<div key={item.id} className='row'  >
            <div className='column'>
                <div className='card'>
           
            <span>    
                <div className='userProfile'> 
                 <img src={item.user?.profile_pic}  alt='profile pic' 
        className="profilePic"/>
            <span className='uploader' onClick={(e)=>{ 
                setPersonId(item.user_id)
                history.push('/userAccount')  
        }}> {item.user?.username}</span></div> 


                <img className='img' src={item.link} alt='user pic'/>
        
      <p className='likes'>likes:{item.likes}</p>
<button onClick={(e)=>{
       
           
      e.target.className='like'

        setCount(item.likes)
        e.target.textContent='♥'
       
    e.target.disabled=true
    fetch(`http://localhost:9292/posts/`,
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        
          likes: true,
           id:item.id}
        )
    })  .then(r=>r.json())
    .then((res)=>{
      
       setImage(res.reverse())})
 
  
 }} 
         >&#9825;

         </button>

        
        
         </span>
         
       
       
   
    
         </div>  </div> </div>)
    })

    if (username==='')return(<Redirect to = '/'/>)
    // if a user is somehow logged out, redirect to sign in page
    else  {return <div>
         
   
        
        <div><header>
           
            
             {!canUpload?  <div><span onClick={(e)=>{setCanUpload(true)}} id='add'>⊕</span> <span id='username' onClick={(e)=>{setPersonId(id) 
             history.push('/userAccount')}}> <b>{username}</b> <img src={picture} alt='user profile' className='profilePic'/></span> <span onClick={(e)=>{history.push('/')}}className='logout'>Logout</span></div>:
       <form id='pUpload' onSubmit={sendImage}>
            <p onClick={(e)=>{setCanUpload(false)}} id='x'>x</p>
            <input id='pInp'
            type='url'
      value={userPic}
            onChange={changeImage}
            placeholder='upload image'
           />
           <button id='pSub'>Submit</button>
        </form>} </header>
         
            {mapImages}
        </div>
  
      
    
    
    
    </div>}
}




export default Pictures