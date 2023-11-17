import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import { useState } from "react";

const Header = () => {
	const [state, setState] = useState(false);
	const clickHandler = () =>{
		setState(!state);
	}
	return(
		<header id="header" className={`group  py-6 absolute top-0 left-0 w-full z-50 bg-textWhite ${state ? 'activeheader' : ' '}`}>
			<div className="container">
				<div className="header_inner flex justify-between items-center">
					<div className="logo flex">
						<Link href="/" className="flex">
							<Image src={Logo} alt="Logo"></Image>
						</Link>			
					</div>
					<nav className="navigation_main fixed top-0 right-0 bg-textWhite z-40 transition-all opacity-0 invisible py-[70px] px-[15px]  w-0 h-screen overflow-hidden md:flex md:relative md:top-auto md:right-auto md:bg-none md:z-auto md:transition-none md:opacity-100 md:visible md:py-0 md:px-0 md:w-auto md:h-auto md:overflow-visible group-[.activeheader]:w-screen group-[.activeheader]:opacity-100 group-[.activeheader]:visible group-[.activeheader]:overflow-y-auto md:group-[.activeheader]:w-auto md:group-[.activeheader]:opacity-100 md:group-[.activeheader]:visible md:group-[.activeheader]:overflow-visible">
                        <ul className="main-menu md:flex">
                            <li><Link href="/" className="font-raleway font-semibold hover:text-themeRed">Home</Link></li>
                            <li><Link href="/about" className="font-raleway font-semibold hover:text-themeRed">About</Link></li>
                            <li><Link href="/podcast" className="font-raleway font-semibold hover:text-themeRed">Podcast</Link></li>
                            <li><Link href="/video" className="font-raleway font-semibold hover:text-themeRed">Video</Link></li>
                            <li><Link href="/blog" className="font-raleway font-semibold hover:text-themeRed">Blog</Link></li>
                            <li><Link href="/contact" className="font-raleway font-semibold hover:text-themeRed">Contact Us</Link></li>
                        </ul>
                    </nav>
					<div className="menubar md:hidden z-50 h-auto text-[0px] leading-normal">
                    	<button className="hamburger-icon h-[21px] p-0 mt-0 bg-none text-[0px] leading-normal border-none shadow-none appearance-none cursor-pointer outline-none"  onClick={clickHandler}>
                            <span className="navbar-toggler-icon block w-[25px] h-[3px] relative bg-themeRed align-middle before:transition-[top,transform] before:delay-[0.3s,0s] before:duration-[0.3s,0.3s] before:w-[25px] before:h-[3px] before:block before:absolute before:left-0 before:right-0 before:top-[-8px] before:bg-themeRed after:transition-[bottom,transform] after:delay-[0.3s,0s] after:duration-[0.3s,0.3s] after:w-[25px] after:h-[3px] after:block after:absolute after:left-0 after:right-0 after:bottom-[-8px] after:bg-themeRed group-[.activeheader]:bg-opacity-0 group-[.activeheader]:before:delay-[0s,0.3s] group-[.activeheader]:before:top-0 group-[.activeheader]:before:-rotate-45 group-[.activeheader]:after:delay-[0s,0.3s] group-[.activeheader]:after:bottom-0 group-[.activeheader]:after:rotate-45"></span>
                       	</button>
                    </div>
					<ul className="header_social hidden md:flex ">
						<li>
							<Link href="/" className="text-themeRed hover:text-textColor">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
									<circle cx="13" cy="13" r="13" className="fill-current"/>
									<path d="M12.7388 20.9089C12.1212 20.6881 11.9889 20.388 11.7353 18.6287C11.4409 16.5842 11.3766 15.3187 11.5473 14.9179C11.7733 14.3864 12.3877 14.0847 13.2459 14.0815C14.0981 14.0778 14.7177 14.3824 14.9446 14.9179C15.1161 15.3179 15.0518 16.5842 14.757 18.6287C14.5568 20.0572 14.4467 20.4183 14.1705 20.661C13.7911 20.9971 13.2528 21.0901 12.742 20.9093L12.7388 20.9089ZM10.101 18.8111C7.96831 17.7619 6.60209 15.9872 6.10542 13.6261C5.98126 13.0165 5.96023 11.5634 6.07752 11.0036C6.38813 9.50271 6.98186 8.32901 7.96831 7.29119C9.38994 5.79231 11.2189 5 13.2544 5C15.2694 5 17.091 5.77775 18.4783 7.23174C19.5339 8.32901 20.1272 9.49017 20.4309 11.0202C20.5345 11.5294 20.5345 12.9179 20.4378 13.4906C20.1156 15.3118 19.1174 16.9441 17.6431 18.0608C17.1173 18.4568 15.8352 19.1484 15.6281 19.1484C15.5521 19.1484 15.5452 19.0699 15.58 18.7516C15.6419 18.2408 15.7042 18.1348 15.9938 18.0131C16.4564 17.8202 17.2431 17.2596 17.726 16.7751C18.5681 15.9335 19.1666 14.8795 19.4578 13.7251C19.6374 13.0145 19.6168 11.4344 19.4174 10.7027C18.7877 8.37511 16.8908 6.56723 14.5657 6.08432C13.889 5.946 12.6607 5.946 11.9772 6.08432C9.62412 6.56723 7.67832 8.4649 7.08338 10.8524C6.92483 11.4995 6.92483 13.0813 7.08338 13.73C7.47691 15.3102 8.49894 16.7593 9.83685 17.622C10.0642 17.7739 10.3018 17.91 10.5479 18.0293C10.8375 18.1534 10.8997 18.257 10.9547 18.7674C10.9891 19.078 10.9822 19.1678 10.9066 19.1678C10.8581 19.1678 10.5062 19.0161 10.1337 18.8365L10.101 18.8111ZM10.1285 16.0046C9.41057 15.4319 8.77599 14.4159 8.5135 13.4198C8.35496 12.818 8.35496 11.6738 8.52038 11.074C8.95516 9.45377 10.1491 8.19756 11.8053 7.60747C12.3715 7.40767 13.6253 7.3648 14.3238 7.51647C16.725 8.05034 18.4297 10.4552 18.1001 12.8406C17.9691 13.802 17.6378 14.5915 17.0514 15.3247C16.7614 15.6952 16.0577 16.3172 15.9335 16.3172C15.9129 16.3172 15.893 16.0827 15.893 15.7967V15.2766L16.2522 14.8487C17.6047 13.2285 17.508 10.966 16.0314 9.48006C15.4587 8.90211 14.7962 8.56237 13.9404 8.40585C13.3883 8.30352 13.271 8.30352 12.6914 8.39897C11.8114 8.54255 11.1299 8.88431 10.5244 9.48208C9.03807 10.949 8.94141 13.2256 10.2943 14.8471L10.6502 15.2766V15.8024C10.6502 16.0924 10.6271 16.3282 10.5988 16.3282C10.5705 16.3282 10.3711 16.1902 10.1572 16.0175L10.1285 16.0046ZM12.5228 13.1872C11.9088 12.9013 11.5776 12.3626 11.5707 11.66C11.5707 11.0287 11.9226 10.4778 12.5297 10.1555C12.9163 9.95327 13.5994 9.95327 13.9857 10.1555C14.4145 10.3871 14.7363 10.7766 14.8827 11.2414C15.2831 12.6024 13.8409 13.7947 12.5369 13.1856L12.5228 13.1872Z" fill="white"/>
								</svg>
							</Link>
						</li>
						<li>
							<Link href="/" className="text-themeRed hover:text-textColor">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="13" cy="13" r="13" className="fill-current"/>
									<path d="M13 8.20001C12.4611 8.20001 12.0244 7.75241 12.0244 7.2V6C12.0244 5.4476 12.4611 5 13 5C13.5389 5 13.9756 5.4476 13.9756 6V7.2C13.9756 7.75241 13.5389 8.20001 13 8.20001Z" fill="white"/>
									<path d="M13 16.6002C12.4611 16.6002 12.0244 16.1526 12.0244 15.6002V10.4001C12.0244 9.84775 12.4611 9.40015 13 9.40015C13.5389 9.40015 13.9756 9.84775 13.9756 10.4001V15.6002C13.9756 16.1526 13.5389 16.6002 13 16.6002Z" fill="white"/>
									<path d="M13 21.0001C12.4611 21.0001 12.0244 20.5525 12.0244 20.0001V18.8001C12.0244 18.2476 12.4611 17.8 13 17.8C13.5389 17.8 13.9756 18.2476 13.9756 18.8001V20.0001C13.9756 20.5525 13.5389 21.0001 13 21.0001Z" fill="white"/>
									<path d="M9.48767 17.8001C8.94875 17.8001 8.51207 17.3525 8.51207 16.8001V15.6001C8.51207 15.0477 8.94875 14.6001 9.48767 14.6001C10.0266 14.6001 10.4633 15.0477 10.4633 15.6001V16.8001C10.4633 17.3525 10.0266 17.8001 9.48767 17.8001Z" fill="white"/>
									<path d="M16.5123 11.4002C15.9734 11.4002 15.5367 10.9526 15.5367 10.4002V9.2002C15.5367 8.6478 15.9734 8.2002 16.5123 8.2002C17.0512 8.2002 17.4879 8.6478 17.4879 9.2002V10.4002C17.4879 10.9526 17.0512 11.4002 16.5123 11.4002Z" fill="white"/>
									<path d="M9.48767 13.3998C8.94875 13.3998 8.51207 12.9522 8.51207 12.3998V8.79981C8.51207 8.24741 8.94875 7.7998 9.48767 7.7998C10.0266 7.7998 10.4633 8.24741 10.4633 8.79981V12.3998C10.4633 12.9522 10.0266 13.3998 9.48767 13.3998Z" fill="white"/>
									<path d="M16.5123 18.2001C15.9734 18.2001 15.5367 17.7525 15.5367 17.2001V13.6001C15.5367 13.0477 15.9734 12.6001 16.5123 12.6001C17.0512 12.6001 17.4879 13.0477 17.4879 13.6001V17.2001C17.4879 17.7525 17.0512 18.2001 16.5123 18.2001Z" fill="white"/>
									<path d="M5.97561 14.6C5.43668 14.6 5 14.1524 5 13.6V12.4C5 11.8476 5.43668 11.4 5.97561 11.4C6.51453 11.4 6.95121 11.8476 6.95121 12.4V13.6C6.95121 14.1524 6.51453 14.6 5.97561 14.6Z" fill="white"/>
									<path d="M20.0246 14.5999C19.4857 14.5999 19.049 14.1523 19.049 13.5999V12.3999C19.049 11.8475 19.4857 11.3999 20.0246 11.3999C20.5635 11.3999 21.0002 11.8475 21.0002 12.3999V13.5999C21.0002 14.1523 20.5635 14.5999 20.0246 14.5999Z" fill="white"/>
								</svg>

							</Link>
						</li>
						<li>
							<Link href="/" className="text-themeRed hover:text-textColor">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="13" cy="13" r="13" className="fill-current"/>
									<circle cx="12.9997" cy="12.9999" r="7.33316" fill="currentColor"/>
									<path d="M13 5C8.58179 5 5 8.5817 5 12.9999C5 17.4182 8.58179 20.9996 13 20.9996C17.4186 20.9996 21 17.4182 21 12.9999C21 8.58198 17.4187 5 13 5ZM16.6687 16.5381C16.5254 16.7731 16.2178 16.8476 15.9828 16.7034C14.1045 15.556 11.7399 15.2962 8.95522 15.9324C8.68688 15.9936 8.41939 15.8254 8.35826 15.557C8.29683 15.2886 8.46429 15.0211 8.7333 14.9599C11.7807 14.2634 14.3947 14.5635 16.5034 15.8522C16.7384 15.9964 16.8129 16.3031 16.6687 16.5381ZM17.6479 14.3595C17.4673 14.6533 17.0833 14.7459 16.79 14.5654C14.6396 13.2434 11.3617 12.8606 8.81823 13.6326C8.48837 13.7323 8.13997 13.5464 8.03985 13.2171C7.9405 12.8872 8.1265 12.5395 8.45579 12.4392C11.3611 11.5576 14.973 11.9847 17.4425 13.5022C17.7357 13.6827 17.8284 14.0666 17.6479 14.3595ZM17.7319 12.0913C15.1536 10.5598 10.8996 10.419 8.43793 11.1662C8.04262 11.2861 7.62459 11.0629 7.50479 10.6676C7.385 10.2721 7.60796 9.85435 8.00355 9.73417C10.8294 8.87631 15.5271 9.04206 18.4956 10.8043C18.8519 11.0153 18.9685 11.4745 18.7573 11.8296C18.5472 12.1852 18.0863 12.3024 17.7319 12.0913Z" fill="white"/>
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
export default Header;