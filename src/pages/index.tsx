import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// スライドの型定義
interface Slide {
  image: string;
  title: string;
  description: string;
}





export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides: Slide[] = [
    {
      image: 'https://images.wantedly.com/i/5HHeGHt?w=1960&format=jpeg',
      title: '株式会社A',
      description: 'Webエンジニア募集',
    },
    {
      image: '/images/slide2.jpg',
      title: '株式会社B',
      description: 'マーケティングインターン',
    },
    {
      image: '/images/slide3.jpg',
      title: '株式会社C',
      description: '営業アシスタント募集',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3秒ごとにスライドを切り替え

    return () => clearInterval(interval); // コンポーネントのアンマウント時にintervalをクリア
  }, [slides.length]);

  return (
    <div>
      <Head>
        <title>インターンマッチングアプリ</title>
        <link rel="icon" href="/images/logo2.svg" />
      </Head>

      {/* ヒーローセクション */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            未来を切り拓く、インターンシップ
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            インターン生と企業を繋ぎ、新たな可能性を広げます。
          </p>
          <div className="flex justify-center mb-8">
            <input type="text" placeholder="キーワードで検索" className="border border-gray-300 rounded-l-md py-2 px-4 w-full md:w-1/2" />
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-r-md">検索</button>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/users/register" className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700">インターン生の方はこちら</Link>
            <Link href="/users/register" className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600">企業の方はこちら</Link>
          </div>
        </div>
      </section>

      {/* スライドセクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">注目のインターンシップ</h2>
          <div className="flex overflow-x-auto space-x-4">
            {/* スライドアイテム */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 w-80 flex-shrink-0 ${
                  index === currentSlide ? 'block' : 'hidden'
                }`}
              >
                <img src={slide.image} alt={`スライド${index + 1}`} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コンテンツセクション (インターン生向け) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">インターン生向け</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <img src="/images/hero2.svg" alt="求人画像" className="" width="200" height="150" />
              <h3 className="text-xl font-bold mb-4">おすすめ求人</h3>
              <p>あなたのスキルを活かせるインターンシップを見つけよう。</p>
              <Link href="/jobs" className="text-indigo-600 hover:underline">求人一覧を見る</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <img src="/images/hero.svg" alt="体験談画像" className="" width="200" height="150" />
              <h3 className="text-xl font-bold mb-4">インターン体験談</h3>
              <p>実際にインターンシップに参加した先輩の声を聞いてみよう。</p>
              <Link href="/experiences" className="text-indigo-600 hover:underline">体験談を読む</Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/register" className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700">今すぐ登録</Link>
          </div>
          {/* インターンシップのメリットセクション */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">インターンシップのメリット</h3>
            <ul className="list-disc list-inside">
              <li>実践的なスキルが身につく</li>
              <li>業界の知識が深まる</li>
              <li>就職活動に有利になる</li>
              <li>人脈が広がる</li>
            </ul>
          </div>
          {/* インターンシップ参加の流れセクション */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">インターンシップ参加の流れ</h3>
            <ol className="list-decimal list-inside">
              <li>会員登録</li>
              <li>求人検索</li>
              <li>応募</li>
              <li>企業との面談</li>
              <li>インターンシップ開始</li>
            </ol>
          </div>
        </div>
      </section>

      {/* コンテンツセクション (企業向け) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">企業向け</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <img src="/images/hero4.svg" alt="メリット画像" className="" width="200" height="150" />
              <h3 className="text-xl font-bold mb-4">求人掲載のメリット</h3>
              <p>優秀なインターン生をスカウトし、企業の成長を加速させましょう。</p>
              <Link href="/merits" className="text-indigo-600 hover:underline">メリットを見る</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <img src="/images/hero3.svg" alt="導入事例画像" className="" width="200" height="150" />
              <h3 className="text-xl font-bold mb-4">導入事例</h3>
              <p>実際にインターン生を採用した企業の事例をご紹介します。</p>
              <Link href="/cases" className="text-indigo-600 hover:underline">事例を見る</Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/register" className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600">求人を掲載する</Link>
          </div>
          {/* インターンシップ受け入れのメリットセクション */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">インターンシップ受け入れのメリット</h3>
            <ul className="list-disc list-inside">
              <li>優秀な人材を早期に発掘できる</li>
              <li>企業の魅力をアピールできる</li>
              <li>若手の視点を取り入れられる</li>
              <li>社員の育成につながる</li>
            </ul>
          </div>
          {/* インターンシップ受け入れの流れセクション */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">インターンシップ受け入れの流れ</h3>
            <ol className="list-decimal list-inside">
              <li>求人掲載</li>
              <li>応募受付</li>
              <li>面談</li>
              <li>インターンシップ開始</li>
              <li>評価・フィードバック</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Q&Aセクション */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">よくある質問</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Q. インターンシップの期間は？</h3>
              <p>A. 企業によって異なりますが、1週間〜3ヶ月程度が多いです。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q. 応募に必要なスキルは？</h3>
              <p>A. 企業や職種によって異なります。求人情報をよくご確認ください。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q. インターンシップの給与は？</h3>
              <p>A. 無給の場合と有給の場合があります。求人情報をよくご確認ください。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q. 応募後の流れは？</h3>
              <p>A. 書類選考、面接、インターンシップ開始という流れが一般的です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 問い合わせセクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">お問い合わせ</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                お名前
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="お名前" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                メールアドレス
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="メールアドレス" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                お問い合わせ内容
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="お問い合わせ内容"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                送信
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} インターンマッチング</p>
          <div className="mt-4">
            <Link href="/sitemap" className="text-gray-300 hover:underline mr-4">サイトマップ</Link>
            <Link href="/privacy" className="text-gray-300 hover:underline mr-4">プライバシーポリシー</Link>
            <Link href="/terms" className="text-gray-300 hover:underline mr-4">利用規約</Link>
            <Link href="/contact" className="text-gray-300 hover:underline">お問い合わせ</Link>
          </div>
          <div className="mt-4">
            {/* ソーシャルメディアリンク */}
          </div>
        </div>
      </footer>
    </div>
  );
}

