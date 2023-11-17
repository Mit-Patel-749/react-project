import Image from 'next/image';
import Link from 'next/link';
import Newsblkimg2 from "@/assets/images/news_blk_img_2.webp";
import Newsblkimg3 from "@/assets/images/news_blk_img_3.webp";
import Newsblkimg4 from "@/assets/images/news_blk_img_4.webp";


const Bloglisting = () => {
	return(
		<div className="recent_blog_sec py-8 md:py-16">
			<div className="container">
				<div className="title pb-10">
					<h2>Recent <span> Blog</span></h2>
				</div>
				<div className="flex flex-wrap -mx-2.5 row gap-y-5">
					<div className="w-full md:w-2/4 lg:w-1/3 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg2} alt="Newsblkimg2" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg3} alt="Newsblkimg3" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg4} alt="Newsblkimg4" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg2} alt="Newsblkimg2" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg3} alt="Newsblkimg3" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg4} alt="Newsblkimg4" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg2} alt="Newsblkimg2" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg3} alt="Newsblkimg3" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 md:w-2/4 px-2.5">
						<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
							<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
								<Image src={Newsblkimg4} alt="Newsblkimg4" className="absolute top-0 left-0 w-full h-full object-cover"/>
							</div>
							<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
								<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
								<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="view_more_btn flex justify-center pt-4 md:pt-10">
					<a className="bg-themeRed rounded-lg p-4 text-themeWhite flex py-2.5 px-4 justify-center items-center text-base uppercase font-semibold leading-[1.5] outline-none shadow-none hover:bg-textColor" href="/">View more</a>
				</div>
			</div>
		</div>
	);
}
export default Bloglisting;