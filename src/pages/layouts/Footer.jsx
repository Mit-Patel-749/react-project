import Image from "next/image";
import Link from "next/link";
import Newslatterimage from "@/assets/images/newsletter-bg-image.webp"
import Footerlogo from "@/assets/images/f_logo.svg"

const Footer = () => {
	return(
		<footer className="footer z-[1] w-full relative after:absolute after:bg-themeGray after:top-[107px] after:bottom-0 after:left-0 after:w-full after:-z-[1] ">
			<div className="container">
				<div className="newslatter_blk rounded-2xl md:rounded-[50px] w-full relative overflow-hidden">
					<div className="newslatter_bg absolute top-0 left-0 w-full h-full">
						<Image src={Newslatterimage} alt="Newslatterimage" className="w-full h-full object-cover" />
					</div>
					<div className="newslatter_content z-[1] relative lg:p-[60px] md:p-[40px] p-5 flex-wrap flex items-center">
						<div className="newslatter_left">
							<h2 className="text-themeWhite pb-2.5">Sign up for our newsletter!</h2>
							<p className=" text-themeWhitelight ">Get notified about updates and be the first to get early access to new episodes.</p>
						</div>
						<div className="form_newslatter pt-3 lg:pl-10 md:pl-4 md:pt-0">
							<h6 className="text-textWhite">Newsletter</h6>
							<div className="news_formblk">
								<form action="">
									<div className="news_form_row flex lg:flex-nowrap flex-wrap">
										<input type="text" className="news_form_input h-11 rounded-lg p-2.5 font-barlow font-medium text-base outline-none shadow-none leading-none" placeholder="Your Email"/>
										<div className="input_news_btn lg:pl-5 lg:pt-0 pt-5">
											<button type="submit" className="w-full bg-themeWhite rounded-lg p-4 text-themeRed flex py-2.5 px-4 justify-center items-center text-base uppercase font-medium outline-none shadow-none hover:text-textColor">
												<i className="inline-block text-opacity-0 mr-2.5">
													<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.3944 1.55279C10.225 1.214 9.87878 1 9.50001 1C9.12124 1 8.77498 1.214 8.60558 1.55279L1.60558 15.5528C1.42823 15.9075 1.47724 16.3335 1.7305 16.6386C1.98376 16.9438 2.39342 17.0705 2.77473 16.9615L7.77472 15.533C8.20402 15.4103 8.5 15.0179 8.5 14.5714V10C8.5 9.44771 8.94772 9 9.5 9C10.0523 9 10.5 9.44771 10.5 10V14.5714C10.5 15.0179 10.796 15.4103 11.2253 15.533L16.2253 16.9615C16.6066 17.0705 17.0163 16.9438 17.2695 16.6386C17.5228 16.3335 17.5718 15.9075 17.3944 15.5528L10.3944 1.55279Z" className="fill-current stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</i>
												Subscribe
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_main_wrap mt-8 md:mt-14 pt-1">
					<div className="f_logo_blk relative z-[2] after:absolute after:top-2/4 -after:translate-x-1/2 after:h-[1px] after:w-full after:z-[-1] flex justify-center">
						<div className="f_logo flex xl:px-10 lg:px-8 bg-themeGray">
							<Link href="/" className="flex ">
								<Image src={Footerlogo} alt="Footerlogo" />
							</Link>
						</div>
					</div>
					<div className="f_bottom_more pt-9">
						<div className="f_bottom_more_row flex md:flex-nowrap flex-wrap justify-center md:justify-between -mx-4">
							<ul className="f_bottom_more_links px-4 order-1">
								<li className="text-center"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Privacy Policy</Link></li>
								<li className="text-center mt-5"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Terms & Condition</Link></li>
								<li className="text-center  mt-5"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">About</Link></li>
								<li className="text-center  mt-5"><Link href="/blog" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Blog</Link></li>
							</ul>
							<ul className="f_social flex items-center md:w-auto self-start -mx-5 px-4 pt-8 md:pt-6 md:order-2 order-3">
								<li className="px-5 flex">
									<Link href='/' className="flex text-textColor hover:text-themeRed">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z" className="fill-current" fillOpacity="0.83"/>
										</svg>
									</Link>
								</li>
								<li className="px-5 flex">
									<Link href='/' className="flex text-textColor hover:text-themeRed">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20 7.53125C19.4167 7.79167 18.7865 7.96875 18.1094 8.0625C18.8177 7.64583 19.3021 7.03646 19.5625 6.23438C18.8854 6.63021 18.1875 6.89583 17.4688 7.03125C16.8333 6.34375 16.0365 6 15.0781 6C14.1719 6 13.3984 6.32031 12.7578 6.96094C12.1172 7.60156 11.7969 8.375 11.7969 9.28125C11.7969 9.58333 11.8229 9.83333 11.875 10.0312C10.5312 9.95833 9.27083 9.61979 8.09375 9.01562C6.91667 8.41146 5.91667 7.60417 5.09375 6.59375C4.79167 7.11458 4.64062 7.66667 4.64062 8.25C4.64062 9.4375 5.11458 10.349 6.0625 10.9844C5.57292 10.974 5.05208 10.8385 4.5 10.5781V10.6094C4.5 11.3906 4.76042 12.0859 5.28125 12.6953C5.80208 13.3047 6.44271 13.6823 7.20312 13.8281C6.90104 13.9115 6.63542 13.9531 6.40625 13.9531C6.27083 13.9531 6.06771 13.9323 5.79688 13.8906C6.01562 14.5469 6.40365 15.0885 6.96094 15.5156C7.51823 15.9427 8.15104 16.1615 8.85938 16.1719C7.65104 17.1094 6.29167 17.5781 4.78125 17.5781C4.51042 17.5781 4.25 17.5625 4 17.5312C5.54167 18.5104 7.21875 19 9.03125 19C10.1979 19 11.2917 18.8151 12.3125 18.4453C13.3333 18.0755 14.2083 17.5807 14.9375 16.9609C15.6667 16.3411 16.2943 15.6276 16.8203 14.8203C17.3464 14.013 17.737 13.1693 17.9922 12.2891C18.2474 11.4089 18.375 10.5312 18.375 9.65625C18.375 9.46875 18.3698 9.32812 18.3594 9.23438C19.0156 8.76562 19.5625 8.19792 20 7.53125ZM24 4.5V19.5C24 20.7396 23.5599 21.7995 22.6797 22.6797C21.7995 23.5599 20.7396 24 19.5 24H4.5C3.26042 24 2.20052 23.5599 1.32031 22.6797C0.440104 21.7995 0 20.7396 0 19.5V4.5C0 3.26042 0.440104 2.20052 1.32031 1.32031C2.20052 0.440104 3.26042 0 4.5 0H19.5C20.7396 0 21.7995 0.440104 22.6797 1.32031C23.5599 2.20052 24 3.26042 24 4.5Z" className="fill-current" fillOpacity="0.83"/>
										</svg>
									</Link>
								</li>
								<li className="px-5 flex">
									<Link href='/' className="flex text-textColor hover:text-themeRed">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" className="fill-current" fillOpacity="0.83"/>
											<path fillRule="evenodd" clipRule="evenodd" d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z" className="fill-current" fillOpacity="0.83"/>
										</svg>
									</Link>
								</li>
							</ul>
							<ul className="f_bottom_more_links px-4 md:order-3 order-2">
								<li className="text-center"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Senior Hosts</Link></li>
								<li className="text-center  mt-5"><Link href="/contact" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Contact</Link></li>
								<li className="text-center  mt-5"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Advertising</Link></li>
								<li className="text-center  mt-5"><Link href="/" className="text-textLightblack text-sm inline-block hover:text-themeRed font-barlow font-medium leading-[171.429%]">Support</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="back_top_btn flex justify-center mt-8 pb-5">
					<Link href='#' className="flex justify-center items-center font-bold uppercase text-base font-barlow text-textColor hover:text-themeRed">
						Back to Top 
						<i className="ml-2.5 flex">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 8L8 1L15 8M1 16L8 9L15 16" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</i>
					</Link>
				</div>
			</div>
			<div className="f_bootm_copy bg-themeRed py-5">
				<div className="container">
					<p className="text-themeWhitelight text-sm font-normal font-raleway text-center">Copyright @2022 <span className="font-bold font-barlow text-textWhite">HelloPodcastr</span>. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer;