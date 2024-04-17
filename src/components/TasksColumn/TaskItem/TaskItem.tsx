interface Props {
  title: string;
  text: string;
  username: string;
}

export const TaskItem: React.FC<Props> = ({ title, text, username }) => {
  return (
    <div className="box">
      <h4 className="title is-5">{title}</h4>
      <div className="block">{text}</div>
      <div className="is-flex is-justify-content-space-between">
        <div>{username}</div>
        <div className="field is-grouped is-justify-content-flex-end">
          {/* <button className="button">Edit</button>
          <button className="button">Delete</button> */}
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-bold"></i>
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-bold"></i>
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-bold"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
