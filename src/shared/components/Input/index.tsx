import React from "react";
import "./style.scss";

interface props {
	placeholder?: string;
	value?: string;
	onChange(e: React.ChangeEvent<HTMLInputElement>): any;
	className?: any;
	m?: number;
	mr?: number;
	ml?: number;
	mb?: number;
	mt?: number;
	w?: string;
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
				width: props.w,
			}}
			className={"input "}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	);
};

export default Input;
