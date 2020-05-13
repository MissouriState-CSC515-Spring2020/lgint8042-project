import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom'; 

class Album extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            title: []
        };
    }

    componentWillMount() {
        let playlistID = this.props.match.params.playlistID;
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=' + process.env.REACT_APP_API_KEY + '&playlistId=' + playlistID)
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject(response);
            }
            console.log('Response status: ', response.status, response.statusText);
            return response.json(); 
        }).then(data => {
            let videos = data.items;
            this.setState({videos: videos}); 
            console.log(data);
        })

        fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=' + process.env.REACT_APP_API_KEY + '&id=' + playlistID)
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject(response);
            }
            console.log('Response status: ', response.status, response.statusText);
            return response.json(); 
        }).then(data => {
            let title = data.items;
            this.setState({title: title}); 
        })
        
    }

    render () {
        let videos = this.state.videos; 
        let title = this.state.title;
        let thumbnails = videos.map((item) => item.snippet.thumbnails.standard.url);
        let ids = videos.map((item) => item.snippet.resourceId.videoId);
        let t = title.map((item) => item.snippet.title);

        return (
            <HashRouter>
                <section className="section">
                    <level className="level level-left">
                        <h1 className="title is-3 has-text-weight-bold has-text-danger">{t}</h1>
                    </level>

                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-9">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child is-12">
                                        <figure className="image">
                                            <NavLink to={"/video/" + ids[0]}>
                                                <img src={thumbnails[0]}></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article className="tile is-child is-12">
                                        <figure className="image">
                                            <NavLink to={"/video/" + ids[1]}>
                                                <img src={thumbnails[1]}></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article className="tile is-child is-12">
                                        <figure className="image">
                                            <NavLink to={"/video/" + ids[2]}>
                                                <img src={thumbnails[2]}></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article className="tile is-child is-12">
                                        <figure className="image">
                                            <NavLink to={"/video/" + ids[3]}>
                                                <img src={thumbnails[3]}></img>
                                            </NavLink>
                                        </figure>
                                    </article>
                                    <article className="tile is-child is-12">
                                        <figure className="image">
                                            <NavLink to={"/video/" + ids[4]}>
                                                <img src={thumbnails[4]}></img>
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
        document.title = 'Playlist';
    }
}

export default Album; 