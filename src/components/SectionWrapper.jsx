import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
	title,
	description,
	showBtn,
	mockupImg,
	banner,
	reverse,
}) => {
	return (
		<div
			className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}
       `}
		>
			<div
				className={`flex items-center w-11/12 sm:w-full minmd:w-3/4
        ${reverse ? styles.boxReverseClass : styles.boxClass}
        `}
			>
				<div
					className={`${styles.descDiv}
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
          `}
				>
					<h1
						className={`${styles.h1Text}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
					>
						{title}
					</h1>
					<p
						className={`${styles.descriptionText}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
					>
						{description}
					</p>
					{showBtn && (
						<Button
							assetUrl={assets.expo}
							link="https://expo.dev/accounts/hayotunday/projects/nft-marketplace-app/builds/cd32d103-8268-4e39-9db0-d76e07d85760"
						/>
					)}
				</div>
				<div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
					<img
						src={mockupImg}
						alt="mockup"
						className={`${styles.sectionImg}
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          `}
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
