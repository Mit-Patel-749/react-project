import  SliderComponent from '@/pages/components/SliderComponent'

import Link from "next/link";

const Latestnewsblock = () => {
	return(
		<div className="latest_newsblog_sec w-full relative py-8 md:py-16 overflow-hidden">
			<div className="container">
				<div className="latest_newsblog_inner w-full relative">
					<div className="latest_newsblog_title flex items-center justify-between pb-5 md:pb-10">
						<div className="title">
							<h2>Latest <span>News & Blog</span></h2>
						</div>	
						<div className="bowsall_btb_box flex">
							<Link className="flex items-center justify-between font-barlow font-medium text-xl text-textColor hover:text-themeRed " href="blog">
								Browse All
								<i className="flex ml-2">
									<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.5 1.75L14.75 7M14.75 7L9.5 12.25M14.75 7L1.25 7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</i>
							</Link>
						</div>
					</div>
					<div className="latest_newsblog_slideblk relative">
						<SliderComponent/>
					</div>
				</div>
			</div>
		</div>		
	);
}
export default Latestnewsblock;