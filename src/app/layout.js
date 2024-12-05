import "./globals.css";

export const metadata = {
  title: "Reading Rainbot",
  description: "Reading through AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
