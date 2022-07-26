import { useRouter } from "next/router";

export default function Produto() {
    const { query } = useRouter();
    const { produto, categoria, cor } = query;

    return (
        <>
            <h1>{produto}</h1>
            <p>{categoria} - {cor}</p>
        </>       
    );
  }