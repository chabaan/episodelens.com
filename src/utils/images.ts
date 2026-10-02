// خريطة تصنيف → صورة بديلة عالية الدقة (1200×900) تُستخدم تلقائيًا عندما يكون
// حقل "image" فارغًا (وهي الحالة الافتراضية لكل مقال يولَّد عبر Google Sheet).
// بدون هذه الخريطة كانت المقالات الجديدة تُنشر بلا صورة مميزة إطلاقًا، وهذا
// يُسقط المقال فورًا من أهلية Google Discover (يتطلب صورة كبيرة ≥1200px).
const CATEGORY_IMAGE_MAP: Record<string, string> = {
  hollywood: '/images/placeholder-hollywood.png',
  music: '/images/placeholder-music.png',
  tv: '/images/placeholder-tv.png',
  awards: '/images/placeholder-awards.png',
  scandals: '/images/placeholder-scandals.png',
  // تصنيفات قديمة من مقالات تجريبية سابقة — تُحفظ للتوافق الخلفي فقط
  relationships: '/images/placeholder-relationships.png',
  legal: '/images/placeholder-legal.png',
  movies: '/images/placeholder-movies.png',
  health: '/images/placeholder-health.png',
  documentaries: '/images/placeholder-documentaries.png'
};

const DEFAULT_IMAGE = '/images/placeholder-hollywood.png';

/** يرجع مسار صورة مميزة صالحة دائمًا: الصورة الفعلية إن وُجدت، وإلا أقرب صورة
 * بديلة بحسب التصنيف، وإلا الصورة الافتراضية. لا يرجع أبدًا سلسلة فارغة. */
export function resolveArticleImage(image: string | null | undefined, category: string | null | undefined): string {
  if (image && image.trim()) return image.trim();
  const key = String(category || '').trim().toLowerCase();
  return CATEGORY_IMAGE_MAP[key] || DEFAULT_IMAGE;
}
