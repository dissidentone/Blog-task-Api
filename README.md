notepad README.md

# 📌 Blog Task API

## 🚀 Proje Açıklaması
Bu proje, modern web uygulamaları için **temiz, ölçeklenebilir ve genişletilebilir** bir REST API sunar. **Görev yönetimi ve blog yazıları** için güvenli, modüler ve kolay entegre edilebilir bir backend altyapısı sağlar.

---

## ⚙️ Kullanılan Teknolojiler

| Teknoloji         | Açıklama |
|------------------|----------|
| **Node.js & Express.js** | Hızlı ve minimal backend çatısı |
| **MongoDB (Mongoose)** | Esnek NoSQL veritabanı |
| **JWT Authentication** | Güvenli kimlik doğrulama |
| **Docker & CI/CD** | Kolay deployment ve entegrasyon |
| **Swagger/OpenAPI** | API dokümantasyonu |
| **Winston Logger** | Merkezi logging çözümü |

---

## 🎯 Çözülen Problemler & Sağlanan Çözümler

### 💥 Problem: REST API'lerin sürekli gelişmesi ve karmaşıklaşması
**🚀 Çözüm:** Modüler yapı + Esnek Router sistemi

### 🔐 Problem: API güvenliği & kimlik doğrulama
**🛡 Çözüm:** JWT ile güvenli authentication

### 📊 Problem: API'nin anlaşılır olmaması
**📖 Çözüm:** Swagger/OpenAPI dokümantasyonu

### ⚡ Problem: CI/CD & Deployment karmaşıklığı
**🛠 Çözüm:** Docker & GitHub Actions entegrasyonu

### 🔍 Problem: Debugging zor
**📜 Çözüm:** Winston ile merkezi loglama

---

## 🛠 Kurulum & Çalıştırma

```bash
# Projeyi klonla
git clone https://github.com/dissidentone/blog-task-api.git
cd blog-task-api

# Bağımlılıkları yükle
npm install

# .env dosyanı oluştur ve MongoDB bağlantı adresini ekle
cp .env.example .env
nano .env  # veya herhangi bir editör ile aç
```

`.env` dosyası örneği:
```
MONGO_URI=mongodb://127.0.0.1:27017/blog-task-api
JWT_SECRET=supersecretkey
PORT=3000
```

```bash
# Uygulamayı başlat
npm start
```

---

## 🔌 API Endpoint’leri

### **Auth (Kimlik Doğrulama)**
- **POST** `/auth/register` → Kullanıcı kaydı oluşturur.
- **POST** `/auth/login` → JWT Token ile giriş yapar.

### **Users (Kullanıcılar)**
- **GET** `/users` → Kullanıcı listesini getirir.
- **GET** `/users/:id` → Tek bir kullanıcıyı getirir.
- **PUT** `/users/:id` → Kullanıcı bilgilerini günceller.
- **DELETE** `/users/:id` → Kullanıcıyı siler.

### **Tasks (Görevler)**
- **GET** `/tasks` → Tüm görevleri getirir.
- **POST** `/tasks` → Yeni görev oluşturur.
- **PUT** `/tasks/:id` → Görevi günceller.
- **DELETE** `/tasks/:id` → Görevi siler.

### **Posts (Blog Yazıları)**
- **GET** `/posts` → Tüm blog yazılarını getirir.
- **POST** `/posts` → Yeni blog yazısı oluşturur.
- **PUT** `/posts/:id` → Blog yazısını günceller.
- **DELETE** `/posts/:id` → Blog yazısını siler.

### **Health Check (Servis Durumu)**
- **GET** `/health` → API'nin çalışıp çalışmadığını kontrol eder.

---

## 📝 Swagger Dokümantasyonu
API'nin detaylı dökümantasyonu için **Swagger UI**'ı kullanabilirsiniz.

```bash
# Swagger UI'a erişmek için
http://localhost:3000/api-docs
```

---

## 🐳 Docker Kullanımı (Opsiyonel)

```bash
# Docker ile başlatmak için
docker-compose up -d
```

`docker-compose.yml` dosyası içerisinde **MongoDB ve API** otomatik olarak başlatılır.

---

## 🚀 CI/CD & Deployment

GitHub Actions ile CI/CD entegrasyonu bulunmaktadır. Her push sonrası testler otomatik çalıştırılır ve deployment yapılabilir.

---

## 📜 Lisans & Kullanım Şartları

Bu proje **MIT Lisansı** ile sunulmaktadır. Kullanım serbesttir, ancak proje sahibi olarak belirtilmesi gerekmektedir.

```
MIT License
Copyright (c) 2025 Mustafa
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

🔥 **Proje başarılı bir şekilde tamamlandı!** README dosyanı ekleyip pushlayabilirsin. 🚀😎

