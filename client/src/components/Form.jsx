import React, { Component } from 'react'
import '../App.css'
import './Form.css'

import image from './image.jpg';

export default class Form extends Component {
  constructor() {
    super();
    this.handleMagicSubmit = this.handleMagicSubmit.bind(this);
  }

  handleMagicSubmit(event) {
    event.preventDefault();
    event.target.reset();

    console.log(event.target)
    console.log(event)
    const data = new FormData(event.target);

    console.log(data);
    
    // let str = ;
    // if () {
    //   str = 'api/v1/magics/' + id
    // }
    fetch('/api/v1', {
      method: 'post',
      body: data
    });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    
    return (
      <div className="create-main-container">
        
      <form className="create-form" onSubmit={this.handleMagicSubmit.bind(this)}>
          <h3>Magic Potion</h3>
          <div className="image-wrap">
            <img src={image} alt="potion"/>
            

            <div className="image-wrap2">
              <input className="create-edit-input"
               placeholder="Quantity"
          id="quantity"
          type="text"
          name="quantity"
          
          onChange={this.handleChange}
        />
        
       
            <input className="create-edit-input"
               placeholder="0.00"
          id="calculated"
          type="value"
          name="calculated"
          
          onChange={this.handleChange}
              />
            </div>
          </div>
          

          <div className="create-edit-container">

            <input className="create-edit-input"
               placeholder="First Name"
          id="firstName"
          type="text"
          name="firstName"
          
          onChange={this.handleChange}
        />

     
            <input className="create-edit-input"
              placeholder="Surname"
          id="lastName"
          type="text"
          name="lastName"
         
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="email"
          id="email"
          type="text"
          name="email"
          
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="Phone"
          id="phone"
          type="text"
          name="phone"
          
          onChange={this.handleChange}
        />

        <div className="description">
        <p className="description">Address</p>
      
           <input className="create-edit-input"
             placeholder="Street 1"
        
          id="street1"
          type="text"
          name="street1"
          
          onChange={this.handleChange}
        />

           <input className="create-edit-input"
             placeholder="Street 2"
        
          id="street2"
          type="text"
          name="street2"
          
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="City"
        
          id="city"
          type="text"
          name="city"
          
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="State"
        
          id="state"
          type="text"
          name="state"
          
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="Zip"
        
          id="zip"
          type="text"
          name="zip"
          
          onChange={this.handleChange}
        />
        </div>
            
        <div className="description">
        <p className="description">Payment</p>
      
            <input className="create-edit-input"
              placeholder="Credit card number"
        
          id="ccNum"
          type="text"
          name="ccNum"
          
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
               placeholder="Year of expiration"
        
          id="exp"
          type="date"
          name="exp"
          
          onChange={this.handleChange}
        />


        </div>
      
            
            
            <button className="button">Submit</button>
          </div>
          

        </form>
      </div>
    )
  }
}


