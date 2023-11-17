import Image from 'next/image';
import Homebannerimagebg from '@/assets/images/home_banner_bg_image.webp'
import Homebannerimage from '@/assets/images/homebannerimage.webp'
import Audioathimage from '@/assets/images/audio_auth_img.webp'
import Link from 'next/link';
import Audioplayer from '@/pages/components/Audioplayer';

const Homebanner = () => {
	return(
		<div className="homebanner_sec relative w-full">
			<div className="home_banner_top pt-[74px] relative w-full overflow-hidden">
				<div className="homebanner_img_bg  absolute top-0 left-0 w-full h-full">
					<Image src={Homebannerimagebg} alt="Homebannerimagebg" className="w-full h-full object-cover" />		
				</div>
				<div className="home_banner_txtwrap relative z-10 w-full">
					<div className="container">
						<div className="banner_inner_txt flex flex-wrap md:flex-row-reverse -mx-4">
							<div className="homebanner_txt flex py-10  w-full md:w-2/4 px-4">
								<div className="self-center w-full">
									<p className="font-barlow font-normal lg:text-xl md:text-lg text-base text-textWhite pb-2.5">Available on Apple Soundcast & Spotify</p>
									<h1 className='uppercase'>New Episode <br />Available Now!</h1>
									<div className="banner_btn flex pt-5">
										<Link href="/" className='bg-themeWhite rounded-lg p-4 text-themeRed flex py-2.5 px-4 justify-center items-center text-base uppercase font-medium outline-none shadow-none hover:text-textColor'>
											<i className='flex mr-2.5'>
												<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.83945 12.7951L4.7 12.9979V12.1138V3.00001C4.7 2.857 4.80094 2.73388 4.94117 2.70583L14.9412 0.705834C15.0293 0.688208 15.1207 0.711024 15.1902 0.768006C15.2597 0.824987 15.3 0.910131 15.3 1.00001V12C15.3 12.2454 15.1508 12.5533 14.733 12.8318C14.3202 13.107 13.7095 13.3 13 13.3C12.2905 13.3 11.6798 13.107 11.267 12.8318C10.8492 12.5533 10.7 12.2454 10.7 12C10.7 11.7546 10.8492 11.4467 11.267 11.1682C11.6798 10.893 12.2905 10.7 13 10.7C13.2976 10.7 13.5803 10.7341 13.8395 10.7951L14.7 10.9979V10.1138V4.21981V3.36595L13.8627 3.5334L5.86272 5.1334L5.3 5.24595V5.81981V14C5.3 14.2454 5.15077 14.5533 4.73303 14.8318C4.32018 15.107 3.7095 15.3 3 15.3C2.29049 15.3 1.67982 15.107 1.26697 14.8318C0.849225 14.5533 0.7 14.2454 0.7 14C0.7 13.7546 0.849225 13.4467 1.26697 13.1682C1.67982 12.893 2.29049 12.7 3 12.7C3.29758 12.7 3.58026 12.7341 3.83945 12.7951Z" className="fill-current stroke-current" strokeWidth="1.4"/>
												</svg>
											</i>
											Listen now 
										</Link>
									</div>
								</div>
							</div>
							<div className="homebanner_img self-end w-full md:w-2/4 px-4 pt-5">
								<div className="homebanner_img_inner">
									<Image src={Homebannerimage} alt="Homebannerimage" className=' lg:max-w-none lg:float-right ' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home_banner_bottom w-full relative lg:py-[30px] py-[20px] bg-themeGray">
				<div className="container">
					<div className="home_banner_bottom_inner flex flex-wrap justify-between">
						<div className="audioplaer_dtl_left flex items-center">
							<div className="audioplaer_img  rounded-md overflow-hidden">
								<Image src={Audioathimage} alt="Audioathimage"  />
							</div>
							<div className="audioplaer_dtl pl-2.5">
								<div className="title_player text-base font-barlow font-semibold text-textColor">Night One Hundred Twenty One</div>
								<p className='text-sm font-barlow font-normal text-textPera'>Sleeping Pill with Inka</p>
							</div>
						</div>
						<div className="audioplaer_right pt-2 md:top-0 ">
							<Audioplayer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Homebanner;