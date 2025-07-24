# ベースイメージとしてNode.jsの公式イメージを使用
FROM node:20-alpine AS base

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 本番環境用のイメージ
FROM node:20-alpine

WORKDIR /app

# ビルド成果物とnode_modulesをコピー
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

# Next.jsアプリケーションを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
