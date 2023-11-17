import Image from 'next/image';
import Link from 'next/link';
import Blogbannerimagebg from '@/assets/images/blog-listing-banner-image.webp'


const Blogdetailbanner = () => {
	return(
		<div className="blogdetailbanner_sec relative w-full">
			<div className="blog_detail_banner_top pt-[69px] md:pt-[74px] relative w-full overflow-hidden">
				<div className="blogbanner_detail_img_bg  absolute top-0 left-0 w-full h-full">
					<Image src={Blogbannerimagebg} alt="Blogbannerimagebg" className="w-full h-full object-cover" />		
				</div>
				<div className="blog_detail_content_banner relative min-h-[200px] md:min-h-[256px] py-10">
					<div className="container">
						<div className="blog_detail_content_inner">
							<div className="back_block flex w-full md:max-w-[83.3333%] md:px-4 mx-auto">
								<Link href="/blog" className="flex items-center font-barlow text-xl font-medium leading[1.8] text-themeWhite hover:text-textColor">
									<i className="flex mr-[5px]">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7.5 3.75L2.25 9M2.25 9L7.5 14.25M2.25 9L15.75 9" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</i>
									Blog
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Blogdetailbanner;