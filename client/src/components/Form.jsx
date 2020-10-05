import React, { Component } from 'react'
import '../App.css'
import './Form.css'
import image from './image.jpg';

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    quantity: '',
    calculated: '',
    ccNum: '',
   exp: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, calculated, ccNum, exp} = this.state;
    return (
      <div className="create-main-container">
        
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleMagicSubmit(this.state);
        this.props.history.push('/magics');
      }}>
          <h3>Magic Potion</h3>
          <div className="image-wrap">
            <img src={image} />
            <p>description</p>

            <div className="image-wrap2">
              <input className="create-edit-input"
               placeholder="Quantity"
          id="quantity"
          type="text"
          name="quantity"
          value={quantity}
          onChange={this.handleChange}
        />
        
       
            <input className="create-edit-input"
               placeholder="Calculated"
          id="calculated"
          type="text"
          name="calculated"
          value={calculated}
          onChange={this.handleChange}
              />
            </div>
          </div>
          

          <div className="create-edit-container">

            <input className="create-edit-input"
               placeholder="First Name"
          id="firstName"
          type="text"
          name="lastName"
          value={firstName}
          onChange={this.handleChange}
        />

     
            <input className="create-edit-input"
              placeholder="Surname"
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="email"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="Phone"
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />

        <div className="description">
        <p className="description">Address</p>
      
           <input className="create-edit-input"
             placeholder="Street 1"
        
          id="street1"
          type="text"
          name="street1"
          value={street1}
          onChange={this.handleChange}
        />

           <input className="create-edit-input"
             placeholder="Street 2"
        
          id="street2"
          type="text"
          name="street2"
          value={street2}
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="City"
        
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="State"
        
          id="state"
          type="text"
          name="state"
          value={state}
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
              placeholder="Zip"
        
          id="zip"
          type="text"
          name="zip"
          value={zip}
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
          value={ccNum}
          onChange={this.handleChange}
        />

            <input className="create-edit-input"
               placeholder="Year of expiration"
        
          id="exp"
          type="date"
          name="exp"
          value={exp}
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


