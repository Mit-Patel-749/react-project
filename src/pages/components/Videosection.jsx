import Image from "next/image";
import Link from "next/link";
import Videoimage1 from '@/assets/images/video-image-1.webp'
import Videoimage2 from '@/assets/images/video-image-2.webp'
import Videoimage3 from '@/assets/images/video-image-3.webp'


const Videosection = () => {
	return(
		<div className="popular_video_sec w-full relative py-8 md:py-16">
			<div className="container">
				<div className="popular_video__inner w-full relative">
					<div className="videotitle_sec flex w-full items-center justify-between">
						<h2><span>Popular</span> Videos</h2>
						<div className="bowsall_btb_box flex">
							<Link href="/" className="flex items-center justify-between font-barlow font-medium text-xl text-textColor hover:text-themeRed ">
								Browse All 
								<i className="flex ml-2">
									<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.5 1.75L14.75 7M14.75 7L9.5 12.25M14.75 7L1.25 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</i>
							</Link>
						</div>
					</div>
					<div className="video_content_parts pt-7 md:pt-10 flex-wrap flex flex-row-reverse -mx-3.5">
						<div className="video_main_blk px-3.5">
							<div className="video_box relative w-full">
								<div className="video_box_img relative w-full overflow-hidden rounded-xl">
									<Image src={Videoimage1} alt="Videoimage1" className="absolute top-0 left-0 w-full h-full object-cover"/>
								</div>
								<div className="video_box_dtl absolute z-[2] bottom-0 left-0 w-full p-3.5 md:px-7 md:pb-7 md:pt-11 flex after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-[1]">
									<div className="play_btn_box flex">
										<Link href="/" className="flex text-themeRed hover:text-textColor">
											<svg width="80" height="80" className="w-14 h-auto md:w-auto" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="40" cy="40" r="40" className="fill-current"/>
												<path d="M59.2998 39.134C59.9665 39.5189 59.9665 40.4811 59.2998 40.866L31.0998 57.1473C30.4331 57.5322 29.5998 57.0511 29.5998 56.2813L29.5998 23.7187C29.5998 22.9489 30.4331 22.4678 31.0998 22.8527L59.2998 39.134Z" fill="white"/>
											</svg>
										</Link>
									</div>
									<div className="video_box_dtl_des pl-5">
										<div className="eposide_numb pb-1 text-textWhite text-base font-barlow uppercase font-medium">Episode #6</div>
										<div className="eposide_name text-textWhite font-barlow text-xl md:text-3xl font-bold">Why Won’t You Date Me?</div>
										<div className="eposide_date text-textWhite text-base font-barlow uppercase font-medium">29 March, 2022</div>
									</div>
								</div>
							</div>
						</div>
						<div className="video_sub_blk flex lg:flex-col pt-4 lg:pt-0 px-3.5">
							<div className="video_sub_inner w-full lg:w-full md:w-2/4 pr-2">
								<div className="video_box relative w-full">
									<div className="video_box_img relative w-full overflow-hidden rounded-xl">
										<Image src={Videoimage2} alt="Videoimage2" className="absolute top-0 left-0 w-full h-full object-cover"/>
									</div>
									<div className="video_box_dtl flex items-start pt-2.5">
										<div className="play_btn_box min-w-[40px]">
											<Link href="/" className="flex text-themeRed hover:text-textColor">
												<svg width="80" height="80" className="w-10 h-auto" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="40" cy="40" r="40" className="fill-current"/>
													<path d="M59.2998 39.134C59.9665 39.5189 59.9665 40.4811 59.2998 40.866L31.0998 57.1473C30.4331 57.5322 29.5998 57.0511 29.5998 56.2813L29.5998 23.7187C29.5998 22.9489 30.4331 22.4678 31.0998 22.8527L59.2998 39.134Z" fill="white"/>
												</svg>
											</Link>
										</div>
										<div className="video_box_dtl_des pl-2.5">
											<div className="eposide_numb pb-0.5 text-themeRed text-xs font-barlow uppercase font-medium">Episode #1</div>
											<div className="eposide_name pb-0.5 text-textColor font-barlow text-base font-semibold">Black Girl Song Book</div>
											<div className="eposide_date text-[#1c304a80] text-xs font-barlow uppercase font-medium">15 January, 2022</div>
										</div>
									</div>
								</div>
							</div>
							<div className="video_sub_inner  w-full lg:pt-4 lg:w-full md:w-2/4 pl-2">
								<div className="video_box relative w-full">
									<div className="video_box_img relative w-full overflow-hidden rounded-xl">
										<Image src={Videoimage3} alt="Videoimage3" className="absolute top-0 left-0 w-full h-full object-cover"/>
									</div>
									<div className="video_box_dtl flex items-start pt-2.5">
										<div className="play_btn_box min-w-[40px]">
											<Link href="/" className="flex text-themeRed hover:text-textColor">
												<svg width="80" height="80" className="w-10 h-auto" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="40" cy="40" r="40" className="fill-current"/>
													<path d="M59.2998 39.134C59.9665 39.5189 59.9665 40.4811 59.2998 40.866L31.0998 57.1473C30.4331 57.5322 29.5998 57.0511 29.5998 56.2813L29.5998 23.7187C29.5998 22.9489 30.4331 22.4678 31.0998 22.8527L59.2998 39.134Z" fill="white"/>
												</svg>
											</Link>
										</div>
										<div className="video_box_dtl_des pl-2.5">
											<div className="eposide_numb text-themeRed text-xs font-barlow uppercase font-medium">Episode #1</div>
											<div className="eposide_name text-textColor font-barlow text-base font-semibold">The New Yorker Fiction Podcast</div>
											<div className="eposide_date text-[#1c304a80] text-xs font-barlow uppercase font-medium">08 June, 2022</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}
export default Videosection;