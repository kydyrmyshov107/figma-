import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';
import icon_right from '../../../assets/icons/arrow-small-right.svg';
import images from '../../../assets/images/girl-photo.png';
import iconOne from '../../../assets/icons/location.svg';
import iconsTwo from '../../../assets/icons/phone-call.svg';
import iconsThree from '../../../assets/icons/mail.svg';
import imagesT from '../../../assets/smooth-line-top.png';
import iconsAr from '../../../assets/icons/arrow-right.svg';
import imagesMan from '../../../assets/images/man-photo.png';
import imagesOne from '../../../assets/images/hydra-tech-1.png';
import imagesTwo from '../../../assets/images/hydra-tech-2.png';
import imagesLast from '../../../assets/logo.png';
import imagesTree from '../../../assets/images/hydra-tech-3.png';
import imagesFour from '../../../assets/images/hydra-tech-4.png';
import imgagesOne from '../../../assets/images/facebook.svg';
import imgagesTwo from '../../../assets/images/twitter.png';
import imgagesFour from '../../../assets/images/linkedin.png';
import imgagesFive from '../../../assets/images/youtube.png';
import imgagesSix from '../../../assets/images/instagram.png';
import imgagesSeven from '../../../assets/images/pinterest.svg';
import vector from '../../../assets/Vector 16.svg';
import vectorTwo from '../../../assets/Vector 17.svg';

const WhyBuild = () => {
	return (
		<div className={scss.why_build}>
			{/* start section 1 */}
			<section>
				<div className={scss.sectionOne}>
					<div className={scss.header}>
						<div>
							<h1>Dive Into The Depths</h1>
							<h1>Of Virtual Reality</h1>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
							sed do eiusmod tempor incididunt ut labore et dolore <br /> nisl
							tincidunt eget. Lectus mauris eros in vitae .
						</p>
						<div className={scss.button}>
							<button>BUILD YOUR WORLD</button>
							<img src={icon_right} alt="" />
						</div>
					</div>
					<img src={images} alt="" />
				</div>
				<div className={scss.footer}>
					<div className={scss.box}>
						<img src={iconOne} alt="" />
						<p>
							Pay Us a Visit <br /> Union St, Seattle, WA 98101, United States
						</p>
					</div>
					<img className={scss.smooth} src={imagesT} alt="" />
					<div className={scss.box}>
						<img src={iconsTwo} alt="" />
						<p>
							Give Us a Call <br /> (110) 1111-1010
						</p>
					</div>
					<img className={scss.smooth} src={imagesT} alt="" />
					<div className={scss.box}>
						<img src={iconsThree} alt="" />
						<p>
							Send Us a Message <br /> Contact@HydraVTech.com
						</p>
					</div>
				</div>
			</section>
			{/* section 1 stop */}

			{/* section 2 */}

			<section>
				<div>
					<div>
						<div className={scss.wrapperOne}>
							<h1>
								INTRODUCTION <br /> TO HYDRA VR
							</h1>
							<img src={iconsAr} alt="" />
							<p>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
								lectus. Mi sit amet mauris commodo quis imperdiet massa
								tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
						<div className={scss.wrapperTwo}>
							<img src={imagesMan} alt="" />
							<div className={scss.wrap}>
								<h1>
									ABOUT <br />
									HYDRA VR
								</h1>
								<p>
									Eget mi proin sed libero enim sed faucibus turpis. Nisl
									rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
									augue eget arcu dictum. Ultrices gravida dictum fusce ut
									placerat orci. Aenean et tortor at risus viverra adipiscing at
									in. Mattis aliquam faucibus purus in massa. Est placerat in
									egestas erat imperdiet sed. Consequat semper viverra nam
									libero justo laoreet sit amet. Aliquam etiam erat velit
									scelerisque in dictum non consectetur a. Laoreet sit amet
									cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
									Sem nulla pha retra diam sit amet nisl suscipit adipiscing
									bibendum. Leo a diam sollicitudi n tempor.
								</p>
								<button>LET’S GET IN TOUCH</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* section 2 stop */}

			{/* section 3 */}
			<div className={scss.wrapperSectionTwo}>
				<h1>
					INTRODUCTION <br /> TO HYDRA VR?
				</h1>
				<img src={iconsAr} alt="" />
				<p>
					Vitae sapien pellentesque habitant morbi tristique senectus et netus
					et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
					amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
					aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
					Lectus magna fringilla urna porttitor rhoncus vitae.
				</p>
			</div>

			<section className={scss.why_build}>
				<div className={scss.cards}>
					{data.map((item, index) => (
						<div key={index} className={scss.card}>
							<img src={item.img} alt={item.title} />
							<h1 className={scss.title}>{item.title}</h1>
							<p className={scss.text}>{item.text}</p>
							<div className={scss.button_ago}>
								<ButtonBG>TRY IT NOW</ButtonBG>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* section stop 3 */}

			{/* section 4*/}

			<section>
				<div>
					<div className={scss.sectionTree}>
						<h1>TECHNOLOGIES & HARDWARE</h1>
						<h2>USED BY HYDRA VR.</h2>
					</div>
					<div className={scss.icons}>
						<img src={imagesOne} alt="" />
						<img src={imagesTwo} alt="" />
						<img src={imagesTree} alt="" />
						<img src={imagesFour} alt="" />
					</div>
				</div>
			</section>
			{/* section stop 4 */}

			{/* section 5 */}
			<section>
				<div>
					<div className={scss.wrapperSectionTwo}>
						<h1>
							INTRODUCTION <br /> TO HYDRA VR?
						</h1>
						<img src={iconsAr} alt="" />
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
					<div className={scss.desc}>
						<div className="boxNum">
							<button>
								<h1>01</h1>
							</button>
						</div>
						<div>
							<button>
								<h1>02</h1>
							</button>
						</div>
						<div>
							<button>
								<h1>03</h1>
							</button>
						</div>
						<div>
							<button>
								<h1>04</h1>
							</button>
						</div>
					</div>
					<div className={scss.descTwo}>
						<div className={scss.row}>
							<img src={icon_right} alt="" />
							<p>
								3D Conception <br /> & Design
							</p>
						</div>
						<div className={scss.row}>
							<img src={icon_right} alt="" />
							<p>
								Interaction <br /> Design
							</p>
						</div>
						<div className={scss.row}>
							<img src={icon_right} alt="" />
							<p>
								VR World <br /> User Testing
							</p>
						</div>
						<div className={scss.row}>
							<img src={icon_right} alt="" />
							<p>
								Hydra VR <br /> Deploy
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* section 5 stop */}

			{/* section 6 */}
			<section>
				<div>
					<div className={scss.sectionSix}>
						<div className={scss.sectionSixHeader}>
							<h1>JOIN HYDRA</h1>
							<div>
								<img src={vector} alt="" />
							</div>

							<h1>Let’s Build Your VR Experience</h1>
						</div>
						<div className={scss.inputs}>
							<div className={scss.title}>
								<input placeholder="First Name" type="text" />
								<input placeholder="Last Name" type="text" />
							</div>
							<div className={scss.title}>
								<input placeholder="Email" type="text" />
								<input placeholder="Phone number" type="text" />
							</div>
						</div>
						<div className={scss.widget}>
							<input
								className={scss.inputFive}
								placeholder="Subjet"
								type="text"
							/>
							<input
								className={scss.inputSix}
								type="text"
								placeholder="Tell Us Something"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* section 7/ */}

			<section>
				<div className={scss.sectionSeven}>
					<img className={scss.sectionSevenImg} src={imagesLast} alt="" />
					<div>
						<img src={imagesT} alt="" />
					</div>
					<div className={scss.texts}>
						<p>ABOUT</p>
						<p>SERVICES</p>
						<p>TECHNOLOGIES</p>
						<p>HOW TO</p>
						<p>JOIN HYDRA</p>
					</div>
					<div>
						<img src={imagesT} alt="" />
					</div>
					<div className={scss.texts}>
						<p>F.A.Q</p>
						<p>SITEMAP</p>
						<p>CONDITIONS</p>
						<p>LICENSES</p>
					</div>
					<div>
						<img src={imagesT} alt="" />
					</div>
					<div className={scss.sectionSevenFooter}>
						<p>SOCIALIZE WITH HYDRA</p>
						<div className={scss.sectionSevenImg}>
							<img src={imgagesOne} alt="" />
							<img src={imgagesTwo} alt="" />
							<img src={imgagesFour} alt="" />
							<img src={imgagesFive} alt="" />
							<img src={imgagesSix} alt="" />
							<img src={imgagesSeven} alt="" />
						</div>

						<button className={scss.lastButton}>BUILD YOUR WORLD</button>
					</div>
				</div>
				<div>
					<img className={scss.lastImg} src={vectorTwo} alt="" />
				</div>
				<h3 className={scss.lastText}>
					2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{' '}
				</h3>
			</section>
		</div>
	);
};

export default WhyBuild;
