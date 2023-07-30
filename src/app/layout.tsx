import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

const siteName = 'twecon';
const description = `tweconはサービスを終了しました。tweconはtwitterのAPIを使用しサービスを提供してまいりましたが、仕様変更によりサービスの継続が困難となったため開発並びに提供を終了させていただきます。ご利用いただきありがとうございました。`;
const url = 'https://twecon.moons14.com/';


export const metadata = {
  title: 'twecon',
  description: description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@moons_dev',
    creator: '@moons_dev',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
