import React, {Component} from 'react';



class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = (event.target.elements.link.value)
        const imageDesc = (event.target.elements.desc.value)
        const post = {
            id : Number(new Date()),
            imageLink: imageLink,
            description: imageDesc,
        }
        this.props.addPost(post)
        this.props.onHistory.push('/')
    }

    render(){
        return (
            <div>
               
                <div className='form'>
                    <form className='linkform' onSubmit={this.handleSubmit}>
                    <input className='inputlink' type='text' placeholder='Link' name='link'/>
                    <input className='inputlink' type='text' placeholder='Description' name='desc'/>
                    <button>POST</button>
                </form>
                </div>
            </div>
            
        )
    }
}

export default AddPhoto