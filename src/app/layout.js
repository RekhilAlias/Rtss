import "./globals.scss";

export const metadata = {
  title: "RTS",
  description: "Leading innovative future product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </head>
      
      <body  suppressHydrationWarning={true} >{children}</body>
    </html>
  );
}
