import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css'

import { getAllMagics, postMagic } from '../services/api-helper';
import Form from './Form';

export default class Main extends Component {
  state = {
    
    magics: []
  }

  componentDidMount() {
    
    this.readAllMagics();
  }

  readAllMagics = async () => {
    const magics = await getAllMagics();
    this.setState({ magics })
  }

  

  handleMagicSubmit = async (magicData) => {
    const newMagic = await postMagic(magicData);
    this.setState(prevState => ({
      magics: [...prevState.magics, newMagic]
    }))
  }

  render() {
    return (
      <main>
        <Route path="/magics/new" render={(props) => (
          <Form
            {...props}
            handleMagicSubmit={this.handleMagicSubmit}
          />
        )} />

      </main>
      
    )
  }
}
