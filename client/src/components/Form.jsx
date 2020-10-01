import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      firstName: '',
      secondName: '',
      email: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      ccNum: '',
      exp: '',
      quantity: '',
      amount: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (evt) {      
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
    <div class="container">
        <form class="form">
          
            
        <div class="row">
        
          <label for="fname"></label>
       
         <div class="inputs" id="fname">
            <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange} />
            <input type="text" name="secondName" placeholder="Last name" onChange={this.handleChange} />
          </div>
          </div>
          
          <div class="row">
            
              <label for="email"></label>
         
            
              <input type="text" id="email" name="email" placeholder="Your email" onChange={this.handleChange} />
           
          </div>
          
          <div class="row">
            
              <label for="address"></label>
            
            <div  id="address">
            <input type="text" class="ad1" name="street1" placeholder=" Address line 1" onChange={this.handleChange} />
            <input type="text" class="ad2" name="street2" placeholder="Addrees line 2" onChange={this.handleChange} />
            <input type="text"  name="city" placeholder="City" onChange={this.handleChange} />
            <input type="text"  name="state" placeholder="State" onChange={this.handleChange} />
            <input type="text"  name="zip" placeholder="Zip" onChange={this.handleChange} />
            </div>
          </div>
          
          <div class="row">
            
              <label for="phone"></label>
            
            
              <input type="tel" id="phone" name="phone" placeholder="Phone #" onChange={this.handleChange} />
            
          </div>

          <div class="row">
            
              <label for="payment"></label>
            
            <div id="payment">
              <input type="text" class="inputs" name="ccNum" placeholder="Card #" onChange={this.handleChange} />
            <input type="date" class="inputs" name="exp" placeholder="Card exp date" onChange={this.handleChange} />
            </div>
          </div>

          <div class="row">
            
              <label for="quantity"></label>
            
            
              <input type="text" class="inputs" id="quantity" name="quantity" placeholder="0"onChange={this.handleChange} />
           
          </div>

          <div class="row">
            
              <label for="amount"></label>
            
            
              <input type="text" class="inputs" id="amount" name="amount" placeholder="0.0" onChange={this.handleChange}/>
            
          </div>
          
          <div class="row"><button type="submit">Submit</button></div>
          
          
        </form>
     </div>
    );
  }
}
export default Form;
