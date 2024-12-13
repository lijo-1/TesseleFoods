import localFont from "next/font/local";
import "./globals.css";
import LayoutContent from "../app/LayoutContent"

const proximaextrabold = localFont({
  src: "/fonts/proximaextrabold.otf",
  variable: "--font-prox-extrabold",
  weight: "900",
});
const proximasemibold = localFont({
  src: "/fonts/proximasemibold.otf",
  variable: "--font-prox-semibold",
  weight: "700",
});

const proximaregular = localFont({
  src: "/fonts/proximaregular.otf",
  variable: "--font-prox-regular",
  weight: "400",
});

export const metadata = {
  title: "Tessele Foods | HomePage",
  description: "This is my Homepage",
};

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body
        className={`${proximaextrabold.variable} ${proximasemibold.variable} ${proximaregular.variable} font-proximaregular`}
      >
        <LayoutContent >{children}</LayoutContent>
      </body>
    </html>
  );
};

export default Layout;
