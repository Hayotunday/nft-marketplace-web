import React from "react";

import styles from "../styles/Global";

const Footer = () => {
	return (
		<div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
			<p className={`${styles.pText} ${styles.whiteText}`}>
				Made with love by <span className="bold">Hayotunday</span>
			</p>
		</div>
	);
};

export default Footer;
