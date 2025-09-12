import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { MapPin, Clock, Phone, Mail, User, Users } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（実際の実装では適切なAPIを呼び出す）
    alert('お問い合わせありがとうございます。確認次第ご連絡いたします。')
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">お問い合わせ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            美術部に関するご質問やお問い合わせはこちらからお気軽にどうぞ。
            見学や入部のご相談もお待ちしています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>活動場所</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">本校美術室（3階）</p>
                <p className="text-muted-foreground text-sm">
                  〒123-4567<br />
                  東京都○○区××町1-2-3<br />
                  ○○高等学校
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>活動時間</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-medium">平日:</span> 月・水・金曜日</p>
                  <p><span className="font-medium">時間:</span> 15:30 - 17:30</p>
                  <p><span className="font-medium">土曜日:</span> 9:00 - 12:00（不定期）</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ※文化祭前などは時間延長や休日活動あり
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>連絡先</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>art.club@school.example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>03-1234-5678（学校代表）</span>
                </div>
                <div className="flex items-start space-x-2">
                  <User className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p>顧問: 山田 先生</p>
                    <p className="text-sm text-muted-foreground">
                      美術科教員・部活動顧問
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>見学について</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  美術部の見学はいつでも大歓迎です。事前のご連絡は必要ありませんが、
                  活動日程が変更になる場合もありますので、お越しの際は事前にご確認ください。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-blue-800">持参物:</span> 特になし<br />
                    <span className="font-medium text-blue-800">服装:</span> 汚れても良い服装<br />
                    <span className="font-medium text-blue-800">体験:</span> 簡単な制作体験可能
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <CardDescription>
                  以下のフォームからお気軽にお問い合わせください。
                  3営業日以内にご返信いたします。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">姓 *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="山田"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">名 *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="太郎"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">学年・所属</Label>
                    <Input
                      id="grade"
                      name="grade"
                      placeholder="中学3年生 / 高校1年生 / 保護者 など"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="入部について / 見学希望 / その他"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="お問い合わせ内容をご記入ください。見学希望の場合は希望日時もお書きください。"
                    />
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>個人情報の取り扱いについて</strong><br />
                      お預かりした個人情報は、お問い合わせへの回答以外の目的には使用いたしません。
                      また、ご本人の同意なく第三者に提供することはありません。
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl text-center mb-8">よくある質問</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">初心者でも大丈夫ですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  はい、大丈夫です。部員の半数以上が初心者から始めています。
                  基礎から丁寧に指導いたします。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">画材は必要ですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  基本的な画材は部活で用意していますが、個人の作品制作用に
                  購入していただく場合があります。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">他の部活との兼部は可能ですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  活動日が重ならない部活動であれば相談可能です。
                  まずはご相談ください。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">文化祭以外の発表の場はありますか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  地域のコンテストへの参加や、校内での作品展示など、
                  年間を通じて様々な発表機会があります。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}