import React from "react";
import AvaterImage from '../../assets/images/avater.jpg'
import {FiSearch} from 'react-icons/fi'
import './todopage.css'

const TodoPage = () => {
    return(
        <div>
            <img src={AvaterImage} alt='avater' className="avater-image" />
            <div>
                <h3>What are you doing today?</h3>
                <input type="text" id="message" placeholder="Add your Task"/>
                <FiSearch />
            </div>
            <div>
                <h2>Category</h2>
                <div className="card-container">
                    <p>Lorem50</p>
                </div>
            </div>

            <div>
                <h2>Today's Task</h2>
            </div>

        </div>
    )
}

export default TodoPage