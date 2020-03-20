import React from 'react';
class Navigation extends React.Component{
    render(){
        return(
            <div className="root">
                <div className="navigation flex">
                    <button className="button">
                        <div className="nav">
                            About
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            Work
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            Contact
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Navigation;