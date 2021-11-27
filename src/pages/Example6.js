import React from 'react';

class Example6 extends React.Component{

    constructor(props)
   {
      super(props);
      this.state={value:''};
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
   }

    handleChange(event){
      this.setState({value: event.target.value});
      event.preventDefault();
   }
   handleSubmit(event){
    alert(this.state.value);
   }
   render(){
       return(
            <div className="sform">
                <h2>SIMPLE FORM</h2>
                <br/>
            <form onSubmit={this.handleSubmit}>
              <label>Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
              <br/>
              <br/>
              <label>Phone:
                <input type="text" value={this.state.phone}/>
              </label>
              <br/>
              <br/>
              <input class="btn" type="submit" value="submit"/>
          </form>
            <br/>
            </div>
       );
    }
}

export default Example6;