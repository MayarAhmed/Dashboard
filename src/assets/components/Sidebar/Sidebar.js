import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import logo from '../../images/logo.png'
import avatar from '../../images/profile_photo.png'
import DashboardIcon from '../../images/vecr.png'
import taskIcon from '../../images/tasks-active.png'
import activeIcon from '../../images/active_circle.png'
import completedIcon from '../../images/completed_circle.png'
import userIcon from '../../images/email.png'
import boxIcon from '../../images/contacts.png'
import chatIcon from '../../images/chat.png'
import settingIcon from '../../images/settings.png'

import classes from './sidebar.module.css'

export default class Sidebar extends Component {

     state = {
      data:[ {
            src:DashboardIcon,
            name:'Dashboard'
        },
      
         {
            src:taskIcon,
            name:'Requests',
            extra:[
                {
             src:activeIcon,
            name:'pending',
               },
               {
            src:completedIcon,
            name:'confirmed', 
               },
               {
                   src:'',
                   name:'All requests',
                   active:true,
                }
            ]
        },

        {
            src:userIcon,
            name:'Users',
        },
        {
            src:boxIcon,
            name:'Boxes', 
        },
         {
            src:chatIcon,
            name:'Orders', 
        },
         {
            src:settingIcon,
            name:'Settings', 
        }
        

    ]}
    render() {
        return (
            <Aux className="container col-md-3 p-2 border-right">
               <img src={logo} alt="logo"/>
                <div className="row pt-5">
                <div className = "col-md-4">
                   <img src={avatar} alt ="avatar" />
                </div>
                <div className = "col-md-8">
                    <p className = {classes.name}>Ahmed Reda</p>
                    <p className={classes.code}>#1253724</p>
               </div>
               {/* sideBar Icons */}
               {this.state.data.map(item =>{
                   return(
               <>
                 <div className="col-md-2" key={item.id}>
               <img src={item.src } alt = {item.name} className={item.src ? classes.show : classes.hide  }/>
               </div>
                <div className="col-md-10">
               <p className={classes.textInfo}>{item.name}</p>
               </div>
               {item.name == 'Requests' ?
                 item.extra.map(index=>{
                     return(
                         <div className="row pl-5 col-md-12">
                <div className="col-md-2">
               <img src={index.src} alt = {index.name} className={index.src ? classes.show : classes.hide}/>
               </div>
                <div className="col-md-10">
                  <p style={{fontSize:'18px', textTransform : 'capitalize'}} className={index.active ? classes.active : null}>{index.name}</p>
               </div>
               </div>
                     )
                 })
              
               :null}
               </>
                   )
               })}
               
              
               </div>
            </Aux>
        )
    }
}
