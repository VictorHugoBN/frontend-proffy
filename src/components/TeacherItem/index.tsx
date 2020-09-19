import React from "react";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface Teacher {
	avatar: string;
	bio: string;
	cost: number;
	id: number;
	name: string;
	subject: string;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
	const { teacher } = props;

	const createNewConnection = () => {
		alert("Redirecionando para o WhatsApp");
		api.post("connections", {
			use_id: teacher.id,
		});
	};

	return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>

			<p>{teacher.bio}</p>

			<footer>
				<p>
					Preço por hora: <strong>R$ {teacher.cost}</strong>
					<a
						target="_blank"
						href={`https://wa.me/${teacher.whatsapp}`}
						onClick={createNewConnection}
					>
						<img src={wppIcon} alt="WhatsApp" />
						Entrar em contato
					</a>
				</p>
			</footer>
		</article>
	);
};

export default TeacherItem;
