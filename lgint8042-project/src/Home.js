import React from 'react';
import Title from './Title';
import Categories from './Categories';
import RecentPhotos from './RecentPhotos';

class Home extends React.Component {
    render () {
        return (
            <div>
                <Title name="Recent Photos" />
                <Categories />
                <RecentPhotos />
            </div>
        );
    }  
    componentDidMount() {
        document.title = 'Recent Photos';
    }
}

document.title = "Recent Photos";

export default Home; 