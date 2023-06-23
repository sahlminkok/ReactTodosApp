import PropTypes from 'prop-types';
import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  if (!todosProps) {
    return <div>No todos available</div>;
  }
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodosList;
