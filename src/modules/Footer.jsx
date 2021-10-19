import React, { Component } from 'react';
import '../css/style.css';
import { Modal_Me } from './../common/components/Modal_Me';

export const Footer = () => {
    return (
        <>
            <footer>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-8"
                                    style={{ fontSize: "30px" }}>
                                    <p>Cristian Sarmiento:&nbsp;&nbsp;sarmientocastrocris@gmail.com</p>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-3 "
                                    style={{ textAlign: "end" }}>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <button className="nav-link active"
                                                    style={{ color: "#26327e;" }, { fontSize: "22px" }}
                                                    aria-current="page"
                                                    href="#" data-bs-toggle="modal" data-bs-target="#Info">
                                                    About Me</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>
            <Modal_Me />
        </>
    )
}