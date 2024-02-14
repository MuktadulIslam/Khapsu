import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

function Page() {
    return ( <>
        <p className={`${inter.className} text-4xl`}>Hello World</p>
    </> );
}

export default Page;