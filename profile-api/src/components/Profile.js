import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const profileInfo = useSelector(state => state.profile)
    
    return(
        <div className="mainProfile">
            <div className="profileChildren">
                <img src="https://media1.popsugar-assets.com/files/thumbor/eOF2Umn-mqNGnohxrtjeurwWDmI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/20/677/n/1922283/1118a12c5b7adb1e342de9.55515725_/i/Michael-Scott-Misquotations-Office-Video.jpg" alt="profile picture" className="profilePicture"/>
                <span>{profileInfo.name}</span>
                <span>{profileInfo.login}</span>
                <span>{profileInfo.bio}</span>
                <span>{profileInfo.location}</span>
            </div>
        </div>
    )
}