import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Blogdetailbanner from '@/pages/components/Blogdetailbanner';
import Platformsection from '@/pages/components/Platformsection';
import Appsection from '@/pages/components/Appsection';
import Blogdetailcontent from '@/pages/components/Blogdetailcontent';


export default function Home() {
  	return (
		<Fragment>
			<div className="blog_detail_page">
				<Blogdetailbanner/>
				<Blogdetailcontent/>
				<Platformsection/>
				<Appsection/>
			</div>
		</Fragment>
  	)
}
