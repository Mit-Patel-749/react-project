import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Contactbanner from './components/Contactbanner';
import Contactsection from './components/Contactsection';



export default function Blog() {
  	return (
		<Fragment>
			<Contactbanner/>
			<Contactsection/>
		</Fragment>
  	)
}
