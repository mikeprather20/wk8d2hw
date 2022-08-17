

import React, { Component } from 'react'

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: {
        todo : []
      }
    }
  };

  componentDidMount = async () => {

  };


  showCard = () => {
    this.state.todos.map((todos) => {
      return
      <div>
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <p className="card-text">{this.todos}</p>
            <input placeholder='Your To Do Here' />
            <button onClick={() => { this.setState({ done: true }) }}>Done</button>
            <a href="/Todos" className="btn btn-primary">Clear To Do</a>
          </div>
        </div>
      </div>
    })
  };

  getInput = (e) => {
    e.preventDefault()
    const userInput = e.target.userinput.value;
    console.log(userInput)
    this.setState({ todos: this.todos.todo += userInput })
  };



  render() {
    return (
      <div>

        <form onSubmit={this.getInput}>
          <input name='userinput' placeholder='Your To Do Here' />
          <button className="btn btn-primary" type='submit'>Add to list</button>
          <a href="/ToDoList" className="btn btn-primary">Clear List</a>
        </form>

        <div>

          {this.showCard()}

        </div>

      </div>
    )
  };
};


//SECOND WAY I TRIED

// import React, { Component } from 'react'

// export default class ToDoList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: []
//     }
//   };

//   componentDidMount = async () => {
//     this.getInput()
//   };


//   showCard = () => {
//     this.state.todos.map((getInput) => {
//       <div>
//         <div className="card" style={{ width: "50rem" }}>
//           <div className="card-body">
//             <p className="card-text">{getInput.todos}</p>
//             <input placeholder='Your To Do Here' />
//             <button onClick={() => { this.setState({ done: true }) }}>Done</button>
//             <a href="/Todos" className="btn btn-primary">Clear To Do</a>
//           </div>
//         </div>
//       </div>
//     })
//   };

//   getInput = async (input) => {
//     this.setState({ todos:input })
//   };

//   search = (e)=>{
//     e.preventDefault()
//     const input = e.target.search.value;
//     this.getInput(input)
//   };



//   render() {
//     return (
//       <div>

//         <form onSubmit={this.getInput}>
//           <input name='search' placeholder='Your To Do Here' />
//           <button className="btn btn-primary" type='submit'>Add to list</button>
//           <a href="/ToDoList" className="btn btn-primary">Clear List</a>
//         </form>

//         <div>

//           {this.showCard()}

//         </div>

//       </div>
//     )
//   };
// };