import React from 'react';
class Navigation extends React.Component{
    render(){
        return(
            <div className="root">
                <div className="navigation flex">
                    <button className="button">
                        <div className="nav">
                            WORK
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            ABOUT
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            CONTACT
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Navigation;