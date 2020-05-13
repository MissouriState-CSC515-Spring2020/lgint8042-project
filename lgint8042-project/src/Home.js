import React from 'react';

const Title = React.lazy(() => import('./Title'));
const Categories = React.lazy(() => import('./Categories'));
const RecentPhotos = React.lazy(() => import('./RecentPhotos'));

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: []
        };
    }

    componentDidMount() {
        document.title = 'Recent Videos';
        fetch('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UC4qk9TtGhBKCkoWz5qGJcGg&maxResults=25&key=' + process.env.REACT_APP_API_KEY)
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject(response);
            }
            console.log('Response status: ', response.status, response.statusText);
            return response.json(); 
        }).then(data => {
            let videos = data.items;
            this.setState({videos: videos}); 
        })
    }

    render () {
        let videos = this.state.videos; 
        return (
            <div>
                <Title name="Tati Westbrook" />
                <Categories />
                <RecentPhotos videos={this.state.videos}/>
            </div>
        );
    }  
}

document.title = "Recent Videos";

export default Home; 