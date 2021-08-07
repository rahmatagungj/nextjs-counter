import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Selamat Datang - Rahmat Agung Julians</title>
        <meta name="description" content="Rahmat Agung Julians" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center p-10 min-h-screen">
        <h1 className="text-4xl font-bold mb-10">Selamat Datang</h1>

        <Link href="/app/counter">
          <Button>
            <h2 className="text-lg">Counter App &rarr;</h2>
          </Button>
        </Link>
      </main>
    </div>
  );
}
