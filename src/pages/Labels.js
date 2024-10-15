import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';

export default function Labels() {
	const [userUUID] = useState(
		{
			pk_id: "23547631-FC95-4FBA-A815-70450FC2AC37",
			created_date: "2024-10-14T10:28:12.363",
			emp_id: "YLA0012",
			first_name: "Kaori",
			last_name: "Miyazono"
		}
	);
	const [vinObj, setVinObj] = useState(
		{
			vin: "",
			vin_emp_id: userUUID.emp_id
		}
	);

	const handleScan = (data) => {
		setVinObj({
			vin: data,
			vin_emp_id: userUUID.emp_id
		})
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
						<p>User: {userUUID.last_name}, {userUUID.first_name}</p>
						<p>User ID: {userUUID.emp_id}</p>
					</div>
					<p>--------------------------------------------------------------------</p>
					<div>
						<BarcodeReader onError={handleError} onScan={handleScan} />
						<p>Scanned VIN: {vinObj.vin}</p>
						<p>By User ID: {vinObj.vin_emp_id}</p>
					</div>
				</div>
			</div>
		</>
	)
}