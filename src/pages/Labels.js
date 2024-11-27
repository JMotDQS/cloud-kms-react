import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';

export default function Labels() {
	//var g_PRINT_USER_OBJ = {};
	//onclick="printItem(this)">
	/*const printItem = (param_obj) => {
		var temp_array = param_obj.id.split('_');
		var selected_user_id = parseInt(temp_array[(temp_array.length - 1)]);
	
		g_PRINT_USER_OBJ = {
			'first_name': g_USER_SEARCH[parseInt($('#' + param_obj.id).data('index'))]['first_name'],
			'last_name': g_USER_SEARCH[parseInt($('#' + param_obj.id).data('index'))]['last_name'],
			'badge_id': g_USER_SEARCH[parseInt($('#' + param_obj.id).data('index'))]['badge_id']
		}
		console.log("g_PRINT_USER_OBJ:", g_PRINT_USER_OBJ);
	}*/

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
	const [scanFeedback, setScanFeedback] = useState('');

	const handleScan = (data) => {
		setVinObj({
			vin: data,
			vin_emp_id: userUUID.emp_id
		});

		let newVIN = false;
		if(newVIN) {
			//was found
			//alert("This is a re-print.");
			setScanFeedback('VIN found, re-printing label');
		} else {
			//was not found
			//alert("This is a new print.");
			//alert("Adding VIN to register table.");
			setScanFeedback('New VIN, printing label');
		}
		
		/*alert("Checking VIN: " + data + " against register table...");
		let result = true;
		if(result) {
			//was found
			alert("This is a re-print.");
			alert("Updating VIN record with action in the key_tracking table.");
		} else {
			//was not found
			alert("This is a new print.");
			alert("Adding VIN to register table.");
			alert("Adding VIN and action to key_tracking table.");
			alert("Adding VIN and action to key_tracking_historical table.");
		}
		alert("Printing your new QR Code label.");*/
	};

	const handleError = (err) => {
		console.error(err);
	};

	return(
		<>
			<div className="grid-container grid-container-labels">
				<div className="card card-labels card-labels-label">
					<h1>Labels</h1>
					<div className="card-body">
						<p>Please scan VIN for label.</p>
						<BarcodeReader onError={handleError} onScan={handleScan} />
						<label for="test-vin">Scanned VIN: </label><input type='text' id="test-vin" name="test-vin" value={vinObj.vin} />
						<p>{scanFeedback}</p>
					</div>
				</div>
			</div>
		</>
	)
}