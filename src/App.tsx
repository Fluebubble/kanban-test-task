// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import data from './todos.json';
import 'bulma/bulma.scss';
// import { TasksColumn } from './components/TasksColumn/TasksColumn';
import { TasksColumns } from './components/TasksColumns/TasksColumns';
// import { useState } from 'react';

console.log(data);

const App = () => {
  // const [count, setCount] = useState(0);
  // const [isTablesLoaded, setIsTablesLoaded] = useState(false);

  const { tableId, username, columns } = data;

  return (
    <>
      <section className="section">
        <form className="block">
          <div className="field">
            <label className="label">Find your table</label>
            <div className="field is-grouped">
              <div className="control is-expanded">
                <div className="is-flex is-flex-direction-row gap">
                  <input
                    className="input"
                    type="text"
                    placeholder="Table ID"
                  />
                </div>
              </div>
              <div className="control">
                <button className="button is-link">Search</button>
              </div>
            </div>
          </div>
          {/* <div className="field">
            <label className="label">Find your table</label>
            <div className="control">
              <div className="is-flex is-flex-direction-row gap">
                <input
                  className="input"
                  type="text"
                  placeholder="Table ID"
                />
                <button className="button is-link">Search</button>
              </div>
            </div>
          </div> */}
        </form>
        <TasksColumns
          tableId={tableId}
          username={username}
          columns={columns}
        />
      </section>
    </>
  );
};

export default App;
