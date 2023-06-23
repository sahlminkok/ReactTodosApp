const InputTodo = () => {
  return (
  <>
    <form /*onSubmit={ handleSubmit }*/ className="form-container">
      <input
        placeholder="Input Your Todos"
        className="input-text"
      />
      <button className="input-submit">Submit</button>
    </form>
    <span className="submit-warning">message</span>
  </>
  )
};

export default InputTodo;