import Image from 'next/image';
import Link from 'next/link';
import Blogbannerimagebg from '@/assets/images/blog-listing-banner-image.webp'


const Bloglistingbanner = () => {
	return(
		<div className="blogbanner_sec relative w-full">
			<div className="blog_banner_top pt-[69px] md:pt-[74px] relative w-full overflow-hidden">
				<div className="blogbanner_img_bg  absolute top-0 left-0 w-full h-full">
					<Image src={Blogbannerimagebg} alt="Blogbannerimagebg" className="w-full h-full object-cover" />		
				</div>
				<div className="blog_content_banner flex items-center justify-center relative min-h-[200px] md:min-h-[256px] py-8">
					<div className="container">
						<div className="blog_content_inner">
							<h1 className="text-center">Blog</h1>
							<ul className="breadcrumb_banner pt-3 flex justify-center items-center">
								<li className="font-barlow font-normal md:text-base text-sm text-textWhite"><Link href="/" className="hover:text-textColor">Home</Link></li>
								<li className="font-barlow font-normal md:text-base text-sm text-textWhite before:content-['/']">Blog</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Bloglistingbanner;