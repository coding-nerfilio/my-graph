import "./style.scss";

interface props {
	placeholder?: string;
	value?: string;
	onChange?: any;
	className?: any;
	m?: number;
	mr?: number;
	ml?: number;
	mb?: number;
	mt?: number;
}

const Input = (props: props) => {
	return (
		<input
			style={{
				margin: props.m,
				marginRight: props.mr,
				marginLeft: props.ml,
				marginBottom: props.mb,
				marginTop: props.mt,
			}}
			className={"input "}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	);
};

export default Input;
