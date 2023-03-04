import Head from "next/head";
import { Spotify } from "../components/Spotify";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify App</title>
      </Head>

      <main>
        <div className="flex flex-row gap-4 sm:gap-8 lg:gap-10">
          <div className="basis-1/2">
            <div className="grid place-items-center p-10">
              <div className="mb-12">
                <Spotify link="https://open.spotify.com/track/1CPSRRXGTQVgc1DIRWmLcg?si=b63f02bac318404d" />
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="grid place-items-center p-10">
              <div className="mb-12">
                <Spotify link="https://open.spotify.com/album/527y5zpqdZc446EbgWPd6c?si=J9Ubk3bvT-arFUpp2pMxxw" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-10">
          <Spotify wide link="https://open.spotify.com/track/0mpTtYiDqkcOjNZqJLmjsO?si=e116707491c24ffc" />
        </div>
      </main>
    </>
  );
}
