export default function Head() {
  const title = "من نحن | eMenu1";
  const description =
    "تعرف على eMenu1 وخبرتنا في تصميم وتطوير منيو إلكتروني تفاعلي للمطاعم والمقاهي والفنادق.";
  const canonical = "https://emenu1.com/about";

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
