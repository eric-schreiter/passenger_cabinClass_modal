import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transform: translateX(100%);
	background-color: rgba(0, 0, 0, 0.5);
	transition: all 0.5s ease;
	&.active {
		transform: translateX(0);
	}
	.wrapper {
		background-color: white;
		display: flex;
		flex-direction: column;
		height: calc(100% - 3rem);
		margin: 1.5rem 1rem;
		border-radius: 10px;
		.header {
			text-align: center;
			background-color: #005ea8;
			color: white;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			font-size: 18px;
			padding: 0.5rem;
		}
		.content {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			flex-basis: calc(100% - 7rem);
			overflow-y: scroll;
			.travellClass {
				display: flex;
				flex-direction: column;
				margin: 30px 0 75px 0;
				label {
					color: rgb(102, 102, 102);
					font-size: 16px;
					margin-bottom: 3px;
				}
				select {
					width: 100%;
					height: 52px;
					font-size: 16px;
					border: none;
					border-top-left-radius: 3px;
					border-top-right-radius: 3px;
					padding: 0.5rem 1rem;
					border: 1px solid #dcdcdc;
					-webkit-appearance: none;
					-moz-appearance: none;
					background-color: #fff;
					-webkit-tap-highlight-color: transparent;
					&:focus {
						outline: none;
					}
				}
			}
			.passengers {
				> span {
					font-size: 16px;
					color: rgb(102, 102, 102);
					margin-bottom: 1rem;
					display: block;
				}
				.group {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 45px;
					&:last-of-type {
						margin-bottom: 0;
					}
					> div:nth-child(1) {
						display: flex;
						flex-direction: column;
						> strong {
							margin-bottom: 5px;
						}
						> span {
							font-size: 14px;
							color: rgb(153, 153, 153);
						}
					}
					> div:nth-child(2) {
						display: flex;
						align-items: center;
						> span {
							font-weight: bold;
							font-size: 22px;
							width: 55px;
							text-align: center;
						}
					}
					button {
						width: 40px;
						height: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: rgb(235, 235, 235);
						border: none;
						font-size: 35px;
						font-weight: bold;
						border-radius: 5px;
						&:focus {
							outline: none;
						}
					}
					button:first-child {
						transition: all 0.25s ease;
						background-color: ${({ countAdt }) =>
							countAdt > 1 ? 'rgb(209, 230, 246)' : 'rgb(235, 235, 235)'};
						svg {
							fill: rgb(87, 87, 87);
						}
					}
					button:last-child {
						background-color: ${({ countAdt }) =>
							countAdt > 8 ? 'rgb(235, 235, 235)' : 'rgb(209, 230, 246)'};
						svg {
							fill: rgb(0, 94, 168);
						}
					}
				}
			}
		}
		.footer {
			position: absolute;
			display: flex;
			bottom: 1.5rem;
			left: 1rem;
			right: 1rem;
			button {
				width: 100%;
				margin: 0.75rem;
				text-align: center;
				font-size: 20px;
				padding: 0.75rem 0;
				border-radius: 0.3rem;
				box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.26);
				border: none;
				background-color: #0271c2;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;

export default StyledModal;
