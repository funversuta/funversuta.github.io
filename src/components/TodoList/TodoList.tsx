import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo['id']) => void;
  activeTab: string;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  activeTab,
  checkTodo
}) => (
  <div>
    {todos.map((todo) => 
      
      <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          activeTab={activeTab}
        />
)}
  </div>
);
