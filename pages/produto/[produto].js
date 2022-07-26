import { useRouter } from "next/router";
import Head from "next/head";

export default function Produto({ params, query }) {
  const { produto } = params;
  const { categoria, cor} = query;

  return (
    <>
      <Head>
        <title>Produto - {produto} - {categoria}</title>
      </Head>
      <div>
        <h1>{produto}</h1>
        <p>{categoria}</p>
        <p>{cor}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query }) {  
    return {
      props: {
        params,
        query,
      },
    }
}