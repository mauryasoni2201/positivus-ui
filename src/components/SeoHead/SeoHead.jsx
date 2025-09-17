import Head from "next/head";

const SeoHead = ({ data }) => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      {data.keywords && <meta name="keywords" content={data.keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {data.url && <link rel="canonical" href={data.url} />}

      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      {data.image && <meta property="og:image" content={data.image} />}
      {data.url && <meta property="og:url" content={data.url} />}
      <meta property="og:type" content={data.type || "website"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      {data.image && <meta name="twitter:image" content={data.image} />}
    </Head>
  );
};

export default SeoHead;