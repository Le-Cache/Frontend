import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './navigation';
import logo from '../../assets/logo.png';

const Sidebar = props => (
    <aside>
        <div className="logo">
            <NavLink exact to="/">
                <img src={`${logo}`} alt="Le Cache" />
            </NavLink>
        </div>
        <form>
            <label htmlFor="Android Development" className="check">
                <input
                    type="checkbox"
                    name="Android Development"
                    id="Android Development"
                    onChange={props.handlesChanges}
                    checked={
                        props.filters.includes('Android Development')
                            ? true
                            : false
                    }
                />
                <span>Android Developer</span>
            </label>
            <label htmlFor="Data Science" className="check">
                <input
                    type="checkbox"
                    name="Data Science"
                    id="Data Science"
                    onChange={props.handlesChanges}
                    checked={
                        props.filters.includes('Data Science') ? true : false
                    }
                />
                <span>Data Science</span>
            </label>
            <label htmlFor="iOS Development" className="check">
                <input
                    type="checkbox"
                    name="iOS Development"
                    id="iOS Development"
                    onChange={props.handlesChanges}
                    checked={
                        props.filters.includes('iOS Development') ? true : false
                    }
                />
                <span>iOS Developer</span>
            </label>
            <label htmlFor="Web Development" className="check">
                <input
                    type="checkbox"
                    name="Web Development"
                    id="Web Development"
                    onChange={props.handlesChanges}
                    checked={
                        props.filters.includes('Web Development') ? true : false
                    }
                />
                <span>Web Developer</span>
            </label>
            <label htmlFor="UX Design" className="check">
                <input
                    type="checkbox"
                    name="UX Design"
                    id="UX Design"
                    onChange={props.handlesChanges}
                    checked={props.filters.includes('UX Design') ? true : false}
                />
                <span>UX Design</span>
            </label>
        </form>
        <Navigation />
    </aside>
);

export default Sidebar;
