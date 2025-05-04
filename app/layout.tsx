
import './globals.css'
import 'animate.css'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}  
      </body>
    </html>
  );
}
