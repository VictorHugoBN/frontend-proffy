import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

interface PageHeaderProps {
	title: string;
	description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<header className="page-header">
			<div className="top-bar-container">
				<div className="button-back-container">
					<Link to="/">
						<img src={backIcon} alt="" />
					</Link>
				</div>

				<img src={logoImg} alt="" />
			</div>

			<div className="header-content">
				<strong> {props.title} </strong>

				<div className="header-description">
					{props.description ? <p>{props.description}</p> : null}
				</div>

				{props.children}
			</div>
		</header>
	);
};

export default PageHeader;
