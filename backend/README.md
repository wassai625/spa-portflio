# Backend (Django)

このディレクトリはDjangoバックエンドのソースコードを含んでいます。

## セットアップ

1. Poetryを使用して依存関係をインストール
```bash
poetry install
```

2. 仮想環境をアクティベート
```bash
poetry shell
```

3. データベースのマイグレーションを実行
```bash
python manage.py migrate
```

4. 開発サーバーを起動
```bash
python manage.py runserver
```

## 環境変数

`.env`ファイルを作成し、以下の環境変数を設定してください：
```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
```

## API エンドポイント

- APIサーバー: http://localhost:8000
- APIドキュメント: http://localhost:8000/api/docs/ 