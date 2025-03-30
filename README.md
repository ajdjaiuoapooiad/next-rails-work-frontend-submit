# Wantedly 長期インターン管理アプリ

## デモ動画
<p align="center">
  <img src="https://github.com/ajdjaiuoapooiad/next-rails-work-frontend-pageRouter/blob/main/-GoogleChrome2025-03-3015-30-15-ezgif.com-video-to-gif-converter.gif" alt="デモ動画" width="600" style="border-radius: 10px;">
</p>



## URL
https://next-rails-work-frontend-page-router.vercel.app  

## テスト用アカウント（ログイン用）
学生  
メール: aaa@a.com  
パスワード:  password  
企業  
メール: test@example.com  
パスワード:  password  


# テスト方法 (面接官向け)  
全体的な動作確認  
ダッシュボードへのアクセス:  
無料トライアルを開始するボタンからダッシュボードへ移動できることを確認します。  
API側のインフラにRenderを使用しているため、初回Fetch時にしばらく時間がかかることを考慮し、許容範囲内の応答時間であることを確認します。  

## 機能別テスト  
## 1.求人情報管理 (CRUD機能):  
企業アカウントでログインし、求人情報の登録、編集、削除が正常に動作することを確認します。  
必須項目が適切に機能し、バリデーションが正しく行われることを確認します。  
学生アカウントでログインし、登録された求人情報を閲覧できることを確認します。  
## 2.ユーザー認証:  
学生アカウントと企業アカウントの登録、ログイン、ログアウトが正常に動作することを確認します。  
各アカウントで異なる権限が付与されていることを確認します。  
## 3.メッセージ機能:  
学生アカウントと企業アカウント間でメッセージの送受信が正常に動作することを確認します。  
メッセージの履歴が正しく表示されることを確認します。  
## 4.プロフィール機能:  
学生アカウントと企業アカウントでプロフィール情報の登録、編集、表示が正常に動作することを確認します。  
プロフィール情報が適切に表示されることを確認します。  
## 5.レスポンシブデザイン:  
PC、タブレット、スマートフォンで表示し、レイアウトが崩れないことを確認します。  
画面サイズを変更し、レイアウトが適切に調整されることを確認します。 
## 6.APIテスト:   
Postmanを使用して、求人情報管理、ユーザー認証、メッセージ機能、プロフィール機能関連のAPIが正常に動作することを確認します。  
APIのレスポンスが期待通りのデータ形式であることを確認します。  
## 7.エラーハンドリング:  
無効な入力や不正なデータを入力し、エラーメッセージが適切に表示されることを確認します。  
エラーメッセージがユーザーにとって分かりやすい内容であることを確認します。  





  
# プロジェクト概要  
インターンシップを求める学生と、インターンシップを提供したい企業をマッチングするためのWebアプリケーションです。学生は興味のある企業のインターンシップ情報を検索・応募でき、企業は自社のインターンシップ情報を掲載し、適切な学生をスカウトできます。  
  
## 技術スタック  
フロントエンド: Next.js (TypeScript), Tailwind CSS, shadcn-ui  
バックエンド: Ruby on Rails (APIモード)  
データベース: SQLite (開発環境), PostgreSQL (本番環境)  
APIテスト: Postman  
デプロイ: Render, Vercel  
その他: Git, GitHub, Docker  


## 主な機能  
求人情報管理 (CRUD): 企業は求人情報を登録、編集、削除でき、学生は閲覧できます。  
ユーザー認証: 学生と企業で異なる認証機能を提供します。  
メッセージ機能: 学生と企業間でメッセージのやり取りが可能です。  
プロフィール機能: 学生と企業はプロフィール情報を登録・編集できます。 

## 工夫した点  
Tailwind CSSとshadcn-uiによるモダンなUI  
直感的な操作を可能にするシンプルなデザイン  
レスポンシブデザインによる快適な操作性  
RESTful API設計  
データベース設計  

## 苦労した点  
UI/UXとレスポンシブデザインの両立:  
多デバイス対応と、複雑なデータ表示の最適化。  
データベース設計とパフォーマンス:  
大量データ処理と高速検索を両立するデータベース設計、特に本番環境でのチューニング。  

## 今後の展望  
求人情報の検索・フィルタリング機能強化  
学生と企業のマッチングアルゴリズムの改善  
UI/UXの改善  
その他便利な機能の追加  

## 開発者の学び  
RESTful API設計  
データベース設計  
フロントエンド開発 (Next.js, TypeScript, Tailwind CSS, shadcn-ui)  
バックエンド開発 (Ruby on Rails)  
レスポンシブデザイン  
テストとデバッグ  
プロジェクト管理  

## 動作確認方法  
リポジトリをクローン  
フロントエンドとバックエンドそれぞれの環境構築手順に従って環境構築  
フロントエンドとバックエンドを起動  
ブラウザでフロントエンドにアクセス  
PostmanでAPIエンドポイントをテスト  
リポジトリ内のREADME.mdを参照  

## 備考  
本プロジェクトは個人開発であり商用利用は想定していません。  

## 作者  
竹内悠人  