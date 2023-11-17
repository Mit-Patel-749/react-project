import Image from "next/image";
import Link from "next/link";
import Welcomeimage from '@/assets/images/welcome-image.webp'

const Aboutsection = () => {
	return(
		<div className="welcome_sec w-full relative py-8 md:py-16">
			<div className="container">
				<div className="welcome_sec_inner w-full relative">
					<div className="flex flex-wrap items-center -mx-4">
						<div className=" w-full md:w-2/4 px-4">
							<div className="welcome_image w-full relative">
								<Image src={Welcomeimage} alt="Welcomeimage" className="w-full" />
							</div>
						</div>
						<div className="w-full md:py-0 pt-5 md:w-2/4 px-4">
							<div className="welcom_dtl w-full relative">
								<h6 className="font-barlow font-semibold text-base text-[#1c304a80]">WELCOME!</h6>
								<h2 className="pb-5">Best Podcasts for Curious Minds</h2>
								<h5 className="font-barlow font-medium md:text-xl leading-[180%] text-base text-[#18273af0] pb-5">Our pick of the best podcasts on Spotify, Apple Podcasts and more covering technology, culture, science, politics and new ideas</h5>
								<p className="text-textPera leading-[187.5%]">Podcasts are now big business. In this post-Serial audio world, journalists, celebrities, academics and yes, anyone else who owns a mixing desk and a microphone, now has a regular show.</p>
								<div className="view_more_btn flex pt-4 md:pt-8">
									<Link href="/" className="bg-themeRed rounded-lg p-4 text-themeWhite flex py-2.5 px-4 justify-center items-center text-base uppercase font-semibold leading-[1.5] outline-none shadow-none hover:bg-textColor">View more</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}
export default Aboutsection;