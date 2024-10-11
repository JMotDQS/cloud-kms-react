import React, { useState, useRef, useEffect } from 'react';
import BarcodeReader from 'react-barcode-reader';

export default function Labels() {
	const inputRef = useRef(null);
	const [barcode, setBarcode] = useState('');

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleScan = (data) => {
		setBarcode(data);
	};

	const handleError = (err) => {
		console.error(err);
	};

	return(
		<>
			<div className="grid-container grid-container-labels">
				<div className="card card-labels">
					<p>Labels</p>
					<div>
						{/*<form>
							<input ref={inputRef} type="text" id="label-vin-input" readOnly value={barcode} />
						</form>*/}
						<BarcodeReader onError={handleError} onScan={handleScan} />
						<p>{barcode}</p>
					</div>
				</div>
			</div>
		</>
	)
}