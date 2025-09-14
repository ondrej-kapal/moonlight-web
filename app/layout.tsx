export const metadata = {
  title: "Tattoo by Moonlight",
  description: "Stínování, black dot work,",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
