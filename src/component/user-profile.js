import React from "react";

const UserProfile = (props) => {
    return (
        <div>
            <section className="userprofilebackground">
                <div class="container d-flex justify-content-center align-items-center mb-3">
                    <div class="card">
                        <div class="upper">
                            <img src={props.userCardData.background_image} class="bacImage" alt="background-images" width="100%" height="250px" />
                        </div>

                        <div class="user text-center">
                            <div class="profile">
                                <img src={props.userCardData.avatar} alt="Avator" class="rounded-circle" width="150" />
                            </div>
                        </div>

                        <div class="mt-2 text-center profile-body">
                            <h4 class="mb-0">{props.userCardData.name}</h4>
                            <span class="text-muted d-block mb-2">{props.userCardData.designation}</span>
                            <p class="text-muted d-block p-2 text-justify mb-2">{props.userCardData.description}</p>
                            <button class="btn btn-primary btn-sm follow">Follow</button>
                            <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                                <div class="stats">
                                    <h6 class="mb-0">MAIL</h6>
                                    <span>{props.userCardData.mail}</span>
                                </div>

                                <div class="stats">
                                    <h6 class="mb-0">NATIONALITY</h6>
                                    <span>{props.userCardData.nationality}</span>
                                </div>

                                <div class="stats">
                                    <h6 class="mb-0">PHONE</h6>
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