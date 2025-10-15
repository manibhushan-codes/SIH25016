import React, { useState } from 'react';
import './StaffDashboard.css';

const StaffDashboard = () => {
  // View is fixed to staff-only (no toggle)

  // Tab states
  const [activeTab, setActiveTab] = useState('classes');
  const [selectedClass, setSelectedClass] = useState('CSE-A');

  // Attendance states
  const [attendanceData, setAttendanceData] = useState({
    '24691A05A1': 'P',
    '24691A05A2': 'P',
    '24691A05A3': 'P',
    '24691A05A4': 'P',
    '24691A05A5': 'P',
    '24691A05A6': 'P',
    '24691A05A7': 'P',
    '24691A05A8': 'P',
    '24691A05A9': 'P',
    '24691A05B0': 'P'
  });

  // Modal states
  const [showProfileModal, setShowProfileModal] = useState(false);

  // File upload state
  const [selectedFile, setSelectedFile] = useState(null);

  // Student data removed — staff-only UI

  const students = [
    { name: 'Aarav Sharma', rollNo: '24691A05A1' },
    { name: 'Vivaan Singh', rollNo: '24691A05A2' },
    { name: 'Aditya Kumar', rollNo: '24691A05A3' },
    { name: 'Vihaan Gupta', rollNo: '24691A05A4' },
    { name: 'Arjun Patel', rollNo: '24691A05A5' },
    { name: 'Sai Reddy', rollNo: '24691A05A6' },
    { name: 'Reyansh Verma', rollNo: '24691A05A7' },
    { name: 'Krishna Yadav', rollNo: '24691A05A8' },
    { name: 'Ishaan Khan', rollNo: '24691A05A9' },
    { name: 'Shaurya Desai', rollNo: '24691A05B0' }
  ];

  const timetableData = [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-A' },
    { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-B' },
    { day: 'Friday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' }
  ];

  // Calculate absentees count
  const absenteesCount = Object.values(attendanceData).filter(status => status === 'Ab').length;

  const handleAttendanceChange = (rollNo, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [rollNo]: status
    }));
  };

  const handleSelectAll = (status) => {
    const newAttendanceData = {};
    students.forEach(student => {
      newAttendanceData[student.rollNo] = status;
    });
    setAttendanceData(newAttendanceData);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleProfileUpload = () => {
    // Handle profile picture upload logic
    setShowProfileModal(false);
  };

  return (
    <div className="staff-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="staff-info">
          <h1 className="staff-name">Dr K. Nirmala</h1>
          <div className="staff-contact">
            <span className="contact-item">
              <span className="icon">✉</span>
              nirmala@mits.ac.in
            </span>
            <span className="contact-item">
              <span className="icon">📞</span>
              +91 1234567890
            </span>
          </div>
        </div>
        <div className="profile-section">
          <img
            src="/api/placeholder/80/80"
            alt="Profile"
            className="profile-image"
            onClick={() => setShowProfileModal(true)}
          />
        </div>
      </div>

      {/* Staff-only view */}
      {/* Navigation Tabs */}
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === 'classes' ? 'active' : ''}`}
              onClick={() => setActiveTab('classes')}
            >
              Classes & Attendance
            </button>
            <button
              className={`nav-tab ${activeTab === 'timetable' ? 'active' : ''}`}
              onClick={() => setActiveTab('timetable')}
            >
              Timetable
            </button>
          </div>

          {activeTab === 'classes' ? (
            /* Classes & Attendance Section */
            <div className="classes-section">
              {/* Class Selection Tabs */}
              <div className="class-tabs">
                {['CSE-A', 'CSE-B', 'CSE-C'].map(className => (
                  <button
                    key={className}
                    className={`class-tab ${selectedClass === className ? 'active' : ''}`}
                    onClick={() => setSelectedClass(className)}
                  >
                    {className}
                  </button>
                ))}
              </div>

              <div className="attendance-content">
                {/* Left Section - Attendance Table */}
                <div className="attendance-left">
                  <h2 className="section-title">Manage Attendance</h2>

                  {/* Select All Options */}
                  <div className="select-all-row">
                    <span className="select-all-label">Select All:</span>
                    {['P', 'Ab', 'PM'].map(status => (
                      <label key={status} className="radio-option">
                        <input
                          type="radio"
                          name="selectAll"
                          checked={Object.values(attendanceData).every(val => val === status)}
                          onChange={() => handleSelectAll(status)}
                        />
                        <span className="radio-label">{status}</span>
                      </label>
                    ))}
                  </div>

                  {/* Students Table */}
                  <div className="students-table">
                    <div className="table-header">
                      <div className="col-name">Student Name</div>
                      <div className="col-roll">Roll No.</div>
                      <div className="col-attendance">Attendance</div>
                    </div>
                    {students.map(student => (
                      <div key={student.rollNo} className="table-row">
                        <div className="col-name">{student.name}</div>
                        <div className="col-roll">{student.rollNo}</div>
                        <div className="col-attendance">
                          {['P', 'Ab', 'PM'].map(status => (
                            <label key={status} className="radio-option">
                              <input
                                type="radio"
                                name={`attendance-${student.rollNo}`}
                                checked={attendanceData[student.rollNo] === status}
                                onChange={() => handleAttendanceChange(student.rollNo, status)}
                              />
                              <span className="radio-label">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <button className="submit-btn">Submit Attendance</button>
                </div>

                {/* Right Sidebar */}
                <div className="attendance-right">
                  {/* Absentees Section */}
                  <div className="sidebar-section">
                    <div className="section-header">
                      <span className="icon">👥</span>
                      <h3>Absentees ({absenteesCount})</h3>
                    </div>
                    <p className="section-subtitle">Students marked as absent.</p>
                    <p className="empty-message">No students are marked as absent.</p>
                  </div>

                  {/* Class Picture Section */}
                  <div className="sidebar-section">
                    <div className="section-header">
                      <span className="icon">📷</span>
                      <h3>Class Picture</h3>
                    </div>
                    <p className="section-subtitle">Upload a photo for the class.</p>
                    <div className="upload-area">
                      <div className="upload-placeholder">
                        <span className="camera-icon">📷</span>
                      </div>
                      <input
                        type="file"
                        id="class-picture"
                        accept="image/*"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                      />
                      <label htmlFor="class-picture" className="upload-btn">
                        Select Picture
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Timetable Section */
            <div className="timetable-section">
              <h2 className="section-title">Your Weekly Timetable</h2>
              <div className="timetable-table">
                <div className="table-header">
                  <div className="col-day">Day</div>
                  <div className="col-time">Time</div>
                  <div className="col-subject">Subject</div>
                  <div className="col-class">Class</div>
                </div>
                {timetableData.map((entry, index) => (
                  <div key={index} className="table-row">
                    <div className="col-day">{entry.day}</div>
                    <div className="col-time">{entry.time}</div>
                    <div className="col-subject">{entry.subject}</div>
                    <div className="col-class">{entry.class}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
      {/* Profile Picture Upload Modal */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Upload Profile Picture</h3>
            <p>Select a new image to use as your avatar.</p>
            <div className="file-input-container">
              <input
                type="file"
                id="profile-picture"
                accept="image/*"
                onChange={handleFileSelect}
              />
              <label htmlFor="profile-picture" className="file-input-label">
                Choose File - {selectedFile ? selectedFile.name : 'No file chosen'}
              </label>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowProfileModal(false)}>
                Cancel
              </button>
              <button className="upload-btn-modal" onClick={handleProfileUpload}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDashboard;