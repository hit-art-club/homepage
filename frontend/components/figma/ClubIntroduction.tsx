import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './ui/ImageWithFallback'
import { Clock, MapPin, Users, Target, Heart, Sparkles } from 'lucide-react'

export function ClubIntroduction() {
  const activities = [
    {
      title: "水彩画",
      description: "透明感のある美しい色彩表現を学びます",
      level: "初級〜上級"
    },
    {
      title: "デッサン",
      description: "基礎的な描画技術と観察力を身につけます",
      level: "初級〜上級"
    },
    {
      title: "油絵",
      description: "重厚で表現力豊かな作品制作に挑戦します",
      level: "中級〜上級"
    },
    {
      title: "デジタルアート",
      description: "最新のデジタル技術を使った作品制作",
      level: "初級〜上級"
    },
    {
      title: "立体制作",
      description: "粘土や様々な素材を使った立体作品",
      level: "初級〜上級"
    },
    {
      title: "イラスト",
      description: "キャラクターデザインやイラスト制作",
      level: "初級〜上級"
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">美術部について</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            私たちは創造性を大切にし、一人ひとりの個性を活かした作品制作を行っています。
            初心者から経験者まで、みんなで楽しく活動しています。
          </p>
        </div>

        {/* Club Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">私たちの活動</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                美術部では、様々なアートの分野に挑戦できる環境を提供しています。
                週3回の部活動では、基礎技術の向上から創作活動まで、
                幅広い内容で活動しています。また、文化祭や地域のコンテストにも
                積極的に参加し、日頃の成果を発表しています。
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>部員数: 25名</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>活動日: 月・水・金</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>場所: 美術室</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>時間: 15:30-17:30</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540929140372-508d6f9096bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXJ0d29yayUyMGdhbGxlcnl8ZW58MXx8fHwxNzU3NDE2NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="美術室での活動風景"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">主な活動内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                    <Badge variant="secondary">{activity.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{activity.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl text-center mb-8">活動目標</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-2">創造性の向上</h3>
              <p className="text-muted-foreground">
                一人ひとりの個性を大切にし、自由な発想で作品制作に取り組みます
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-2">協力と成長</h3>
              <p className="text-muted-foreground">
                仲間と協力し、お互いの作品から学び合い、共に成長していきます
              </p>
            </div>
            
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-2">技術の習得</h3>
              <p className="text-muted-foreground">
                様々な技法を学び、表現の幅を広げて技術向上を目指します
              </p>
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section>
          <h2 className="text-3xl text-center mb-8">年間行事</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>4月</span>
                  <Badge>新入生歓迎</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">新入部員歓迎会・基礎技法講習</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>8月</span>
                  <Badge variant="secondary">夏合宿</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">2泊3日の制作合宿・風景画制作</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>10月</span>
                  <Badge variant="outline">文化祭</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">年間の集大成となる作品展示</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>12月</span>
                  <Badge>コンテスト</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">地域美術コンテスト参加</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}