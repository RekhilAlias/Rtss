import "./globals.css";

export const metadata = {
  title: "RTS",
  description: "Leading innovative future product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} >{children}</body>
    </html>
  );
}
