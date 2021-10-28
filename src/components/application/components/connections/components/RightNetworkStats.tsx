import React from 'react'
import { useSelector } from 'react-redux'

import profilepic from '../../../../../images/connections/profilepic.png'

function RightNetworkStats({ numberOfConnections }: any) {
    const userInfo = useSelector((state: any)=> state.userInfo);
    return (
        <div className="right-network-stats">
            <div className="right-network-stats--img-name">
                <div className="right-network-stats--img-container">
                    <img src={userInfo.avatar} alt="" className="right-network-stats--img" />
                </div>
                {/* <span>{userInfo.first_name} {userInfo.last_name}</span> */}
                <h5>Your Network Stats</h5>
            </div>
            <div className="right-network-stats--content">
                <div className="right-network-stats--content-titles">
                    <p>
                        <span>Total connections</span>
                        <span>{numberOfConnections}</span>
                    </p>
                    <p>
                        <span>Last week's connections</span>
                        <span>18</span>
                    </p>
                    <p>
                        <span>Your mentors</span>
                        <span>4</span>
                    </p>
                    <p>
                        <span>Appearances in People you may know</span>
                        <span>26</span>
                    </p>
                    <p>
                        <span>Percentage Growth</span>
                        <span style={{ color: '#07d400' }}>+3.95%</span>
                    </p>
                </div>
                {/* <div className="right-network-stats--content-data">
                    <p>473</p>
                    <p>18</p>
                    <p>4</p>
                    <p>26</p>
                    <p style={{color: '#07d400'}}>+3.95%</p>
                </div> */}
            </div>
        </div>
    )
}

export default RightNetworkStats
