import React from 'react';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";

class Categories extends React.Component {
    render () {
        return (
            <HashRouter>
                <div class="list is-hoverable is-pulled-right is-shadowless">
                    <NavLink to="/categories" id="categories" class="subtitle is-3 has-text-weight-bold has-text-danger">
                    Categories
                    </NavLink>
                    <NavLink to="/album" id="all-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    All Photos
                    </NavLink>
                    <NavLink to="/album" id="recent-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Recent Photos
                    </NavLink>
                    <NavLink to="/album" id="favorites" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Favorites
                    </NavLink>
                    <NavLink to="/album" id="trip-to-austria" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Trip to Austria
                    </NavLink>
                    <NavLink to="/album" id="selfies" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Selfies
                    </NavLink>
                </div>
            </HashRouter>
            );
    }  
    componentDidMount() {
        document.title = 'Categories';
    }
}

export default Categories; 