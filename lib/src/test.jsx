import React from 'react';

var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            count: this.props.count
        };
    },
    // Once the component has been mounted, we can enable the button 
    componentDidMount: function () {
        this.setDone({
            count: 8
        })
    },
    render: function () {
        return (<h1>Hello New World {this.state.count} {this.props.phrase}!</h1>);
    },
    setDone: function(count) {
        this.setState({ count: !!count});
    }
});

export default HelloWorld;