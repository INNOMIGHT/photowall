import React, {Component} from 'react'

class List extends Component{
    render(){
    return(
        <ol>
            {this.props.tasks.map((task,index) => <li key={index}>{task}</li> )}
        </ol>
    )   
}
}

export default List