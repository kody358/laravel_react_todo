import React, { useState, useEffect } from 'react';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import type { Todo } from '../types/todo';
import { todoService } from '../services/todoService';

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await todoService.fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      console.error('Failed to load todos:', err);
      setError('Todoの読み込みに失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (title: string) => {
    try {
      const newTodo = await todoService.createTodo(title);
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.error('Failed to create todo:', err);
      setError('Todoの作成に失敗しました。');
    }
  };

  const handleToggleComplete = async (todo: Todo) => {
    try {
      const updatedTodo = await todoService.updateTodo({
        ...todo,
        completed: !todo.completed,
      });
      setTodos(
        todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
      );
    } catch (err) {
      console.error('Failed to update todo:', err);
      setError('Todoの更新に失敗しました。');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error('Failed to delete todo:', err);
      setError('Todoの削除に失敗しました。');
    }
  };

  return (
    <div className="container max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todoリスト</h1>
      <TodoForm onAdd={handleAddTodo} />
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {loading ? (
        <div className="text-center">読み込み中...</div>
      ) : todos.length === 0 ? (
        <div className="text-center">Todoがありません。</div>
      ) : (
        <div className="border border-gray-200 rounded">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
} 