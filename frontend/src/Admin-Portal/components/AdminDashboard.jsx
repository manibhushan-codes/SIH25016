import React, { useState } from 'react';

const AdminDashboard = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('students');

  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Sample data
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@email.com', password: 'password123' },
    { id: 2, name: 'Vivaan Singh', email: 'vivaan.singh@email.com', password: 'password123' },
    { id: 3, name: 'Aditya Kumar', email: 'aditya.kumar@email.com', password: 'password123' },
    { id: 4, name: 'Vihaan Gupta', email: 'vihaan.gupta@email.com', password: 'password123' },
    { id: 5, name: 'Aryan Patel', email: 'aryan.patel@email.com', password: 'password123' }
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Dr K. Nirmala', email: 'k.nirmala@university.edu', password: 'password123' },
    { id: 2, name: 'Prof. S. Verma', email: 's.verma@university.edu', password: 'password123' },
    { id: 3, name: 'Dr. R. Gupta', email: 'r.gupta@university.edu', password: 'password123' },
    { id: 4, name: 'Mrs. A. Sharma', email: 'a.sharma@university.edu', password: 'password123' },
    { id: 5, name: 'Mr. R. Singh', email: 'r.singh@university.edu', password: 'password123' }
  ]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.password) {
      const newUser = {
        id: Date.now(),
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      };

      if (activeTab === 'students') {
        setStudents(prev => [...prev, newUser]);
      } else {
        setStaff(prev => [...prev, newUser]);
      }

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: ''
      });
    }
  };

  const currentData = activeTab === 'students' ? students : staff;
  const currentTitle = activeTab === 'students' ? 'Student' : 'Staff Member';

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Admin Info Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#232020ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          A
        </div>
        <div>
          <h3 style={{ margin: '0', color: '#1f2937' }}>Admin User</h3>
          <p style={{ margin: '5px 0', color: '#6b7280' }}>admin@university.edu</p>
          <span style={{
            backgroundColor: '#dbeafe',
            color: '#333232ff',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            Administrator
          </span>
        </div>
      </div>

      {/* Page Title */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#2a2a2bff',
          margin: '0',
          display: 'inline-block',
          marginRight: '15px'
        }}>
          Admin Dashboard
        </h1>
        <span style={{
          backgroundColor: '#dbeafe',
          color: '#000',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          Admin
        </span>
      </div>

      {/* Tab Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px'
      }}>
        <button
          onClick={() => setActiveTab('students')}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: activeTab === 'students' ? '#080808ff' : '#e5e7eb',
            color: activeTab === 'students' ? 'white' : '#374151',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Manage Students
        </button>
        <button
          onClick={() => setActiveTab('staff')}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: activeTab === 'staff' ? '#090909ff' : '#e5e7eb',
            color: activeTab === 'staff' ? 'white' : '#374151',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Manage Staff
        </button>
      </div>

      {/* Add User Form */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          color: '#1f2937',
          fontSize: '20px'
        }}>
          Add New {currentTitle}
        </h3>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontWeight: '500'
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={`Enter ${currentTitle.toLowerCase()} full name`}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={`Enter ${currentTitle.toLowerCase()} email`}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontWeight: '500'
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'background-color 0.2s'
            }}
          >
            Add User
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          color: '#1f2937',
          fontSize: '20px'
        }}>
          {activeTab === 'students' ? 'Students' : 'Staff Members'}
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <th style={{
                  padding: '15px',
                  textAlign: 'left',
                  color: '#374151',
                  fontWeight: '600',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Name
                </th>
                <th style={{
                  padding: '15px',
                  textAlign: 'left',
                  color: '#374151',
                  fontWeight: '600',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Email
                </th>
                <th style={{
                  padding: '15px',
                  textAlign: 'left',
                  color: '#374151',
                  fontWeight: '600',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => (
                <tr key={user.id} style={{
                  borderBottom: '1px solid #f3f4f6',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{
                    padding: '15px',
                    color: '#1f2937',
                    fontWeight: '500'
                  }}>
                    {user.name}
                  </td>
                  <td style={{
                    padding: '15px',
                    color: '#6b7280'
                  }}>
                    {user.email}
                  </td>
                  <td style={{
                    padding: '15px',
                    color: '#6b7280'
                  }}>
                    {user.password}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;