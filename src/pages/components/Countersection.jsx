import CountUp from 'react-countup';


const Countersection = () => {
	return(
		<div className="counter_sec relative w-full bg-themeGray md:py-14 py-8">
			<div className="container">
				<div className="counter_sec_inner relative w-full">
					<div className="row_counter flex-wrap relative flex -m-2.5">
						<div className="counter_col lg:w-1/4 w-3/6 p-2.5 flex">
							<div className="counter_box flex w-full flex-col justify-center bg-textWhite text-center rounded-lg p-4 lg:min-h-[160px] md:min-h-[140px] min-h-0">
								<div className="count_number lg:text-[64px] md:text-[44px] text-[24px] leading-normal pb-1 font-barlow font-normal">
									<CountUp end={625} enableScrollSpy suffix="+" />
								</div>
								<div className="count_number_txt font-barlow font-semibold text-base text-themeRed uppercase">
									DAILY LISTNER
								</div>
							</div>
						</div>
						<div className="counter_col lg:w-1/4 w-3/6 p-2.5 flex">
							<div className="counter_box flex w-full flex-col justify-center bg-textWhite text-center rounded-lg p-4 lg:min-h-[160px] md:min-h-[140px] min-h-0">
								<div className="count_number  lg:text-[64px] md:text-[44px] text-[24px] leading-normal pb-1 font-barlow font-normal">
									<CountUp end={2.4} enableScrollSpy separator="." suffix="m" />
								</div>
								<div className="count_number_txt font-barlow font-semibold text-base text-themeRed uppercase">
								SUBSCRIBERS
								</div>
							</div>
						</div>
						<div className="counter_col lg:w-1/4 w-3/6 p-2.5 flex">
							<div className="counter_box flex w-full flex-col justify-center bg-textWhite text-center rounded-lg p-4 lg:min-h-[160px] md:min-h-[140px] min-h-0">
								<div className="count_number  lg:text-[64px] md:text-[44px] text-[24px] leading-normal pb-1 font-barlow font-normal">
									<CountUp end={150} enableScrollSpy suffix="k" />
								</div>
								<div className="count_number_txt font-barlow font-semibold text-base text-themeRed uppercase">
								EPISODES
								</div>
							</div>
						</div>
						<div className="counter_col lg:w-1/4 w-3/6 p-2.5 flex">
							<div className="counter_box flex w-full flex-col justify-center bg-textWhite text-center rounded-lg p-4 lg:min-h-[160px] md:min-h-[140px] min-h-0">
								<div className="count_number  lg:text-[64px] md:text-[44px] text-[24px] leading-normal pb-1 font-barlow font-normal">
									<CountUp end={45} enableScrollSpy suffix="k" />
								</div>
								<div className="count_number_txt font-barlow font-semibold text-base text-themeRed uppercase">
									HOSTS
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Countersection;