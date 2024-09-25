import React from 'react';
import bgImg from '../../assets/schedule-bg.jpg'; // Correctly importing the background image

const ClassesSchedule = () => {
  const schedule = {
    Monday: ['Yoga - 6:00 AM', 'Spinning - 9:00 AM', 'Zumba - 5:00 PM'],
    Tuesday: ['Pilates - 7:00 AM', 'Boxing - 12:00 PM', 'Crossfit - 6:00 PM'],
    Wednesday: ['HIIT - 6:00 AM', 'Strength Training - 10:00 AM', 'Aerobics - 4:00 PM'],
    Thursday: ['Yoga - 7:00 AM', 'Kickboxing - 1:00 PM', 'Cardio - 5:30 PM'],
    Friday: ['Zumba - 6:30 AM', 'Crossfit - 11:00 AM', 'Body Pump - 6:00 PM'],
    Saturday: ['Pilates - 9:00 AM', 'Spinning - 11:30 AM'],
  };

  const maxClasses = Math.max(...Object.values(schedule).map(classes => classes.length));

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`, // Using the imported image as background
        minHeight: '100vh', // Ensure full height
      }}
    >
      <div className="w-full max-w-6xl p-10 shadow-2xl"> {/* Increased width */}
        {/* Intro Text */}
        <h1 className="text-5xl font-bold text-center text-white mb-4">Classes Schedule</h1>
        <p className="text-gray-200 text-center mb-8">
          This class schedule typically includes all of the workout routines that each member will be taught weekly.
        </p>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-lg"> {/* Increased text size */}
            <thead>
              <tr>
                {Object.keys(schedule).map((day, index) => (
                  <th
                    key={index}
                    className="border border-gray-400 px-8 py-8 text-white font-semibold text-center bg-primary" // Primary color for weekdays
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(maxClasses)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(schedule).map((classes, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-400 px-8 py-20 text-center text-white"
                    >
                      {classes[rowIndex] ? classes[rowIndex] : <span className="text-gray-400">No Class</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassesSchedule;
