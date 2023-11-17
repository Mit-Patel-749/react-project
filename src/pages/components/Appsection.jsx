import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Mobileappbgimage from "@/assets/images/mobileappbgimage.webp";
import Mobileappplaystore from "@/assets/images/play-store.webp";
import Mobileappappstore from "@/assets/images/app-store.webp";
import Appsecimage from "@/assets/images/appsecimage.webp";
import Videothumb from "@/assets/images/videothumb.webp";
import IconPlay from "@/assets/images/svg/IconPlay";



const Appsection = () => {
	const [state, setState] = useState(false);
	const clickHandler = () =>{
		setState(!state);
	}
	return(
		<div className="mobileapp_sec w-full relative pt-8 mb-[126px] md:pt-16 md:mb-[236px]">
			<div className="mobileapp_bgimage absolute top-0 left-0 w-full h-full">
				<Image src={Mobileappbgimage} alt="Mobileappbgimage" className="h-full w-full object-cover"/>
			</div>
			<div className="mobileapp_sec_inner relative z-10 w-full">
				<div className="container">
					<div className="mobileapp_top w-full relative">
						<div className="mobileapp_row flex-wrap flex -mx-4">
							<div className="mobileapp_cont md:w-2/4 px-4">
								<h6 className="font-barlow font-semibold text-base leading-9 text-textWhite">Mobile App</h6>
								<h2 className="text-textWhite pb-2.5">Available on Mobile Now</h2>
								<p className="text-themeWhite leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<ul className="list_app flex -mx-2.5 pt-5">
									<li className="relative px-2.5">
										<Link href="/">
											<Image src={Mobileappplaystore} alt="Mobileappplaystore" className=""/>
										</Link>
									</li>
									<li className="relative px-2.5">
										<Link href="/">
											<Image src={Mobileappappstore} alt="Mobileappappstore" className=""/>
										</Link>
									</li>
								</ul>
							</div>
							<div className="mobileapp_img md:w-2/4 px-4">
								<Image src={Appsecimage} alt="Appsecimage" />
							</div>
						</div>
						<div className="video_appsec absolute w-full bottom-[-126px] left-0 h-[250px] lg:h-[480px] md:h-[356px] md:bottom-[-236px]">
							<div className={`videothumb w-full h-full overflow-hidden ${state ? 'hidden' : ' '}`}>
								<Image src={Videothumb} alt="Videothumb" className="w-full h-full object-cover"/>
								<div className="videoplaybtn group cursor-pointer absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-center text-themeWhite text-xl font-bold uppercase"  onClick={clickHandler}>
									<i className="text-themeWhite group-hover:text-textColor transition-all">
										<IconPlay />
									</i>
									<div className="txt_watchvideo pt-7">Watch the Video</div>
								</div>
							</div>
							<div className={`ifram_video_blk w-full h-full ${state ? ' ' : ' hidden'}`}>
								<iframe className=" w-full h-full" src="https://www.youtube.com/embed/D0UnqGm_miA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}
export default Appsection;