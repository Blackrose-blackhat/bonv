import Image from "next/image";
import gif from "../app/assets/parallax.gif";
import tutorial from "../app/assets/tutorial.gif";
import { Button } from "@/components/ui/button";
import team from "@/app/assets/team.jpeg";
import bonv from "@/app/assets/bonv.jpeg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        style={{
          background: `url(${bonv.src})`,
        }}
        className="flex flex-col items-center justify-center w-full h-screen relative"
      >
        <div className="bg-black opacity-75 w-full h-screen flex flex-col items-center justify-center text-white">
          <div className="flex flex-row">
            <h1 className="text-shadow font-bold text-3xl mb-4 ">
              Support Bonv
            </h1>
          </div>
          <p className="text-6xl w-2/3 mt-10 font-light  text-center py-5">
            Help us win this competition for India by casting your vote for
            Bonv.
          </p>
          <p className="mt-10 w-1/2 text-center text-xl ">
            <span className="text-blue-500">BONV</span> is on a mission to
            democratize aerial mobility through our cutting-edge development of
            state-of-the-art electric aerial vehicles & its ecosystem for goods
            and people mobility
          </p>
          <p className="mt-5 text-center w-2/3 text-2xl ">
            Bonv pitched their Idea on Meet the Drappers, season 6 at
            California, competing with worldwide startup Ideas. Now its our time
            to support them in their journey.
          </p>
          <div className="py-10">
            <Link href="https://www.meetthedrapers.com/vote" target="_blank">
              <Button className="p-6 text-md bg-blue-700 ">
                Go Vote for Bonv
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div id="video" className="py-5">
        <h2 className="p-5 underline text-3xl font-semibold text-neutral-700">
          Tutorial on How to Vote:
        </h2>
        <Image src={tutorial} alt="tutorial" />
      </div>
      <div className="w-full p-20">
        <div
          className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-no-repeat rounded-md"
          style={{ background: `url(${gif.src})`, backgroundSize: "cover" }}
        >
          <div className="bg-black opacity-90 w-full text-white h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mt-96 ">Vote For BONV</h1>
            <p className="text-xl font-thin mt-10 text-center w-1/2">
              Also send the link{" "}
              <a
                className="text-blue-500 font-normal"
                href="https://www.meetthedrapers.com/vote"
              >
                https://www.meetthedrapers.com/vote{" "}
              </a>{" "}
              to your friends and family and ask them to vote for BONV.
              <br />
              <span className="text-2xl font-semibold ">Thank You</span>
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-row w-full p-5 py-20">
            <div className="flex-1 ">
              <Image src={team} alt="team" quality={100} width={950} />
            </div>
            <div className="flex-1 flex flex-col gap-40 items-center justify-center py-20">
              <p className="text-center text-xl  font-normal text-neutral-800">
                At{" "}
                <span className="text-blue-500 font-bold">
                  <a href="https://bonvaero.com/">BONV</a>
                </span>{" "}
                our mission is to revolutionize the way people experience
                convenience and safety through cutting-edge drone technology.
                Behind every successful venture lies a dedicated team of
                professionals committed to pushing the boundaries of innovation.
                Meet the passionate individuals who are driving our vision to
                provide unparalleled drone services for our valued customers
              </p>
              <Link href="https://bonvaero.com/" target="_blank">
                <Button className="p-6 text-md bg-blue-700 ">
                  {" "}
                  Explore the world of aerial mobility
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center p-10">
          <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/Y04pRPRQFDU?si=apQMTVYTlrhZ0NL8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
