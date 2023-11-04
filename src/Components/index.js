import React, { useState } from 'react';






function TodoApp() {
  const [todos, setTodos] = useState([]); //Boş bir yapılacaklar fonksiyonu oluşturuyoruz ve bu diziyi güncellemek için useState kullanıyoruz.
  const[newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if(newTodo.trim() !== '') { //burada girilen metin boş değilse devam et if statementını kullandım.
        setTodos([...todos,{text: newTodo, done: false}]);
        setNewTodo('');
    }
  };

  const toggleTodo = (index) => { // Bir todo'nun durumunu (tamamlandı/tamamlanmadı) değiştirmek için kullanılacak fonksiyon.
    const updatedTodos = [...todos];// Varolan todo dizisini koruyarak alın.
    updatedTodos[index].done = !updatedTodos[index].done; // Seçilen todo'nun durumunu tersine çevirin.
    setTodos(updatedTodos); //todoyu güncellemek için kullanılır.
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i)=> 1 !== index) // Seçilen todo hariç diğer todoları filtrelemek için kullandım 
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
      </header>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? 'completed' : ''}> 
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)} //index içeriğindeki maddenin tamamlandığını gösteren button
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => deleteTodo(index)} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoApp;
