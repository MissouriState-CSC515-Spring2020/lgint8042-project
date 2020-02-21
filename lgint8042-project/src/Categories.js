import React from 'react';

class Categories extends React.Component {
    render () {
        return (
            <div class="list is-hoverable is-pulled-right is-shadowless">
                <a id="categories" class="subtitle is-3 has-text-weight-bold has-text-danger">
                Categories
                </a>
                <a id="all-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                All Photos
                </a>
                <a id="recent-photos" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                Recent Photos
                </a>
                <a id="favorites" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                Favorites
                </a>
                <a id="trip-to-austria" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                Trip to Austria
                </a>
                <a id="selfies" class="is-block subtitle is-6 has-text-weight-semibold has-text-danger">
                Selfies
                </a>
            </div>);
    }  
}

export default Categories; 