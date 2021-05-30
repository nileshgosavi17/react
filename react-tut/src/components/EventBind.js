import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EventBind extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            message: 'Hello'
       }
    //    this.eventHandler=this.eventHandler.bind(this)
   }
    // eventHandler(){
    //     this.setState({
    //         message:'goodBye'
    //     })
    // }
    eventHandler =()=>{
        this.setState({
            message:"BBYe"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.eventHandler.bind(this)}>Click</button>*/}
                <button onClick={this.eventHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
