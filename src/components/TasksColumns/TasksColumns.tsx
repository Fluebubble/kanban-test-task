import { TasksColumn } from '../TasksColumn/TasksColumn';

interface Props {
  tableId: number;
  username: string;
  columns: {
    name: string;
    columnId: number;
    items: {
      id: number;
      text: string;
    }[];
  }[];
}

export const TasksColumns: React.FC<Props> = ({
  // tableId,
  username,
  columns,
}) => {
  return (
    <div className="columns">
      {columns.map(({ name, items, columnId }) => (
        <TasksColumn
          key={columnId}
          name={name}
          items={items}
          username={username}
        />
      ))}

      {/* <TasksColumn name="In Progress" />
          <TasksColumn name="Done" /> */}
    </div>
  );
};
