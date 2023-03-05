import Head from "next/head"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Kelly Mara Psicóloga</title>
        <meta name="description" content="Psicóloga em Muriaé-MG. Tratamento para ansiedade, depressão e outros problemas emocionais. Atendimento presencial e online. Agende sua consulta via WhatsApp." />
        <meta name="keywords" content="Psicóloga, Muriaé-MG, ansiedade, depressão, tratamento, terapia, psicologia, atendimento online, terapia online, Kelly Mara, psicóloga Kelly Mara" />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='psicologia' />
        <meta property='og:title' content='Kelly Mara Psicóloga' />
        <meta property='og:image' content='https://www.kellymarapsi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_picture2.9a7c7a0b.png&w=640&q=75' />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
