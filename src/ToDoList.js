import React, { Component } from 'react'

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: {done:"some string"}
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
    this.setState({ todos: userInput })
  };



  render() {
    return (
      <div>

        <form onSubmit={this.getInput}>
          <input name='userinput' placeholder='Your To Do Here' />
          <button onClick={() => { this.setState({ done: true }) }}>Add to list</button>
          <a href="/ToDoList" className="btn btn-primary">Clear List</a>
        </form>

        <div>

          {this.showCard()}

        </div>

      </div>
    )
  };
};










// getNews = async (input) => {
//   const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=ace489dd71b74e8f9cf8aeedf4c0a864&pageSize=20`);
//   const data = await res.json()
//   console.log(data)
//   this.setState({ articles: data.articles })
// }

// async componentDidMount() {
//   this.getNews('bitcoin')
// }
// search = (e) => {
//   e.preventDefault();
//   const input = e.target.search.value;
//   this.getNews(input)
// };
