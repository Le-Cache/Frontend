import React from 'react';
import Navigation from './navigation';
import logo from '../../assets/logo.png';

const Sidebar = props => (
    <aside>
        <div className="logo">
            <img src={`${logo}`} />
        </div>
        <form>
            <label htmlFor="Android Development" className="check">
                <input
                    type="checkbox"
                    name="Android Development"
                    id="Android Development"
                    onChange={props.handlesChanges}
                />
                <span>Android Developer</span>
            </label>
            <label htmlFor="Data Science" className="check">
                <input
                    type="checkbox"
                    name="Data Science"
                    id="Data Science"
                    onChange={props.handlesChanges}
                />
                <span>Data Science</span>
            </label>
            <label htmlFor="iOS Development" className="check">
                <input
                    type="checkbox"
                    name="iOS Development"
                    id="iOS Development"
                    onChange={props.handlesChanges}
                />
                <span>iOS Developer</span>
            </label>
            <label htmlFor="Web Development" className="check">
                <input
                    type="checkbox"
                    name="Web Development"
                    id="Web Development"
                    onChange={props.handlesChanges}
                />
                <span>Web Developer</span>
            </label>
            <label htmlFor="UX Design" className="check">
                <input
                    type="checkbox"
                    name="UX Design"
                    id="UX Design"
                    onChange={props.handlesChanges}
                />
                <span>UX Design</span>
            </label>
        </form>
        <Navigation />
    </aside>
);

export default Sidebar;
