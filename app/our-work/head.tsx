export default function Head() {
  const title = "أعمالنا | eMenu1";
  const description =
    "شاهد نماذج من أعمال eMenu1 في تصميم قوائم إلكترونية للمطاعم، واستعرض جودة التصميم وتجربة الاستخدام.";
  const canonical = "https://emenu1.com/our-work";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
