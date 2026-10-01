# EpisodeLens — Astro Starter

موقع ثابت (Static) مبني بإطار [Astro](https://astro.build)، مصمَّم كواجهة شبكية بأسلوب
zergnet.com (بطاقات مصغّرة + عناوين فضولية) لاستقبال المقالات القادمة تلقائيًا من
Google Apps Script (Astro Celebrity News Engine).

## التشغيل محليًا

```bash
npm install
npm run dev
```

## البناء للنشر

```bash
npm run build
```

الناتج يوضع في مجلد `dist/` — جاهز لأي استضافة ثابتة (Netlify, Vercel, Cloudflare Pages).

## كيف تصل المقالات هنا؟

كل مقال هو ملف JSON واحد داخل `src/content/articles/<slug>.json`، بالشكل:

```json
{
  "title": "...",
  "slug": "...",
  "metaDescription": "...",
  "focusKeyword": "...",
  "category": "...",
  "altText": "...",
  "image": "https://...",
  "hashtags": ["#..."],
  "linkedCelebrity": null,
  "publishDate": "2026-10-01T12:00:00Z",
  "html": "<p>...</p>"
}
```

Google Apps Script (ملف `astro_celebrity_news_engine.js` في نفس المشروع) يكتب هذا
الملف مباشرة داخل مستودع GitHub عبر GitHub Contents API، ثم يستدعي رابط
"Deploy Hook" (من Netlify أو Vercel) لإعادة بناء ونشر الموقع تلقائيًا — بدون أي
تدخل يدوي.

## خطوات الربط (مرة واحدة)

1. **GitHub**: أنشئ مستودعًا جديدًا (Public أو Private) وارفع محتوى هذا المجلد إليه.
2. **GitHub Token**: من GitHub → Settings → Developer settings → Personal access
   tokens → Fine-grained token، بصلاحية `Contents: Read and write` على هذا المستودع فقط.
3. **الاستضافة** (Netlify مثال موصى به):
   - أنشئ حساب على netlify.com → "Add new site" → اربطه بمستودع GitHub.
   - Build command: `npm run build` — Publish directory: `dist`.
   - اربط الدومين `episodelens.com` من Site settings → Domain management.
   - من Site settings → Build & deploy → Build hooks → أنشئ Hook جديد، وانسخ رابطه.
4. في ورقة **Config** بالشيت، املأ:
   - `GitHub Owner`, `GitHub Repo`, `GitHub Token`, `GitHub Branch` (افتراضيًا `main`)
   - `Deploy Hook URL` (رابط Netlify من الخطوة السابقة)
   - `Site Base URL` = `https://episodelens.com`

بعدها أي مقال يُولَّد وتختار له "▶ نشر مباشر" من عمود GitHub Publish، يُدفع
مباشرة للموقع الحي خلال دقيقة أو دقيقتين (وقت بناء Netlify).
