import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function UserList() {
  const [data, setUserData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/users");
      if (response.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch users.");
    }
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <ToastContainer position="top-right" />
        <section className="content-header">{/* ... */}</section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {data &&
                Array.isArray(data) &&
                data.map((item, index) => {
                  return (
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          style={{ height: "300px" }}
                          src="/cart.png"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {" "}
                            {item.name} {item.prenom}{" "}
                          </h5>
                          <p className="card-text">{item.email}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default UserList;
