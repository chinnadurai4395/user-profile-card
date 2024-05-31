import React from "react";

const UserProfile = (props) => {
    return (
        <div>
            <section className="userprofilebackground">
                <div className="container d-flex justify-content-center align-items-center mb-3">
                    <div className="card">
                        <div className="upper">
                            <img src={props.userCardData.background_image} className="bacImage" alt="background-images" width="100%" height="250px" />
                        </div>

                        <div className="user text-center">
                            <div className="profile">
                                <img src={props.userCardData.avatar} alt="Avator" className="rounded-circle" width="150" />
                            </div>
                        </div>

                        <div className="mt-2 text-center profile-body">
                            <h4 className="mb-0">{props.userCardData.name}</h4>
                            <span className="text-muted d-block mb-2">{props.userCardData.designation}</span>
                            <p className="text-muted d-block p-2 text-justify mb-2">{props.userCardData.description}</p>
                            <button className="btn btn-primary btn-sm follow">Follow</button>
                            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                                <div className="stats">
                                    <h6 className="mb-0">MAIL</h6>
                                    <span>{props.userCardData.mail}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">NATIONALITY</h6>
                                    <span>{props.userCardData.nationality}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">PHONE</h6>
                                    <span>{props.userCardData.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserProfile;