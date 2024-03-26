import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editTable } from "../../redux/table/TableSlice";
import { useParams, useNavigate } from "react-router-dom";
import { RootState, User } from "../../redux/table/TableSlice"; 

const EditTable = () => {
    const { id } = useParams<{ id?: string }>();
    const userId = id ? parseInt(id) : undefined; 
    const users = useSelector((state: RootState) => state.table.users); 
    const existingUser: User | undefined = userId ? users.find(user => user.id === userId) : undefined;
    const [name, setName] = useState<string>(existingUser ? existingUser.name : ''); 
    const [email, setEmail] = useState<string>(existingUser ? existingUser.email : ''); 
    const [phone, setPhone] = useState<string>(existingUser ? existingUser.phone.toString() : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
        if (userId && !isNaN(parseInt(phone))) { 
            dispatch(editTable({
                id: userId, 
                name,
                email,
                phone: parseInt(phone)
            }));
            navigate("/");
        }
    };

    return (
        <div>
            <div>
                <h2>Edit user</h2>
            </div>
            <form onSubmit={handleUpdate}>
                <label>Name</label>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Phone</label>
                <input type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} /> {/* Changed input type to text */}
                <button type="submit" className="add-button">Edit</button>
            </form>
        </div>
    );
};

export default EditTable;
