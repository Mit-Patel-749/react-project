import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Homebanner from '@/pages/components/Homebanner';
import Countersection from '@/pages/components/Countersection';
import Aboutsection from '@/pages/components/Aboutsection';
import Platformsection from '@/pages/components/Platformsection';
import Videosection from '@/pages/components/Videosection';
import Appsection from '@/pages/components/Appsection';
import Latestnewsblock from '@/pages/components/Latestnewsblock';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  	return (
		<Fragment>
			<Homebanner />
			<Countersection />
			<Aboutsection />
			<Platformsection />
			<Videosection />
			<Appsection />
			<Latestnewsblock />
		</Fragment>
  	)
}
