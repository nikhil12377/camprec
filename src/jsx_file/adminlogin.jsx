import React from 'react';
import "E:/camprec2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/admin_login.png";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
const AdminLogin =() => {
    return (
        <>
        <Navbar/>
        <div className="pop width height image">
            <img src={web5} className = "image-fluid animated size_img margin-l-lg" alt = "login img"/>
            <div className = "col-md-4 col-10 left_margin ">
                        <div className="margin-t-lg">
                            <div className="card-body card_us">
                             <h3 className="card-title card_us"><strong>Admin Login</strong></h3>
                                <Form>
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="text" className="form-control" placeholder="Username" required/>
                                    </div>
                                    </FormItem>
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="password" className="form-control" placeholder="password" required/>
                                    </div>
                                    </FormItem>
                                    <NavLink to='/adminhome'>
                                    <Input type= "submit" className="btn margin-t" value="Login"/>
                                    </NavLink>
                                </Form>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
};

export default AdminLogin;