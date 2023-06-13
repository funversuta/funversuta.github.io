import React from 'react';
import styles from './TodoItem.module.css';
import { Tab } from '../../../enums/tab.enum';

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  activeTab: Tab;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, activeTab, checkTodo }) => {
  const activeTabStyle = () => {
    if (
      (activeTab === Tab.Completed && !todo.checked) ||
      (activeTab === Tab.Active && todo.checked)
    ) {
      return { display: 'none' };
    }

    return { display: 'flex', alignItems: 'center' };
  };

  return (
    <div className={styles.todo_item_container} style={activeTabStyle()}>
      <label className={styles.custom_checkbox} htmlFor={`${todo.id}`}>
        <input
          type='checkbox'
          name={`${todo.id}`}
          id={`${todo.id}`}
          checked={todo.checked ?? false}
          onChange={() => checkTodo(todo.id)}
        />
        <span>
          <div style={{ opacity: todo.checked ? 0.8 : 1 }}>
            <div
              aria-hidden
              style={{
                opacity: todo.checked ? 0.5 : 1,
                textDecoration: todo.checked ? 'line-through' : 'none',
                pointerEvents: 'none'
              }}
              className={styles.todo_item_title}
            >
              {todo.name}
            </div>
          </div>
        </span>
      </label>
    </div>
  );
};
