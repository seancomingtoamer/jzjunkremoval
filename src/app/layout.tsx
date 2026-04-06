import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JZ's Junk Removal Services | Atlanta, GA",
  description:
    "Professional junk removal, lawn care, moving, and cleaning services in Atlanta. Fast, affordable, and reliable. Call today for a free quote!",
  keywords:
    "junk removal Atlanta, lawn care Atlanta, moving services ATL, cleaning services Atlanta, JZ junk removal",
  openGraph: {
    title: "JZ's Junk Removal Services | Atlanta, GA",
    description:
      "Professional junk removal, lawn care, moving, and cleaning services in Atlanta. Fast, affordable, and reliable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* DEMO WATERMARK - Remove this block when client pays */}
        <div style={{position:'fixed',top:0,left:0,width:'100%',zIndex:9999,backgroundColor:'#ff0000',color:'#fff',textAlign:'center',padding:'10px 0',fontSize:'18px',fontWeight:'bold',letterSpacing:'2px'}}>
          DEMO SITE — NOT FOR COMMERCIAL USE
        </div>
        <div style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%) rotate(-35deg)',zIndex:9998,fontSize:'120px',fontWeight:'900',color:'rgba(255,0,0,0.12)',pointerEvents:'none',userSelect:'none',letterSpacing:'20px',whiteSpace:'nowrap'}}>
          DEMO
        </div>
        {/* END DEMO WATERMARK */}
        {children}
      </body>
    </html>
  );
}
