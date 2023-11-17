const Contactsection = () => {
	return(
		<div className="contact_sec md:py-16 py-8 relative w-full">
			<div className="container">
				<div className="contact_inner relative w-full">
					<div className="contact_title relative w-full max-w-[850px] mx-auto text-center">
						<h2 className="pb-5">Get In Touch</h2>
						<p className="text-textColorGray">Duis mi velit, auctor vitae leo a, luctus congue dolor. Nullam at velit quis tortor malesuada ultrices vitae vitae lacus. Curabitur tortor purus, tempor in dignissim eget, convallis in lorem. Pellentesque non magna est.</p>
					</div>
					<div className="form_blk w-full relative md:py-16 py-8">
						<form action="">
							<div className="form_row flex -mx-[15px] flex-wrap md:gap-y-8 gap-y-6">
								<div className="form_col lg:w-2/6 md:w-2/4 w-full px-[15px]">
									<label htmlFor="full_name_input" className="text-sm font-normal font-barlow text-[#353535f0] block flex-wrap pb-2.5">Full Name</label>
									<input type="text" name="" id="full_name_input" placeholder="Your Name" className="form_field rounded-[5px] border border-solid border-[#00000029] h-11 w-full px-5 placeholder:text-[#D6D6D6] text-base font-normal font-barlow text-[#1E2124] outline-none shadow-none focus:border-themeRed"/>
								</div>
								<div className="form_col lg:w-2/6 md:w-2/4 w-full px-[15px]">
									<label htmlFor="full_name_input" className="text-sm font-normal font-barlow text-[#353535f0] block flex-wrap pb-2.5">Phone number</label>
									<input type="tel" name="" id="full_name_input" placeholder="123-456-7890" className="form_field rounded-[5px] border border-solid border-[#00000029] h-11 w-full px-5 placeholder:text-[#D6D6D6] text-base font-normal font-barlow text-[#1E2124] outline-none shadow-none focus:border-themeRed"/>
								</div>
								<div className="form_col lg:w-2/6 w-full px-[15px]">
									<label htmlFor="full_name_input" className="text-sm font-normal font-barlow text-[#353535f0] block flex-wrap pb-2.5">Email</label>
									<input type="tel" name="" id="full_name_input" placeholder="Your email here" className="form_field rounded-[5px] border border-solid border-[#00000029] h-11 w-full px-5 placeholder:text-[#D6D6D6] text-base font-normal font-barlow text-[#1E2124] outline-none shadow-none focus:border-themeRed"/>
								</div>
								<div className="form_col w-full px-[15px]">
									<label htmlFor="full_name_input" className="text-sm font-normal font-barlow text-[#353535f0] block flex-wrap pb-2.5">Message</label>
									<textarea type="tel" name="" id="full_name_input" placeholder="Your email here" className="form_field rounded-[5px] border border-solid border-[#00000029] w-full px-5 placeholder:text-[#D6D6D6] text-base font-normal font-barlow text-[#1E2124] outline-none shadow-none focus:border-themeRed py-3 h-[100px] resize-none" />
								</div>
								<div className="form_col text-center w-full px-[15px]">
									<input type="submit" value="Send message" className="bg-themeRed rounded-lg text-themeWhite flex h-11 px-4 text-base uppercase font-semibold leading-[1.5] outline-none shadow-none hover:bg-textColor mx-auto" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

		</div>
	);
}
export default Contactsection;