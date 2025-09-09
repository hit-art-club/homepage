export const metadata = { title: 'コンタクト' };

export default function ContactPage() {
  return (
    <div className="prose max-w-none">
      <h1>コンタクト</h1>
      <p>見学・入部希望・お問い合わせは下記へご連絡ください。</p>
      <ul>
        <li>Instagram：<a href="https://instagram.com/" target="_blank">公式アカウント</a></li>
        <li>X（旧Twitter）：<a href="https://x.com/" target="_blank">@club</a></li>
      </ul>
      <p>※SNSのDMでも受け付けています。</p>
    </div>
  );
}
