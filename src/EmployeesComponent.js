import React, { useContext } from 'react';
import { EmployeesContext } from './Store';

const EmployeesComponent = () => {
	const [employeesState, setEmployeesState] = useContext(EmployeesContext);
	<div> Employee Component</div>
	return (
		<>
			{employeesState.map((employee) => (
				<div key={employee.pk_id} id={employee.pk_id}>
					<h2>{employee.last_name}, {employee.first_name}</h2>
					<p>{employee.emp_id}</p>
					<p>{employee.pk_id}</p>
				</div>
			))}
		</>
	)
}

export default EmployeesComponent;