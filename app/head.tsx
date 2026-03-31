export default function Head() {
  const title = "المنيو الإلكتروني الأول | تصميم منيو إلكتروني للمطاعم";
  const description =
    "احصل على منيو إلكتروني سريع ومتوافق مع الجوال يعرض منتجاتك بشكل جذاب ويسهّل التواصل والطلب.";
  const canonical = "https://emenu1.com/";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="eMenu1" />
      <meta property="og:image" content="https://emenu1.com/emenulogo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://emenu1.com/emenulogo.jpg" />
    </>
  );
}
