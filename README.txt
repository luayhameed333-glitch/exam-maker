منسّق الأسئلة الامتحانية - حزمة التطبيق
إعداد الأستاذ لؤي حميد الياسري

محتويات الحزمة (ارفعها كلها معاً بنفس المجلد):
index.html            التطبيق
manifest.webmanifest  بيانات التطبيق (الاسم والأيقونة)
sw.js                 يخلي التطبيق يشتغل بدون إنترنت
icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png   الأيقونات

الخطوة 1: رفع الملفات على رابط خاص (مجاني)
GitHub Pages:
 1) أنشئ حساباً على github.com ثم New repository (اسمه مثلاً exam-maker) واجعله Public.
 2) Add file > Upload files وارفع كل ملفات الحزمة (بعد فك الضغط) ثم Commit.
 3) Settings > Pages > Source: Deploy from a branch > Branch: main (root) > Save.
 4) بعد دقيقة يظهر الرابط: https://اسمك.github.io/exam-maker/
 (على الموبايل فعّل "موقع سطح المكتب" بكروم إذا ما ظهر لك زر الرفع)

الخطوة 2: تحويله إلى APK
 1) افتح pwabuilder.com والصق الرابط ثم Start.
 2) اضغط Package for stores ثم Android ثم Generate Package.
 3) نزّل الملف، وفيه APK جاهز للتثبيت.
 4) ثبّت الـ APK وأرسله لمن تريد (يحتاج السماح بالتثبيت من مصادر غير معروفة).

بدون APK: افتح الرابط بكروم ثم ⋮ ثم "تثبيت التطبيق" فيصير تطبيقاً مستقلاً بأيقونته.
