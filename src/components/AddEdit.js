import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios"

const AddEdit = () => {
    const [state, setState] = useState({ name: "", email: "", phone: "" })
    const { name, email, phone } = state;
    const navigate = useNavigate()



    // form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        try{

            if (!name || !email || !phone) {
                toast.error("Please fill all the details!")
            } else {
                if (!id) {
    
                    axios.post("http://localhost:5000/adduser", {
                        name,
                        email,
                        phone
                    }).then(() =>
                        setState({ name: "", email: "", phone: "" })
                    ).catch((err) => {
                        toast.error(err)
                    })
                    toast.success("User added successfully!!")
                    navigate('/');
                }
                else {
                    axios.put(`http://localhost:5000/updateuser/${id}`, {
                        name,
                        email,
                        phone
                    }).then(() =>
                        setState({ name: "", email: "", phone: "" })
                    ).catch((err) => {
                        toast.error(err)
                    })
                    toast.success("User updated successfully!!")
                    navigate('/')
    
                }
            }
        }
        catch{
            toast.err("Server error")
        }

    }


    // Update user
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${id}`).then((resp) => setState({ ...resp.data[0] }))
    }, [id])



    const handleInChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>{!id?"Add":"Update"} User Information</h2>
            <div className="container mt-5" >

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={name} onChange={handleInChange} />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInChange} />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label" >Phone</label>
                    <input type="text" className="form-control" id="phone" name='phone' value={phone} onChange={handleInChange} />
                </div>
                <input type="submit" value={id ? "Update" : "Add User"} className="btn btn-primary" />
            </form>
            </div>
        </div>
    )
}

export default AddEdit
