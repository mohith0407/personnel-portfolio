import './globals.css';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'My portfolio built with Next.js',
  icons:{
    icon:'/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
