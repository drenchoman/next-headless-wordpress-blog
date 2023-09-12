import Image from 'next/image';
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <p>{API_URL}</p>
    </main>
  );
}
