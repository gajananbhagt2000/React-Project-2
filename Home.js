import React from 'react';
const Home = () => {
    return (
        <div className="card" data-testid="about-content">
            <img src="https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-imgtop" alt="Banner" />
            <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">You are referring to Royal Enfield Limited. The first Royal Enfield motorcycle was built in 1901.
                    The Enfield Cycle Company's Royal Enfield Bullet is the longest-lived motorcycle design in history.</p>
            </div>
        </div>
    );
}
export default Home;