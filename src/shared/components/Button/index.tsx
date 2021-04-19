import "./style.scss";
const Button = (props: {
	children: any;
	variant?: "common";
	m?: number;
	mr?: number;
	ml?: number;
	mb?: number;
	mt?: number;
	onClick?: any;
}) => {
	return (
		<div
			style={{
				margin: props.m,
				marginRight: props.mr,
				marginLeft: props.ml,
				marginBottom: props.mb,
				marginTop: props.mt,
			}}
			className={"button"}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export default Button;
