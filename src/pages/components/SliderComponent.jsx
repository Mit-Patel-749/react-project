import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Newsblkimg1 from "@/assets/images/news_blk_img_1.webp";
import Newsblkimg2 from "@/assets/images/news_blk_img_2.webp";
import Newsblkimg3 from "@/assets/images/news_blk_img_3.webp";
import Newsblkimg4 from "@/assets/images/news_blk_img_4.webp";
import Newsblkimg5 from "@/assets/images/news_blk_img_5.webp";


const SliderComponent = () => {

	const swiperRef = useRef();
	const sliderSettings = {
		440: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	};

	return (
			<>
			<Swiper
				loop={true}
				
				spaceBetween={20}
				breakpoints={sliderSettings}
				// navigation={true}
				// modules={[Navigation]}
				onBeforeInit={(swiper) => {
				swiperRef.current = swiper;
				}}
			>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg1} alt="Newsblkimg1" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg2} alt="Newsblkimg2" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg3} alt="Newsblkimg3" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg4} alt="Newsblkimg4" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg5} alt="Newsblkimg5" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg1} alt="Newsblkimg1" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg2} alt="Newsblkimg2" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg3} alt="Newsblkimg3" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg4} alt="Newsblkimg4" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="blog/blog-detail" className="box_slider relative w-full overflow-hidden rounded-xl block">
						<div className="image_box_slider relative w-full after:w-full after:px-[50%] after:block after:py-[65.5%] overflow-hidden">
							<Image src={Newsblkimg5} alt="Newsblkimg5" className="absolute top-0 left-0 w-full h-full object-cover"/>
						</div>
						<div className="image_slider_dtl p-5 absolute left-0 right-0 bottom-0">
							<p className="font-barlow font-medium text-base leading-normal text-textWhite">Powerful podcast episode is now in your area just enjoy</p>
							<div className="date_newsblock pt-2 font-barlow font-normal text-xs leading-normal text-themeWhitelight">18 June, 2021</div>
						</div>
					</Link>
				</SwiperSlide>
				
			</Swiper>
			<div className="switer_btn flex justify-center pt-6 md:pt-10">
				<button onClick={() => swiperRef.current?.slidePrev()} className="group mx-2.5 outline-none shadow-none">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="20" cy="20" r="19" stroke="#E12929" className="fill-none transition-all group-hover:fill-themeRed " strokeWidth="2"/>
						<path d="M18 27L11 20M11 20L18 13M11 20L29 20" className="transition-all stroke-themeRed group-hover:stroke-textWhite" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
				<button onClick={() => swiperRef.current?.slideNext()} className="group mx-2.5 outline-none shadow-none">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="20" cy="20" r="19" className="fill-none transition-all group-hover:fill-themeRed " stroke="#E12929" strokeWidth="2"/>
						<path d="M22 13L29 20M29 20L22 27M29 20L11 20" className="transition-all stroke-themeRed group-hover:stroke-textWhite" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
		</>
	);
	};

export default SliderComponent;