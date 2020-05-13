import './Categories.css';
import React from 'react';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";

class Categories extends React.Component {
    render () {
        return (
            <HashRouter>
                <div className="list is-hoverable is-pulled-right is-shadowless">
                    <NavLink to="/playlists" id="categories" class="subtitle is-3 has-text-weight-bold has-text-danger">
                    Playlists
                    </NavLink>
                    <NavLink to={"/playlist/PL-2O9EScQNttzY0lX-DhpEHqRD6YQD1bu/Favorite_Videos"} id="all-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Favorite Videos
                    </NavLink>
                    <NavLink to={"/playlist/PL-2O9EScQNtu2usuP8u8Hy01oKaK-_hi8/PR_Unboxing"} id="recent-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    PR Unboxing
                    </NavLink>
                    <NavLink to={"/playlist/PL-2O9EScQNtuz9Fstecbg0_FGJSlLyR9S/First_Impressions"} id="favorites" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    First Impressions
                    </NavLink>
                    <NavLink to={"/playlist/PL-2O9EScQNtsfxZ0St-7SZB9FFDe1d8lN/Most_Recent_Videos"} id="trip-to-austria" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                    Most Recent Videos
                    </NavLink>
                </div>
            </HashRouter>
            );
    }  
    componentDidMount() {
        document.title = 'Playlists';
    }
}

export default Categories; 