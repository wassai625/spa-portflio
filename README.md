# SPA Portfolio

このプロジェクトは、DjangoバックエンドとReactフロントエンドで構成されたポートフォリオアプリケーションです。

## 必要条件

- Python 3.8以上
- Node.js 16以上
- Docker
- Docker Compose

## バックエンド（Django）のセットアップ

1. バックエンドディレクトリに移動
```bash
cd backend
```

2. Poetryを使用して依存関係をインストール
```bash
poetry install
```

3. 仮想環境をアクティベート
```bash
poetry shell
```

4. PostgreSQLコンテナを起動
```bash
docker-compose up -d
```

5. データベースのマイグレーションを実行
```bash
python manage.py migrate
```

6. 開発サーバーを起動
```bash
python manage.py runserver
```

## フロントエンド（React）のセットアップ

1. フロントエンドディレクトリに移動
```bash
cd frontend
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm start
```

## 環境変数の設定

### バックエンド
`.env`ファイルを`backend`ディレクトリに作成し、以下の環境変数を設定してください：
```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://postgres:postgres@localhost:5432/portfolio
```

### フロントエンド
`.env`ファイルを`frontend`ディレクトリに作成し、必要な環境変数を設定してください。

## アプリケーションへのアクセス

- バックエンドAPI: http://localhost:8000
- フロントエンド: http://localhost:3000
- PostgreSQL: localhost:5432

## 開発環境の構築

1. PostgreSQLコンテナを起動
2. バックエンドとフロントエンドの両方のサーバーを起動
3. ブラウザで http://localhost:3000 にアクセス

## 注意事項

- 開発環境では、PostgreSQLコンテナ、バックエンド、フロントエンドの全てを起動する必要があります
- 本番環境では、適切なセキュリティ設定と環境変数の設定が必要です
- PostgreSQLのデータは`docker-compose down`を実行すると削除されます。データを永続化したい場合は、Dockerボリュームの設定が必要です 