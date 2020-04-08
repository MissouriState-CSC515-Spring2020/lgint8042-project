import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class RecentPhotos extends React.Component {
    render () {
        let videos = this.props.videos;
        let thumbnails = videos.map((item) => item.snippet.thumbnails.high.url);
        let videoIDs = videos.map((item) => item.id.videoId);
        
        return (
            <HashRouter>
                <section className="section">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-9">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[0]}>
                                        <img src={thumbnails[0]} sizes="(max-width: 280px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[1]}>
                                        <img src={thumbnails[1]} sizes="(max-width: 280px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[5]}>
                                        <img src={thumbnails[5]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[6]}>
                                        <img src={thumbnails[6]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[7]}>
                                        <img src={thumbnails[7]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[11]}>
                                        <img src={thumbnails[11]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                </div>
                                <div className="tile is-parent is-vertical">
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[2]}>
                                        <img src={thumbnails[2]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[3]}>
                                        <img src={thumbnails[3]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[4]}>
                                        <img src={thumbnails[4]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[8]}>
                                        <img src={thumbnails[8]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[9]}>
                                        <img src={thumbnails[9]} sizes="(max-width: 480px; max-height: 360px)"></img>
                                    </NavLink>
                                    </figure>
                                </article>
                                <article className="tile is-child is-12">
                                    <figure className="image">
                                    <NavLink to={'/video/' + videoIDs[10]}>
                                        <img src={thumbnails[10]} sizes="(max-width: 480px; max-height: 360px)"></img>
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
}

export default RecentPhotos; 