import React, {Component} from "react";
import user_avatar from '../Assets/user_profile_avatar_png.png';
import Blue_background from '../Assets/Blue_fog_background.jpg'
import UserProfile from "./user-profile";

class UserCard extends Component{
    constructor(){
        super()
        this.state={
            name:'Chinna',
            date_of_birth: '04-03-1995',
            gender: 'male',
            phone: '8887062469',
            mail:'chinna@gmail.com',
            background_image:Blue_background,
            nationality:'Indian',
            avatar:user_avatar,
            designation: 'senior software developer',
            description:'A front-end developer is a professional responsible for designing and implementing the user interface and user experience of a website or web application. Their primary focus is on the visual elements that users interact with, such as layouts, buttons, forms, and navigation menus, as well as ensuring these elements are responsive and accessible across various devices and browsers.'
        }
    }
    

    render(){
        return <div>
            <section className="header-section">
                <h3> User Profile </h3>
                <UserProfile name='userProfile' userCardData={this.state} />
            </section>
        </div>
    }
}


export default UserCard;