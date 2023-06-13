import React from 'react';
import { Button } from '../Button/Button';
import arrow from '../../icons/arrow.svg';
import styles from './TodoPanel.module.css';

const DEFAULT_TODO = { name: '' };

interface AddTodoPanelProps {
  addTodo: ({ name }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onClick = () => {
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value.replace('  ', ' ') });
  };

  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.fields_container}>
        <div className={styles.field_container}>
          <label htmlFor='name'>
            <img
              src={arrow}
              width='13px'
              height='13px'
              alt=''
              className={todo.name === '' ? '' : styles.field_container_arrow}
            />
            <input
              autoComplete='off'
              id='name'
              maxLength={200}
              value={todo.name}
              onChange={onChange}
              name='name'
              placeholder='What needs to be done?'
              onKeyDown={(ev) => ev.key === 'Enter' && onClick()}
            />
            <div className={styles.button_container}>
              <Button
                style={todo.name === '' ? { visibility: 'hidden' } : { visibility: 'visible' }}
                color='blue'
                onClick={onClick}
              >
                ADD
              </Button>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
