import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTable } from '../../redux/table/TableSlice';
import { Link } from 'react-router-dom';
import { RootState } from "../../redux/table/TableSlice";
import './tableStyles.css'; 

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state: RootState) => state.table.users);

  const handleDelete = (id: number) => {
    dispatch(deleteTable({ id }));
  };

  return (
    <div className="table-container">
      <Link to="/add">
        <button>+ Add New</button>
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <button onClick={() => handleDelete(data.id)}>Del</button>
                  <Link to={`/edit/${data.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
