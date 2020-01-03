import React from 'react';
import Navigation from './navigation';

const Sidebar = props => (
    <div>
        <form>
            <label htmlFor="Android Development">
                <input
                    type="checkbox"
                    name="Android Development"
                    id="Android Development"
                    onChange={props.handlesChanges}
                />
                Android Developer
            </label>
            <label htmlFor="Data Science">
                <input
                    type="checkbox"
                    name="Data Science"
                    id="Data Science"
                    onChange={props.handlesChanges}
                />
                Data Science
            </label>
            <label htmlFor="iOS Development">
                <input
                    type="checkbox"
                    name="iOS Development"
                    id="iOS Development"
                    onChange={props.handlesChanges}
                />
                iOS Developer
            </label>
            <label htmlFor="Web Development">
                <input
                    type="checkbox"
                    name="Web Development"
                    id="Web Development"
                    onChange={props.handlesChanges}
                />
                Web Developer
            </label>
            <label htmlFor="UX Design">
                <input
                    type="checkbox"
                    name="UX Design"
                    id="UX Design"
                    onChange={props.handlesChanges}
                />
                UX Design
            </label>
        </form>
        <Navigation />
    </div>
);

export default Sidebar;
