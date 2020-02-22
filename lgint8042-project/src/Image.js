import React from 'react';
import './Image.css'

class Image extends React.Component {
    render () {
        return (
            <div>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-9">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child is-12">
                                    <figure class="image">
                                        <img src="./photos/IMG_4817.jpeg"></img>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="list is-pulled-left is-shadowless image-list">
                    <div class="level level-left">
                        <p class="title is-1 has-text-weight-bold has-text-danger">Photo {this.props.number}</p>
                    </div>
                    <div>
                        <p class="is-size-4 has-text-danger has-text-weight-bold">Date</p>
                        <p class="has-text-weight-semibold has-text-danger">{this.props.date}</p>
                    </div>
                    <div>
                        <p class="is-size-4 has-text-danger has-text-weight-bold">Location</p>
                    <p class="has-text-weight-semibold has-text-danger">{this.props.location}</p>
                    </div>
                    <div>
                        <p class="is-size-4 has-text-danger has-text-weight-bold">Dimension</p>
                        <p class="has-text-weight-semibold has-text-danger">{this.props.dimensions}</p>
                    </div>
                    <div>
                        <p class="is-size-4 has-text-danger has-text-weight-bold">Image Type</p>
                        <p class="has-text-weight-semibold has-text-danger">{this.props.type}</p>
                    </div>
                </div>
            </div>
        );
    }  
    componentDidMount() {
        document.title = 'Photo 4817';
    }
}

export default Image; 