export default function Head() {
  const title = "اتصل بنا | eMenu1";
  const description =
    "تواصل مع فريق eMenu1 لطلب تصميم منيو إلكتروني احترافي لمطعمك أو الاستفسار عن الخدمات والأسعار.";
  const canonical = "https://emenu1.com/contact";

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
