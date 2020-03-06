import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom'; 

class Album extends React.Component {
    render () {
        return (
            <HashRouter>
                <section class="section">
                    <level class="level level-right">
                        <h1 class="title is-1 has-text-weight-bold has-text-danger">{this.props.title}</h1>
                    </level>

                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-9">
                            <div class="tile">
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child is-12">
                                        <figure class="image">
                                            <NavLink to="/image" id="photo1">
                                                <img src="/photos/IMG_1853.jpeg"></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article class="tile is-child is-12">
                                        <figure class="image">
                                            <NavLink to="/image" id="photo2">
                                                <img src="/photos/IMG_1948.jpeg"></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article class="tile is-child is-12">
                                        <figure class="image">
                                            <NavLink to="/image" id="photo3">
                                                <img src="/photos/IMG_4817.jpeg"></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HashRouter>
        );
    }  
    componentDidMount() {
        document.title = 'Trip to Austria';
    }
}

export default Album; 