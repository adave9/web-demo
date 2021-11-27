import React from "react";

class Example7 extends React.Component{

    constructor(props){
        super(props);
        this.state={
                    newItem:"",
                    list:[]
                  }
      }
    
      updateInput(key,value){
          this.setState({
            [key]:value
          })
      }
      addItem(){
        const newItem={
            id:1 + Math.random(),
            value:this.state.newItem.slice()
        };
        const list=[...this.state.list];
    
        list.push(newItem);
    
        this.setState({
          list,
          newItem:"" 
        });
      }
      deleteItem(id)
      {
        const list=[...this.state.list];
    
        const updateList=list.filter(item=>item.id!==id);
    
        this.setState({list:updateList});
      }
      render(){
        return (
            <div className="todo2">
                <div>
                    Add an Item...
                    <br/>
                    <input 
                    type="text"
                    placeholder="Type item here"
                    value={this.state.newItem}
                    onChange={e=>this.updateInput("newItem",e.target.value)}
                    />
                    <button onClick={()=>this.addItem()}>Add</button>
                    <br/><br/>
                    <ul>
                      {
                          this.state.list.map(item=>{
                              return(
                                <li key={item.id}>&nbsp;&nbsp;&nbsp;{item.value}&nbsp;&nbsp;&nbsp;<button onClick={()=>this.deleteItem(item.id)}>Del</button>
                                </li>
                            
                              )
                          })
                      }
                    </ul>
                    <br/>
                </div>
            </div>
        );
      }
}

export default Example7;