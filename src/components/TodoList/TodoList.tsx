import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';
import { Tab } from '../../enums/tab.enum';

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo['id']) => void;
  activeTab: Tab;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, activeTab, checkTodo }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} activeTab={activeTab} />
    ))}
  </div>
);
