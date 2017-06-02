
var App = React.createClass({

    getInitialState: function(){
        return {
        }
    },

    render: function(){
        return <div>
            <div className="header">
                <a target="_blank" href="http://www.sqltabs.com"><img className="logo" src="img/logo.png"/> SQL Share </a>
            </div>

            <div className="footer">
                <div><a target="_blank" href="https://github.com/sasha-alias"> Created by Sasha Aliashkevich </a></div>
                <div><a target="_blank" href="https://github.com/sasha-alias/sqlshare"> Github </a></div>
                <div><a target="_blank" href="https://github.com/sasha-alias/sqlshare/blob/master/LICENSE.md"> MIT License </a></div>
            </div>
        </div>
    },

});

var app = <App/>;
var mountNode = document.getElementById('root');

ReactDOM.render(app, mountNode);
