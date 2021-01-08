import React, { useState } from 'react';
import StyledModal from './Modal.styles';
function Modal({ state = false, setModal = () => {} }) {
	const [countAdt, setCountAdt] = useState(1);
	const handleAdtClick = (type, count = 0) => {
		if (type === 'minus') {
			setCountAdt(count - 1 === 0 ? 1 : count - 1);
		} else {
			setCountAdt(count + 1 > 9 ? 9 : count + 1);
		}
	};
	return (
		<StyledModal countAdt={countAdt} className={state ? 'active' : null}>
			<div className="wrapper">
				<div className="header">
					<span>Reisedetails</span>
				</div>
				<div className="content">
					<div className="travellClass">
						<label>Reiseklasse</label>
						<select id="FlightClassSelect" data-testid="">
							<option value="economy" selected="">
								Economy
							</option>
							<option value="premium">Premium Economy</option>
							<option value="business">Business</option>
							<option value="first">First Class</option>
						</select>
					</div>
					<div className="passengers">
						<span>Reisende</span>
						<div className="group">
							<div>
								<strong>Erwachsene</strong>
								<span>ab 12 Jahre</span>
							</div>
							<div>
								<button
									type="button"
									onClick={() => handleAdtClick('minus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
								<span>{countAdt}</span>
								<button
									type="button"
									onClick={() => handleAdtClick('plus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
							</div>
						</div>
						<div className="group">
							<div>
								<strong>Kinder</strong>
								<span>2 bis 11 Jahre</span>
							</div>
							<div>
								<button
									type="button"
									onClick={() => handleAdtClick('minus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
								<span>{countAdt}</span>
								<button
									type="button"
									onClick={() => handleAdtClick('plus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
							</div>
						</div>
						<div className="group">
							<div>
								<strong>Babys</strong>
								<span>bis 2 Jahre</span>
							</div>
							<div>
								<button
									type="button"
									onClick={() => handleAdtClick('minus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
								<span>{countAdt}</span>
								<button
									type="button"
									onClick={() => handleAdtClick('plus', countAdt)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										width="25px"
										height="25px"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" onClick={() => setModal(false)}>
						Auswahl übernehmen
					</button>
				</div>
			</div>
		</StyledModal>
	);
}

export default Modal;
