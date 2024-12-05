import Image from "next/image";
import FullPage from "./components/fullPage";
import { generateContent } from "./api/generateContent";
import Intro from "./components/intro";

export default function Home() {
  const content = generateContent();
  
  return (
    <>
      <Intro/>
      <FullPage text={content}></FullPage>;
    </>
  );
}
