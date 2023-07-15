import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold ">Tailwind Components For Fun</h1>
        <div className="flex justify-evenly my-10">
          <Link href="/components/marketing">
            marketing <span>&rarr;</span>
          </Link>
          <Link href="/components/application">
            application <span>&rarr;</span>
          </Link>
          <Link href="/components/ecommerce">
            ecommerce <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
