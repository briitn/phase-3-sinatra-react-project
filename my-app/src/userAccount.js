import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function UserAccount({username,personId, userInfo, setImage, picture }){
  const [testState, setTestState]=useState()
  const [emptyArray, setEmptyArray]=useState([])

console.log(username)
//return to homepage if user is somehow logged out
 

useEffect(()=>{
fetch(`http://localhost:9292/users/${personId}`)
.then((res) => res.json())
.then((res) => {
console.log(res)

setEmptyArray(res)

});

},[])
if (userInfo===undefined){return(<Redirect to ='/'/>)}



console.log(emptyArray)
     const mapEmptyArray = emptyArray?.map((item) => {
      return (
        
        <div className='column2' key={Math.random()}>
          <div className='card2'>
            <img src={item.link} alt='user pic' className='img2' />
            <button
              onClick={(e) => {
                const index=emptyArray.indexOf(item)
                console.log(index)
                fetch(`http://localhost:9292/pictures/${item.id}`, {
                  method: 'DELETE',
                })
                  .then((res) => res.json())
                  .then((res) => {
     
             console.log(res)
                    setImage(res);
                  setEmptyArray(res.filter(item=>{
                    return (item.user.username===username)}))
                  });
              }}
            >
              delete
            </button>
          </div>
        </div>
      );
    });
  
    return (
      <div className='userPage'>
        <h4>
          <img
            src={picture}
            alt='profile pic'
            width='120px'
            className='profilePic'
          />{' '}
          <p>{username}</p>
        </h4>
    
        <h3>All posts({emptyArray.length})</h3>
    
        <div className='image-grid'>{mapEmptyArray}</div>
      </div>
    );
    

}







export default UserAccount