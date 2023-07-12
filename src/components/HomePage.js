import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios"

const HomePage = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/users")
        setData(response.data)
        console.log(response.data)
    };

    useEffect(() => {
        loadData();
    }, []);

    // To delete user
    const deleteUser = (id) => {

        if (window.confirm("Confirm user delete?")) {
            axios.delete(`http://localhost:5000/deleteuser/${id}`)
            toast.success("User successfully deleted!!!")
            setTimeout(()=>loadData(),50)
            
        }
    }

    // To view user
    const [vuserData, setVuserData] = useState({ id: "", name: "", email: "", phone: "" })
    const viewUser = async (id) => {


        const user = await axios.get(`http://localhost:5000/user/${id}`)
        //    setVuserData({id:"",name:"",email:"",phone:""})
        const vdata = user.data[0]
        setVuserData({ id: vdata.id, name: vdata.name, email: vdata.email, phone: vdata.phone })

        console.log(vdata.name)
    }

    return (
        <div className='container d-flex flex-xl-column  justify-content-center mt-5 ' >
            <div className="container">

                <Link to={"/adduser"}>
                    <div class="d-grid gap-2">
                        <button className='btn btn-primary w-full'>Add new user</button>
                    </div>
                </Link>
               
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                            return (<tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Link to={`/updateuser/${item.id}`}>
                                    <button className='btn btn-info'>Edit</button>
                                </Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteUser(item.id)}>Delete</button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewUser(item.id)}>View</button>


                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">User Details</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h4 className='text-start'>ID: {vuserData.id}</h4>
                                                <h4 className='text-start'>Name: {vuserData.name}</h4>
                                                <h4 className='text-start'>Email: {vuserData.email}</h4>
                                                <h4 className='text-start'>Phone: {vuserData.phone}</h4>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>
                         )
                        })}
                    </tbody>
                </table>
                <div className="container mt-2">
                <h4>{data.length===0 && 'No users '}</h4>
                </div>
            </div>
        </div>
    )
}

export default HomePage
