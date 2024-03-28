// import Image from "next/image";
// import Header from "./components/Toggle";
import Sports from "./components/Sports";
import Collections from "./components/Collections";
import Carousal from "./components/Carousal";

export default function Home() {
  return (
    <div className="bg-lightzinc dark-body max-h-full py-10">
      {/* <Header/> */}
      <Sports/>
      <Collections/>
      {/* <div className="m-10">
      <Carousal/> 
      </div> */}
    </div>
  );
}
