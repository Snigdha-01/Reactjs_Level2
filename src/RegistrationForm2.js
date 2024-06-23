import React, { useState } from 'react';
import './RegistrationForm2.css';
import formImage from './img1.jpg'; // Import the image

const RegistrationForm2 = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [applyingForPosition, setApplyingForPosition] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [portfolioURL, setPortfolioURL] = useState('');
  const [managementExperience, setManagementExperience] = useState('');
  const [additionalSkills, setAdditionalSkills] = useState([]);
  const [preferredInterviewTime, setPreferredInterviewTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !/^\d+$/.test(phoneNumber) || // Validate phone number is digits only
      !applyingForPosition ||
      (applyingForPosition === 'Developer' && (!relevantExperience || !/^\d+$/.test(relevantExperience))) || // Validate experience is digits only
      (applyingForPosition === 'Designer' && (!portfolioURL || !isValidURL(portfolioURL))) ||
      (applyingForPosition === 'Manager' && !managementExperience) ||
      additionalSkills.length === 0 ||
      !preferredInterviewTime
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Display summary
    setSubmitted(true);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setApplyingForPosition('');
    setRelevantExperience('');
    setPortfolioURL('');
    setManagementExperience('');
    setAdditionalSkills([]);
    setPreferredInterviewTime('');
    setSubmitted(false);
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="container">
      <div className="registration-form">
        <img src={formImage} alt="Form Image" className="form-image" />
        {!submitted ? (
          <form onSubmit={handleSubmit} className="registration-form">
            <h1>Registration Form</h1>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              required
              pattern="[a-zA-Z]+" //only to alphabets
              value={fullName}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              title="Please enter only digits !!"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              pattern="\d*" // Restrict to digits only
            />

            <label htmlFor="applyingForPosition">Applying for Position:</label>
            <select
              id="applyingForPosition"
              value={applyingForPosition}
              onChange={(e) => {
                setApplyingForPosition(e.target.value);
                // Reset fields based on selection
                setRelevantExperience('');
                setPortfolioURL('');
                setManagementExperience('');
              }}
              required
            >
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>

            {(applyingForPosition === 'Developer' || applyingForPosition === 'Designer') && (
              <div>
                <label htmlFor="relevantExperience">Relevant Experience (years):</label>
                <input
                  type="number"
                  id="relevantExperience"
                  value={relevantExperience}
                  onChange={(e) => setRelevantExperience(e.target.value)}
                  required
                  min="1"
                />
              </div>
            )}

            {applyingForPosition === 'Designer' && (
              <div>
                <label htmlFor="portfolioURL">Portfolio URL:</label>
                <input
                  type="text"
                  id="portfolioURL"
                  value={portfolioURL}
                  onChange={(e) => setPortfolioURL(e.target.value)}
                  required
                />
              </div>
            )}

            {applyingForPosition === 'Manager' && (
              <div>
                <label htmlFor="managementExperience">Management Experience:</label>
                <input
                  type="text"
                  id="managementExperience"
                  value={managementExperience}
                  pattern="\d*"
                  onChange={(e) => setManagementExperience(e.target.value)}
                  required
                />
              </div>
            )}

            <fieldset>
              <legend>Additional Skills:</legend>
              <label>
                <input
                  type="checkbox"
                  value="JavaScript"
                  checked={additionalSkills.includes('JavaScript')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'JavaScript']);
                    } else {
                      setAdditionalSkills(additionalSkills.filter(skill => skill !== 'JavaScript'));
                    }
                  }}
                />
                JavaScript
              </label>
              <label>
                <input
                  type="checkbox"
                  value="HTML"
                  checked={additionalSkills.includes('HTML')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'HTML']);
                    } else {
                      setAdditionalSkills(additionalSkills.filter(skill => skill !== 'HTML'));
                    }
                  }}
                />
                HTML
              </label>
              <label>
                <input
                  type="checkbox"
                  value="CSS"
                  checked={additionalSkills.includes('CSS')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'CSS']);
                    } else {
                      setAdditionalSkills(additionalSkills.filter(skill => skill !== 'CSS'));
                    }
                  }}
                />
                CSS
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Management"
                  checked={additionalSkills.includes('Management')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'Management']);
                    } else {
                      setAdditionalSkills(additionalSkills.filter(skill => skill !== 'Management'));
                    }
                  }}
                />
                Management
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Styling"
                  checked={additionalSkills.includes('Styling')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'Styling']);
                    } else {
                      setAdditionalSkills(additionalSkills.filter(skill => skill !== 'Styling'));
                    }
                  }}
                />
                Styling
              </label>
            </fieldset>

            <label htmlFor="preferredInterviewTime">Preferred Interview Time:</label>
            <input
              type="datetime-local"
              id="preferredInterviewTime"
              value={preferredInterviewTime}
              onChange={(e) => setPreferredInterviewTime(e.target.value)}
              required
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="summary">
            <h2>Registration Summary</h2>
            <p><strong>Full Name:</strong> {fullName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone Number:</strong> {phoneNumber}</p>
            <p><strong>Applying for Position:</strong> {applyingForPosition}</p>
            {(applyingForPosition === 'Developer' || applyingForPosition === 'Designer') && (
              <p><strong>Relevant Experience:</strong> {relevantExperience} years</p>
            )}
            {applyingForPosition === 'Designer' && (
              <p><strong>Portfolio URL:</strong> <a href={portfolioURL}>{portfolioURL}</a></p>
            )}
            {applyingForPosition === 'Manager' && (
              <p><strong>Management Experience:</strong> {managementExperience}</p>
            )}
            <p><strong>Additional Skills:</strong> {additionalSkills.join(', ')}</p>
            <p><strong>Preferred Interview Time:</strong> {preferredInterviewTime}</p>
            <button onClick={resetForm}>Reset Form</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm2;
