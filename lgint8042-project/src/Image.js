import React from 'react';
import './Image.css'

class Image extends React.Component {
    constructor() {
        super();
        this.state = {
            video: []
        };
    }

    componentWillMount() {
        let videoID = this.props.match.params.videoID;
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&key=' + process.env.REACT_APP_API_KEY + '&id=' + videoID)
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject(response);
            }
            console.log('Response status: ', response.status, response.statusText);
            return response.json(); 
        }).then(data => {
            let video = data.items;
            this.setState({video: video}); 
        })
    }

    render () {
        let video = this.state.video;
        let thumbnail = video.map((item) => item.snippet.thumbnails.maxres.url);
        let title = video.map((item) => item.snippet.title);
        let description = video.map((item) => item.snippet.description);
        let tags = video.map((item) => item.snippet.tags.join(", "));

        return (
            <section className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-9">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                        <img src={thumbnail}></img>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="list is-pulled-left is-shadowless image-list">
                    <div className="level level-left">
                        <p className="title is-1 has-text-weight-bold has-text-danger">{title}</p>
                    </div>
                    <div>
                        <p className="is-size-4 has-text-danger has-text-weight-bold">Description</p>
                        <p className="is-size-6 has-text-danger">{description}</p>
                    </div>
                    <div>
                        <p className="is-size-4 has-text-danger has-text-weight-bold">Tags</p>
                        <p className="is-size-6 has-text-danger">{tags}</p>
                    </div>
                </div>
            </section>
        );
    }  

    componentDidMount() {
        document.title = "Video"; 
    }
}


export default Image; 