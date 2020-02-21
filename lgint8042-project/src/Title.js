import React from 'react';

class Title extends React.Component {
    render () {
        return (
            <level class="level level-right">
                <h1 class="title is-1 has-text-weight-bold has-text-danger">{this.props.name}</h1>
            </level>
        );
    }  
}

export default Title; 