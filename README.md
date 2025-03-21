# blog-task-api
  
  ## Proje Genel Bakış
  
  Bu proje Backend Template Generator V1.1 kullanılarak otomatik olarak oluşturulmuştur.
  
  ## Özellikler

## Özellikler

- MONGODB Veritabanı Entegrasyonu
- JWT Authentication
- Winston Logger
- Swagger API Dokümantasyonu
- Docker Desteği
- GitHub Actions CI/CD


  ## Kurulum ve Çalıştırma
  
  1. Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```
  
  2. Geliştirme sunucusunu başlatın:
  ```bash
  npm run dev
  ```
  
  3. Üretim sunucusunu başlatın:
  ```bash
  npm start
  ```
  
  ## Veritabanı Kurulumu (MongoDB)
  
  1. MongoDB'yi yerel makinenize kurun veya bulut servisi kullanın.
  
  2. Bağlantı URL'sini `.env` dosyasında güncelleyin:
  ```
  MONGODB_URI=mongodb://localhost:27017/blog-task-api
  ```
  
  ## Authentication Kurulumu
  
  1. JWT secret key oluşturun ve `.env` dosyasına ekleyin:
  ```
  JWT_SECRET=your_secure_secret_key
  JWT_EXPIRES_IN=1d
  ```
  
  2. Temel authentication endpointleri:
  - `POST /auth/register`: Yeni kullanıcı kaydı
  - `POST /auth/login`: Kullanıcı girişi
  - `GET /auth/me`: Kullanıcı profili
  
  ## Docker Kurulumu
  
  1. Docker imajını oluşturun:
  ```bash
  docker build -t blog-task-api .
  ```
  
  2. Docker konteynerini çalıştırın:
  ```bash
  docker run -p 3000:3000 blog-task-api
  ```
  
  3. Docker Compose ile çalıştırma:
  ```bash
  docker-compose up -d
  ```
  
  ## CI/CD Kurulumu
  
  Proje GitHub Actions ile otomatik test ve dağıtım içerir.
  
  - Her push ve pull request için otomatik testler çalışır
  - Main branch'e push yapıldığında CI/CD workflow'ları tetiklenir
  
  ## Proje Yapısı
  
  ```
  blog-task-api/
  ├── src/
  │   ├── config/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   └── utils/
  ├── .env
  ├── package.json
  └── README.md
  ```
  
## Lisans
  
  MIT License