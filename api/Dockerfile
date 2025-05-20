FROM php:8.1-fpm

# パッケージのインストールと設定
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo_mysql zip exif pcntl

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /var/www/html

# アプリケーションのコピー
COPY . .

# 依存関係のインストール
RUN composer install

# 権限の設定
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# ポート公開
EXPOSE 8000

# 開発サーバー起動コマンド
CMD php artisan serve --host=0.0.0.0 