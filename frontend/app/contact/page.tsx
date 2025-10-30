"use client";

import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Connect to backend email service
    alert("メッセージを受け取りました。ありがとうございます！");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-slate-600">
            ご質問やご相談はこちらからお気軽にお寄せください。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div className="card p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">メール</h3>
              <p className="text-slate-600 text-sm">
                contact@artclub.jp
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 text-teal-secondary mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">SNS</h3>
              <p className="text-slate-600 text-sm">
                Twitter / Instagram
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-accent mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">フォーム</h3>
              <p className="text-slate-600 text-sm">
                下のフォームからご送信ください
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  お名前 <span className="text-orange-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  placeholder="山田太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  メールアドレス <span className="text-orange-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  件名 <span className="text-orange-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  placeholder="お問い合わせの件名"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  メッセージ <span className="text-orange-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent resize-none"
                  placeholder="ご質問やご相談内容をお聞かせください"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                メッセージを送信
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
