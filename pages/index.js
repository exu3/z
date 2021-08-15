import Head from "next/head";
import Plx from "react-plx";

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "translateY",
      },
    ],
  },
];

const layer2 = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "translateY",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-center">hi</h1>
        <div className="relative">
          <img src="/valley/0.png" alt="valley" className="absolute" />
          <img src="/valley/1.png" alt="valley" className="absolute" />
          <img src="/valley/2.png" alt="valley" className="absolute" />
          <img src="/valley/3.png" alt="valley" className="absolute" />
          <img src="/valley/4.png" alt="valley" className="absolute" />
          <Plx parallaxData={layer2}>
            <img src="/valley/5.png" alt="valley" className="absolute" />
          </Plx>
          <Plx parallaxData={parallaxData}>
            <img src="/valley/6.png" alt="valley" className="absolute" />
          </Plx>
        </div>
        <div className="bg-red-900 relative mt-96">
          <h1>hi</h1>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
          <p>hihihihi</p>
        </div>
      </main>
    </div>
  );
}
