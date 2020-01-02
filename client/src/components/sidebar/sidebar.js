import React from 'react';
import Navigation from './navigation';

const Sidebar = props => (
    <div>
        <form>
            <label htmlFor="AND">
                <input
                    type="checkbox"
                    name="AND"
                    id="AND"
                    onChange={props.handlesChanges}
                />
                Android Developer
            </label>
            <label htmlFor="DS">
                <input
                    type="checkbox"
                    name="DS"
                    id="DS"
                    onChange={props.handlesChanges}
                />
                Data Science
            </label>
            <label htmlFor="iOS">
                <input
                    type="checkbox"
                    name="iOS"
                    id="iOS"
                    onChange={props.handlesChanges}
                />
                iOS Developer
            </label>
            <label htmlFor="WEB">
                <input
                    type="checkbox"
                    name="WEB"
                    id="WEB"
                    onChange={props.handlesChanges}
                />
                Web Developer
            </label>
            <label htmlFor="UX">
                <input
                    type="checkbox"
                    name="UX"
                    id="UX"
                    onChange={props.handlesChanges}
                />
                UX Design
            </label>
        </form>
        <Navigation />
    </div>
);

export default Sidebar;
