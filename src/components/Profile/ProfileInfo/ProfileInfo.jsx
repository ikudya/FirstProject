import React from "react";
import S from './ProfileInfo.module.css';
import Preloader from "../../common/Prelodaer/Preloader";
import userPhoto from "../../../assets/img/img.png";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={S.content}>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={S.descriptionBlock}>
                <p className={S.name}> {props.profile.fullName}</p>
                <img className={S.ava} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div className={S.contacts}>
                    <p><p>FaceBook</p> {props.profile.contacts.facebook != null ? props.profile.contacts.facebook :
                        <p> None</p>}</p>
                    <p> {props.profile.contacts.vk}</p>
                    <p> {props.profile.contacts.instagram}</p>
                    <p> {props.profile.contacts.mainLink}</p>
                </div>
                <div className={S.status}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo