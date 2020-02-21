import React from 'react';

class Album extends React.Component {
    render () {
        return (
            <div>
                <level class="level level-right">
                    <h1 class="title is-1 has-text-weight-bold has-text-danger">{this.props.title}</h1>
                </level>

                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-9">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child is-12">
                                    <figure class="image">
                                        <a id="photo1">
                                            <img src="/photos/IMG_1853.jpeg"></img>
                                        </a>
                                    </figure>
                                </article>
                                <article class="tile is-child is-12">
                                    <figure class="image">
                                        <a id="photo2">
                                            <img src="/photos/IMG_1948.jpeg"></img>
                                        </a>
                                    </figure>
                                </article>
                                <article class="tile is-child is-12">
                                    <figure class="image">
                                        <a id="photo3">
                                            <img src="/photos/IMG_4817.jpeg"></img>
                                        </a>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

export default Album; 