import Image from "next/image";
import Applepodcast from '@/assets/images/applepodcast-logo.svg'
import Googlepodcast from '@/assets/images/googlepodcast-logo.svg'
import Spotify from '@/assets/images/spotify-logo.svg'
import Stitcher from '@/assets/images/stitcher-logo.svg'
import Soundcloud from '@/assets/images/soundcloud-logo.svg'

const Platformsection = () => {
	return(
		<div className="plateform_sec w-full relative md:py-16 py-8 bg-themeGray overflow-hidden">
			<div className="container">
				<div className="plateform_sec_inner w-full relative">
					<h6 className="font-barlow font-semibold text-base text-[#1c304a80] pb-1">Platform</h6>
					<h2><span>Join us </span> on every major platform!</h2>
					<div className="podcast_row flex flex-wrap  -mx-3 gap-y-3 pt-5 md:gap-y-5 md:-mx-5 md:pt-10">
						<div className="podcast_col px-3 md:px-5">
							<div className="podcast_logo flex">
								<Image src={Applepodcast} alt="Applepodcast"/>
							</div>
						</div>
						<div className="podcast_col px-3 md:px-5">
							<div className="podcast_logo">
								<Image src={Googlepodcast} alt="Googlepodcast"/>
							</div>
						</div>
						<div className="podcast_col px-3 md:px-5">
							<div className="podcast_logo">
								<Image src={Spotify} alt="Spotify"/>
							</div>
						</div>
						<div className="podcast_col px-3 md:px-5">
							<div className="podcast_logo">
								<Image src={Stitcher} alt="Stitcher"/>
							</div>
						</div>
						<div className="podcast_col px-3 md:px-5">
							<div className="podcast_logo">
								<Image src={Soundcloud} alt="Soundcloud"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}
export default Platformsection;