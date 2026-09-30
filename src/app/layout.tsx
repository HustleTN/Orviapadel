import "./globals.css";
import SiteLoader from "../../components/site-loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
