import React, { useEffect } from 'react';
import { Header, TodoPanel, TodoList,Footer } from './components';

import styles from './App.module.css';


const DEFAULT_TODO_LIST = [
  { id: 1, name: 'Тестовое', checked: false},
  { id: 2, name: 'Прекрасный код', checked: false },
  {
    id: 3,
    name: 'Покрытие тестами',
    checked: true
  }
];

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [todoLeft, setTodoLeft] = React.useState(DEFAULT_TODO_LIST);
  const [activeTab, setActiveTab] = React.useState('all');

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  const hideTodos = (tab: 'all' | 'completed' | 'active') => {
    switch (tab) {
      case 'completed': setActiveTab('completed');
      break;
      case 'active' : setActiveTab('active');
      break;
      case 'all' : setActiveTab('all');
      break;
      default:  setActiveTab('all');
    } 
  };

  const addTodo = ({ name }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, name, checked: false}]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };


  useEffect(() =>{
    setTodoLeft(todos.filter(todo => !todo.checked));
  },[todos])

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todoLeft.length} />
        <TodoPanel addTodo={addTodo} />
        <TodoList
          todos={todos}
          checkTodo={checkTodo}
          activeTab={activeTab}
        />
        <Footer todoCount={todoLeft.length} deleteTodo={deleteTodo}  hideTodos={hideTodos} activeTabs={activeTab} />
      </div>
    </div>
  );
};
