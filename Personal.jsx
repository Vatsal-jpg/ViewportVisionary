import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const CircularProgressTracker = () => {
  const [tasksCompleted, setTasksCompleted] = useState(0); // Track the number of tasks completed

  // Achievements
  const achievements = [
    { name: '5 Tasks Completed', unlocked: tasksCompleted >= 5 },
    { name: '10 Tasks Completed', unlocked: tasksCompleted >= 10 },
  ];

  // Handle task completion
  const completeTask = () => {
    if (tasksCompleted < 10) {
      setTasksCompleted(tasksCompleted + 1); // Increment task count by 1
    }
  };

  const data = [
    { name: 'Completed', value: tasksCompleted },
    { name: 'Remaining', value: 10 - tasksCompleted },
  ];

  const COLORS = ['#4caf50', '#d0d0d0']; // Colors for the chart

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>Personal Progress Tracker</h3>
      
      <PieChart width={220} height={220}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={90}
          innerRadius={60}
          startAngle={90}
          endAngle={-270}
          paddingAngle={5}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <text
          x={110} // Centering X position
          y={110} // Centering Y position
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12px"
          fontWeight="bold"
          fill={(tasksCompleted * 10) === 100 ? "#4caf50" : "#000"}
        >
          {(tasksCompleted * 10) === 100 ? "Task Completed!" : `${tasksCompleted * 10}%`}
        </text>
      </PieChart>

      <p>{tasksCompleted} / 10 Tasks Completed</p>
      <button
        onClick={completeTask}
        style={buttonStyle}
        disabled={tasksCompleted === 10} // Disable button when 10 tasks are completed
      >
        Complete Task
      </button>

      <h3>Achievements & Rewards</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index} style={{ color: achievement.unlocked ? 'green' : 'gray' }}>
            {achievement.name} - {achievement.unlocked ? 'Unlocked' : 'Locked'}
          </li>
        ))}
      </ul>

      {tasksCompleted === 10 && <p style={{ color: 'green', fontWeight: 'bold' }}>All tasks completed!</p>}
    </div>
  );
};

// Button style
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  marginTop: '15px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CircularProgressTracker;