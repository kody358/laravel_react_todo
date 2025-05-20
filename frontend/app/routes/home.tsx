import { Link } from "react-router";

export function meta() {
  return [
    { title: "Todo App - ホーム" },
    { name: "description", content: "Laravel & React Router v7 Todo App" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-xl text-center">
      <h1 className="text-3xl font-bold mb-6">Laravel + React Todo アプリ</h1>
      <p className="mb-6">
        これはLaravel APIとReact Router v7を使用した簡単なTodoアプリケーションです。
      </p>
      <Link
        to="/todos"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
      >
        Todoリストを見る
      </Link>
    </div>
  );
}
