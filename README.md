# Laravel React Todo アプリケーション

Laravel APIとReact（TypeScript + React Router v7）を使用したシンプルなTodoアプリケーション。

## 技術スタック

### バックエンド
- Laravel 8.x
- MySQL 8.0
- PHP 8.1

### フロントエンド
- React
- TypeScript
- React Router v7
- Vite

## 環境構築（Docker）

### 前提条件
- Docker
- Docker Compose

### セットアップ手順

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/laravel-react-todo.git
cd laravel-react-todo
```

2. Docker環境を起動
```bash
docker-compose up -d
```

3. バックエンドの設定
```bash
# アプリケーションキーの生成
docker-compose exec api php artisan key:generate

# マイグレーションの実行
docker-compose exec api php artisan migrate

# 権限の設定
docker-compose exec api chmod -R 777 storage bootstrap/cache
```

4. アプリケーションにアクセス
   - フロントエンド: http://localhost:5173
   - バックエンドAPI: http://localhost:8000/api/todos

## ディレクトリ構造

```
laravel-react-todo/
├── api/                # Laravel バックエンド
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   └── TodoController.php
│   │   └── Models/
│   │       └── Todo.php
│   └── ...
├── frontend/          # React フロントエンド
│   ├── app/
│   │   ├── components/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   └── ...
└── docker-compose.yml # Docker設定
```

## 主な機能

- Todo項目の一覧表示
- 新しいTodoの追加
- Todoの完了/未完了の切り替え
- Todoの削除
