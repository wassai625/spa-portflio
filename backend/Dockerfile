FROM python:3.11-slim

# 必要なシステムパッケージ
RUN apt-get update && apt-get install -y \
  build-essential libpq-dev curl && rm -rf /var/lib/apt/lists/*

# Poetryインストール
RUN pip install poetry

# 作業ディレクトリ作成
WORKDIR /app

# Poetryの設定ファイルを先にコピー（キャッシュ活用）
COPY pyproject.toml poetry.lock* /app/

# 仮想環境をグローバル化してから依存インストール
RUN poetry config virtualenvs.create false && poetry install --no-root --no-interaction --no-ansi

# アプリケーション本体をコピー
COPY . /app

# ポート開放
EXPOSE 8000

# サーバー起動
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
