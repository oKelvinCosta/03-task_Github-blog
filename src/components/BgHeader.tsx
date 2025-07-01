import Logo from "@/assets/Logo.png";
import Img from "@/components/Img";

export default function BgHeader() {
  return (
    <div
      className={`flex min-h-[290px] flex-col items-center bg-[url(/bg-header.webp)] bg-cover bg-center`}
    >
      <Img src={Logo} className={`mt-20 w-full max-w-[140px]`} />
    </div>
  );
}
