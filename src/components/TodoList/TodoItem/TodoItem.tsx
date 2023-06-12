import React from 'react';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  activeTab: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  activeTab,
  checkTodo,
}) => (
  <div className={styles.todo_item_container} style={activeTab === 'completed' && !todo.checked ? {display:'none'} : (activeTab === 'active' && todo.checked) ? {display:'none'} : {display:'flex',alignItems:'center'}}>
    <label className={styles.custom_checkbox} htmlFor={`${todo.id}`}>
      <input type="checkbox" name={`${todo.id}`} id={`${todo.id}`} checked={todo.checked ?? false}/>
      <span>
      <div style={{ opacity: todo.checked ? 0.8 : 1 }}>
      <div
        aria-hidden
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? 'line-through' : 'none'
        }}
        onClick={() => checkTodo(todo.id)}
        className={styles.todo_item_title}
      >
        {todo.name}
        </div>
        </div>
      </span>
    </label>
  </div>
);
