import React, { Component } from 'react';
import events from "./events.json"



function Event(props) {

      return (
        <div>
          <h1>Events</h1>
          <div class="row">
    
            {
              events.map((item, i) => <div>
    
                <ul>
                  {
                  <li>
        
        
      
        
        <div class="col s12 m4">
          <div class="card small">
            <div class="card-image">
              <img src="images/sample-1.jpg" />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a onClick={console.log(i)}>This is a link</a>
            </div>
          </div>
        </div>
                
                  </li>
                  }
                </ul>
    
              </div>)
            }
          </div>
        </div>
     
      );
    };


   
  export default Event;


/*

class EventHandler extends Component{
  state={
      ShowMainEvents: true,
      index: 0,
      
    }
    
    eventToggleClickHandler = (ind) =>{
      this.setState({index: ind})
      this.setState((prevState)=>{
        return {ShowMainEvents: !prevState.ShowMainEvents}; // for opening the sidebar
      });
    };
    closeToggleClickHandler= ()=>{
      this.setState({ShowMainEvents: false}); 
    }

    render(){
*/

/*
 function IndiEvents(props){
        
   
   
       }
    
    
      
    
      let MianEvents; 
    if(this.state.ShowMainEvents){
      MianEvents=<Event eventClickHandler={this.eventToggleClickHandler}/>;
    }
    else{
      MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} ind={this.state.index}/>
    }
    
    return (
      <div className="app">

       
       {MianEvents}
      
      </div>
    );
    }
  }
  */
