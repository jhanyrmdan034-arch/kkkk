# Telegram Android UI Kit — اپ اندروید

پیاده‌سازی رابط کاربری از روی فایل فیگمای **«Telegram Android UI Kit (Community)»**:

- لینک طرح: https://www.figma.com/design/E6vmsBULIIhshVDqngJGEB/Telegram-Android-UI-Kit--Community-
- فایل اصلی در Figma Community: https://www.figma.com/community/file/1248594479379883056/telegram-android-ui-kit
- طراحان کیت: The Open Platform و Ilya Grishin — منتشرشده تحت مجوز **CC BY 4.0**
- این کیت یک کتابخانه‌ی کامپوننت (دکمه، لیست‌آیتم، تب، Tabbar، Text Field، Main Button، توکن‌های رنگی تلگرام و…) است که دقیقاً با دیزاین اصلی تلگرام اندروید ساخته شده. صفحه‌های این اپ با همان کامپوننت‌ها و همان رنگ‌ها ساخته شده‌اند.
- این نسخه **فقط رابط کاربری (دمو)** است: به سرور تلگرام وصل نمی‌شود، لاگین و پیام‌رسانی واقعی ندارد.

## 📱 نصب روی گوشی (APK)

1. از بخش **Releases** همین مخزن در گیت‌هاب، آخرین فایل `Telegram-UI-Kit.apk` را دانلود کنید.
2. فایل را روی گوشی اندرویدی باز کنید و «Install / نصب» را بزنید.
   - اگر اخطار «Install unknown apps» آمد، برای مرورگر/فایل‌منیجر خود اجازه‌ی نصب بدهید (چون APK خارج از گوگل‌پلی نصب می‌شود).
3. حداقل نسخه‌ی اندروید: **Android 8 (API 26)** به بالا.

## 📄 صفحه‌های اپ

- **Chats** — لیست چت‌ها، استوری‌ها، تب پوشه‌ها (All / Personal / Groups / Channels / Bots)، چت آرشیوشده، دکمه‌ی مداد (FAB)
- **Chat** — صفحه‌ی گفتگو با حباب پیام، پیام صوتی/عکس/فایل، ریپلای، تیک خوانده‌شدن، ارسال پیام و پاسخ نمایشی، منوی ضمیمه
- **Drawer** — منوی کناری تلگرام (پروفایل، گروه جدید، مخاطبین، تماس‌ها، پیام‌های ذخیره‌شده، تنظیمات) + تغییر تم روشن/تیره
- **New Message** — مخاطبین و ساخت گروه/چت مخفی/کانال
- **Profile** — پروفایل کاربر، اطلاعات، رسانه‌های مشترک
- **Settings** — تنظیمات تلگرام
- **Calls** — تماس‌های اخیر
- **Search** — جستجوی چت‌ها
- **UI Kit · Components** — نمایش کامپوننت‌های خود کیت فیگما: Button (Filled/Plain/Destructive)، Main Button، Text Field، List Item، Tabs، Tabbar، Switch/Checkbox/Radio، Badge و Page Control

## 🛠 ساختار پروژه

```
app/src/main/assets/        ← کل رابط کاربری (index.html , styles.css , app.js)
app/src/main/java/...       ← MainActivity — نمایش همان فایل‌ها داخل WebView
.github/workflows/          ← کامپایل خودکار APK در GitHub Actions
```

رابط کاربری یک‌بار در `assets` نوشته شده و هم در «پیش‌نمایش وب» و هم داخل APK دقیقاً همان فایل‌ها اجرا می‌شوند؛ بنابراین چیزی که در پیش‌نمایش می‌بینید، پیکسل‌به‌پیکسل همان چیزی است که روی گوشی نصب می‌شود.

## ▶️ اجرا و کامپایل

پیش‌نمایش وب (همان فایل‌های داخل APK):

```bash
python3 -m http.server 8080 --directory app/src/main/assets
```

کامپایل APK: با هر Push، گیت‌هاب‌اکشنز به‌صورت خودکار APK می‌سازد و در Releases منتشر می‌کند.
برای کامپایل محلی، پروژه را در Android Studio باز کنید و Run بزنید (JDK 17 و Android SDK 34 لازم است).

## ⚠️ نکته

این یک دموی غیررسمی از رابط کاربری است و هیچ ارتباطی با شرکت Telegram ندارد. نام و نشان تلگرام متعلق به صاحب آن است و کیت فیگما نیز تحت مجوز CC BY 4.0 با ذکر نام طراحان استفاده شده است.
