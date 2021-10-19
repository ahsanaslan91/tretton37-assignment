import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Employees = (props) => {


    const [employees, setEmployees] = React.useState([]);
    const [visible, setVisible] = React.useState(32);



    const getEmployeesData = async () => {
        var { data } = await axios.get(
            "https://tretton-assignnment.herokuapp.com/api/employees"
        );
        setEmployees(data);
    };


    React.useEffect(() => {
        getEmployeesData();
        console.log(employees)
    }, []);

    const loadMore = () => {
        setVisible(visible + 32);
    };

    return (
        <div>
            <div className="w-100 header">
                <Navbar />
                <h1 className="text-white mt-1 text center"><br />The Fellowship of Tretton37<br /></h1>
            </div>
            <div className="container mt-100">
                <div className="row">
                    {employees.slice(0, visible).map((item, index) => (
                        <div className="col-md-3">
                            <div className="w-100 employee-card">
                                <div className="w-100 employee-img" style={{
                                    background:
                                        'url("' + item.image + '") top / cover no-repeat',
                                }} />
                                <div className="d-flex mt-3">
                                    <div className="w-50">
                                        <h1 className="employee-name">{item.employeeName}</h1>
                                        <h1 className="employee-city">Lund</h1>
                                    </div>
                                    <div className="social-icons w-50 d-flex align-items-start p-0 bg-0"><a href="#"><i className="icon ion-social-twitter" style={{ fontSize: '16px', width: '20px', height: '20px', borderWidth: '0px' }} /></a><a href="#"><i className="icon ion-social-linkedin" style={{ fontSize: '16px', width: '20px', height: '20px', borderWidth: '0px' }} /></a><a href="#"><i className="icon ion-social-github" style={{ fontSize: '16px', width: '20px', height: '20px', borderWidth: '0px' }} /></a></div>
                                </div>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-100">
                <button
                    className="main-button"
                    type="button"
                    onClick={() => {
                        loadMore();
                    }}
                >
                    LOAD MORE
                </button>
            </div>
        </div>
    );
}

export default Employees;
