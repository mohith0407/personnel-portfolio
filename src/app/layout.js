import './globals.css';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'My portfolio built with Next.js',
  icons:{
    icon:'/favicon.png'
  },
  other: {
    'google-site-verification': 'EP3ee9-7c2MwJQsz70zbQN0CVIbloYdRYeuDZ3bOHcI',
  },
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
