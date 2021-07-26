import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, UpdateToDo } from "../Reducer/Todos/TodosAction";

function TodosComponent() {
  const [inputData, setInput] = useState("");
  const list = useSelector((state) => state.TodosReducer.list);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h2>ToDo App</h2>
        <div>
          <input
            type="text"
            placeholder="Add Your List Here "
            value={inputData}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addToDo(inputData));
              setInput("");
            }}
          >
            add!
          </button>
        </div>
        <div>
          {list.map((element) => {
            return (
              <div>
                <div>
                  <input
                    value={element.data}
                    onChange={(event) =>
                      dispatch(UpdateToDo(element.id, event.target.value))
                    }
                  />
                </div>
                <button onClick={() => dispatch(deleteToDo(element.id))}>
                  Delete!
                </button>
                {/* <input type = "button" value = "Update!" onClick= {() => dispatch(UpdateToDo(element.data))} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodosComponent;
