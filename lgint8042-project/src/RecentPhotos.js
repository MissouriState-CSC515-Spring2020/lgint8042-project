import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class RecentPhotos extends React.Component {
    render () {
        return (
            <HashRouter>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-9">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                            <article class="tile is-child is-12">
                                <figure class="image">
                                <NavLink to="/image" id="photo-1">
                                    <img src="/photos/IMG_2587-1.jpeg"></img>
                                </NavLink>
                                </figure>
                            </article>
                            <article class="tile is-child is-12">
                                <figure class="image">
                                <NavLink to="/image" id="photo-2">
                                    <img src="/photos/IMG_2358.jpeg"></img>
                                </NavLink>
                                </figure>
                            </article>
                            </div>
                            <div class="tile is-parent is-vertical">
                            <article class="tile is-child is-12">
                                <figure class="image">
                                <NavLink to="/image" id="photo-3">
                                    <img src="/photos/IMG_1853.jpeg"></img>
                                </NavLink>
                                </figure>
                            </article>
                            <article class="tile is-child is-12">
                                <figure class="image">
                                <NavLink to="/image" id="photo-4">
                                    <img src="/photos/IMG_1948.jpeg"></img>
                                </NavLink>
                                </figure>
                            </article>
                            <article class="tile is-child is-12">
                                <figure class="image">
                                <NavLink to="/image" id="photo-5">
                                    <img src="/photos/IMG_4817.jpeg"></img>
                                </NavLink>
                                </figure>
                            </article>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }  
}

export default RecentPhotos; 