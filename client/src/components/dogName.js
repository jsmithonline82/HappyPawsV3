import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
// import { Dropdown, Modal } from 'bootstrap'

// THIS IS A COMPONENT THAT PLUGS INTO THE FORM IN DOG Modal
// FOR RENDERING A BREED LIST Dropdown. BREEDLIST WORKS BUT 
// BREAKS THE PAGE ON SUBMIT

export default class DogName extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('https://api.thedogapi.com/v1/breeds/')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select name='breed' options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    
      </div>
    )
  }
}