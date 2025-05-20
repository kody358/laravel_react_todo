import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいタスクを入力..."
          className="flex-grow p-2 border border-gray-300 rounded-l"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600"
        >
          追加
        </button>
      </div>
    </form>
  );
} 