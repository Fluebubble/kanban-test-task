import { TaskItem } from './TaskItem/TaskItem';

interface Props {
  name: string;
  username: string;
  items: {
    id: number;
    title: string;
    text: string;
  }[];
}

export const TasksColumn: React.FC<Props> = ({ name, items, username }) => {
  return (
    <div className="block column is-one-third">
      <h3 className="title is-4">{name}</h3>
      {items.map(({ title, text, id }) => (
        <TaskItem
          key={id}
          title={title}
          text={text}
          username={username}
        />
      ))}
      {/* 
      <TaskItem />
      <TaskItem /> */}
    </div>
  );
};
