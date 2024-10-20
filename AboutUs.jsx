import React from 'react';
import "../AboutUs.css"; // Make sure to create and style this CSS file

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to the Environmental Sustainability Action Platform! Our mission is to empower individuals and communities to make informed decisions that positively impact the environment. We believe that every small action counts, and together we can create a sustainable future for generations to come.
            </p>
            <h2>Our Vision</h2>
            <p>
                We envision a world where everyone takes proactive steps towards sustainability. By promoting eco-friendly initiatives and providing resources, we aim to inspire action that leads to a healthier planet.
            </p>
            <h2>Our Values</h2>
            <ul>
                <li><strong>Community:</strong> We believe in the power of community-driven initiatives and collective action.</li>
                <li><strong>Education:</strong> We are committed to educating individuals about sustainability practices and the importance of environmental stewardship.</li>
                <li><strong>Innovation:</strong> We embrace innovative solutions and technologies that promote sustainability and conservation.</li>
                <li><strong>Inclusivity:</strong> We strive to include diverse voices in the conversation about sustainability, ensuring everyone has a seat at the table.</li>
            </ul>
            <h2>Join Us</h2>
            <p>
                Join us on our journey towards sustainability! Explore eco-friendly activities, track your progress, and connect with like-minded individuals. Together, we can make a difference and create a positive impact on our planet.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or would like to get involved, feel free to reach out to us at <a href="mailto:contact@ecoactionplatform.com">contact@ecoactionplatform.com</a> or call us at <strong>(555) 123-4567</strong>.
            </p>
        </div>
    );
};

export default AboutUs;
