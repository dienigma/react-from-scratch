import React from 'react'
import ReactDOM from 'react-dom'

// Component
const array = ["Chinmay","Afzal","Mayank","Nakul"]

const List = (props)=>{
  return (
    <div>
      <ul>
        {props.names.map(name => <li>{name}</li>)} 
      </ul>
    </div>
  )
}


class App extends React.Component{
  render(){
    return(
      <div>
      <List names = {array}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))