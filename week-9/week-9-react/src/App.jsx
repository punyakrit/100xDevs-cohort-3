import React from 'react'

function App() {
  return (
    <div style={{backgroundColor :"purple" , height:"100vh", display:"flex" , alignItems:"center"  , justifyContent:"center"}}>
      <div >

      <PostComp/>
      <PostComp/>
      <PostComp/>
      <PostComp/>
      </div>


    </div>
  )
}

function PostComp(){
  return <div style={{backgroundColor : "red" , borderRadius : 10 , height : 20 , fontSize:20 , padding : 5}}>
    Hi there
  </div>
}

export default App
