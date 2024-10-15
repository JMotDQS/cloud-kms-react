import React, {useState} from 'react';

const employees = [
	{ pk_id: "58D95855-37B9-4951-89FA-FFECE7FD9BC8", created_date: "2024-10-14T10:28:12.363", emp_id: "AGB4011", first_name: "Kanade", last_name: "Tachibana" },
	{ pk_id: "D03C32FB-5A9C-4D0E-A1C2-A17F9A2F71E0", created_date: "2024-10-14T10:28:12.363", emp_id: "GUP1011", first_name: "Yukari", last_name: "Akiyama" },
	{ pk_id: "8C9C010C-1299-4E34-81C2-6D18ECFFABAA", created_date: "2024-10-14T10:28:12.363", emp_id: "GUP1012", first_name: "Mako", last_name: "Reizei" },
	{ pk_id: "322197ED-6AB1-467F-BBE9-C0F8A18357AC", created_date: "2024-10-14T10:28:12.363", emp_id: "KON2011", first_name: "Mio", last_name: "Akiyama" },
	{ pk_id: "D996CA85-2B91-4588-A951-6687BCDF109C", created_date: "2024-10-14T10:28:12.363", emp_id: "KON2012", first_name: "Azusa", last_name: "Nakano" },
	{ pk_id: "F76910F5-0FDE-4D13-9E26-891A1DA37AEA", created_date: "2024-10-14T10:28:12.363", emp_id: "TOR3011", first_name: "Taiga", last_name: "Aisaka" },
	{ pk_id: "0E4AF88E-3B54-4C47-A487-70554E08E36C", created_date: "2024-10-14T10:28:12.363", emp_id: "TOR3012", first_name: "Ryuuji", last_name: "Takasu" },
	{ pk_id: "7F758682-E62F-416E-B9C3-E8493DE0D467", created_date: "2024-10-14T10:28:12.363", emp_id: "YLA0011", first_name: "Kousei", last_name: "Arima" },
	{ pk_id: "23547631-FC95-4FBA-A815-70450FC2AC37", created_date: "2024-10-14T10:28:12.363", emp_id: "YLA0012", first_name: "Kaori", last_name: "Miyazono" }
];

export const EmployeesContext = React.createContext();

const Store = ({ children }) => {
	const [employeesState, setEmployeesState] = useState(employees);

	return (
		<EmployeesContext.Provider value={[employeesState, setEmployeesState]}>{ children }</EmployeesContext.Provider>
	)
}

export default Store;