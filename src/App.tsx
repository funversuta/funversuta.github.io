import React, { useEffect, useState } from 'react';
import { Header, TodoPanel, TodoList, Footer } from './components';

import styles from './App.module.css';
import { Tab } from './enums/tab.enum';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'Тестовое', checked: false },
  { id: 2, name: 'Прекрасный код', checked: false },
  {
    id: 3,
    name: 'Покрытие тестами',
    checked: true
  }
];

export const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [todoLeft, setTodoLeft] = useState(todos.length);
  const [activeTab, setActiveTab] = useState(Tab.All);

  const filterTodos = (todos: Todo[]) => todos.filter((todo) => !todo.checked);

  const deleteTodo = () => {
    setTodos(filterTodos(todos));
  };

  const addTodo = ({ name }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([
      ...todos,
      { id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, name, checked: false }
    ]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  useEffect(() => {
    setTodoLeft(filterTodos(todos).length);
  }, [todos]);

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} activeTab={activeTab} />
        <Footer
          todoCount={todoLeft}
          deleteTodo={deleteTodo}
          hideTodos={setActiveTab}
          activeTabs={activeTab}
        />
      </div>
    </div>
  );
};
