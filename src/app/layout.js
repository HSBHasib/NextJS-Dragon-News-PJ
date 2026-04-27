import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
   weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          {children}
          <ToastContainer />
      </body>
    </html>
  );
}
