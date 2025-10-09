function TodoItem1(){
      let milk = "Buy Milk";
      let date = "4/10/2023";
      return (
          <div className="row kg-row">
              <div className="col-6">
                  <h5>{milk}</h5>
              </div>
              <div className="col-4">{date}</div>
              <div className="col-2 button2">
                  <button type="button" class="btn btn-danger kg-button">
                      Delete
                  </button>
              </div>
          </div>
      );
}

export default TodoItem1