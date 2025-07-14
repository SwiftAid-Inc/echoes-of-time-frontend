import AuthenticateWalletIntegration from "@/components/autenticateWallet";
import FooterProgress from "@/components/footerProgress";
import Image from "next/image";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/bg.jpg"
        layout="fill"
        objectFit="cover"
        alt="Dashboard background"
        className="-z-10"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[80%] h-full bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
      </div>
<div className="w-full h-[150px] flex items-center justify-center">    
      <AuthenticateWalletIntegration />
</div>
      <main>{children}</main>
     <FooterProgress />
    </div>
  );
}
