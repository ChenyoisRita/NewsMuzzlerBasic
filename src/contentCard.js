import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component {
    render() {
        return (
            <div className={'card mb-3'}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Explore Open Source Libraries</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}