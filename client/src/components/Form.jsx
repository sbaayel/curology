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
        <form>
        <div class="row">
        <div class="form">
          <label for="fname">
              Full name
          </label>
         </div>
         <div class="inputs" id="fname">
            <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange} />
            <input type="text" name="secondName" placeholder="Last name" onChange={this.handleChange} />
          </div>
          </div>
          
          <div class="row">
            <div class="form">
              <label for="email">Email</label>
           </div>
            <div class="inputs">
              <input type="text" id="email" name="email" placeholder="Your email" onChange={this.handleChange} />
           </div>
          </div>
          
          <div class="row">
            <div class="form">
              <label for="address">Address</label>
            </div>
            <div class="inputs" id="address">
            <input type="text" name="street1" placeholder=" Address line 1" onChange={this.handleChange} />
            <input type="text" name="street2" placeholder="Addrees line 2" onChange={this.handleChange} />
            <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
            <input type="text" name="state" placeholder="State" onChange={this.handleChange} />
            <input type="text" name="zip" placeholder="Zip" onChange={this.handleChange} />
            </div>
          </div>
          
          <div class="row">
            <div class="form">
              <label for="phone">Phone</label>
            </div>
            <div class="inputs">
              <input type="text" id="phone" name="phone" placeholder="Phone #" onChange={this.handleChange} />
            </div>
          </div>

          <div class="row">
            <div class="form">
              <label for="payment">Payment Info</label>
            </div>
            <div class="inputs" id="payment">
              <input type="text" name="ccNum" placeholder="Card #" onChange={this.handleChange} />
            <input type="text" name="exp" placeholder="Card exp date" onChange={this.handleChange} />
            </div>
          </div>

          <div class="row">
            <div class="form">
              <label for="quantity">Quantity</label>
            </div>
            <div class="inputs">
              <input type="text" id="quantity" name="quantity" placeholder="0"onChange={this.handleChange} />
            </div>
          </div>

          <div class="row">
            <div class="form">
              <label for="amount">Amount</label>
            </div>
            <div class="inputs">
              <input type="text" id="amount" name="amount" placeholder="0.0" onChange={this.handleChange} />
            </div>
          </div>
          

          <input type="submit" value="Submit" />
          
        </form>
     </div>
    );
  }
}
export default Form;
