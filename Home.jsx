import React from 'react';
import '../Home.css'; 
import homePfp from '../images/Home-pfp.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="image-container">
                <img src={homePfp} alt="Home Profile" className="background-image" />
                <div className="overlay-text">
                    <h1>Welcome to the Environmental Sustainability Action Platform</h1>
                    <p>Your journey towards a greener planet starts here!</p>
                </div>
            </div>
            <div className="content">
                <h2>About Us</h2>
                <p>
                    Our platform is dedicated to empowering individuals to make a positive impact on the environment.
                    Through a variety of eco-friendly activities, we aim to engage users in sustainable practices 
                    that contribute to a healthier planet.
                </p>
                <h2>Features</h2>
                <ul>
                    <li><strong>Activity Search & Filter:</strong> Discover eco-friendly initiatives by category and location.</li>
                    <li><strong>Progress Tracker:</strong> Visualize your sustainability goals and display real-time contributions.</li>
                    <li><strong>Impact Dashboard:</strong> See your real-time contributions (e.g., CO2 saved) and community data comparisons.</li>
                    <li><strong>Achievements & Badges:</strong> Earn and showcase badges for milestones with animated unlocks.</li>
                    <li><strong>Event Calendar:</strong> An interactive calendar for upcoming events, with an option to add to personal calendars.</li>
                    <li><strong>Leaderboards and Notifications:</strong> Rank users based on contributions and receive customizable notifications.</li>
                    <li><strong>Responsive & Accessible:</strong> Enjoy a seamless experience across devices with full accessibility features.</li>
                </ul>
                <h2>Join Us</h2>
                <p>
                    By participating in our community, you can track your personal progress, visualize your environmental impact,
                    and connect with like-minded individuals who share your passion for sustainability. 
                    Together, we can make a difference!
                </p>
            </div>
        </div>
    );
};

export default Home;
