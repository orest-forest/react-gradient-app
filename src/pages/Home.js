import React from 'react';
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'
import app from '../app.css'

export default function Home() {
    return (
        <div className="">
            <h3>List of gradients</h3>
            <ItemList/>
        </div>
    )
}

