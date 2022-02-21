import React from "react"
import ReactDOM from "react-dom"
import Head from "./Head"
import Profile from "./Profile"
import Buttons from "./Buttons"
import Content from "./Content"
import Footer from "./Footer"

export default function App (){
    return(
        <div>
        <Head />
        <Profile />
        <Buttons />
        <Content />
        <Footer />
        </div>
    )
}