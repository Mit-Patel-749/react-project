import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Bloglistingbanner from './components/Bloglistingbanner';
import Bloglisting from './components/Bloglisting';
import Appsection from './components/Appsection';



export default function Blog() {
  	return (
		<div className='blog_listing'>
			<Bloglistingbanner/>
			<Bloglisting/>
			<Appsection/>
		</div>
  	)
}
