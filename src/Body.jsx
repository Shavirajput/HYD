import React from 'react'
import './Body.css';

const Body = () => {
  return (
    <div>
        <p>Dear [24]7.ai Team, </p>
        <p>Welcome to RaphaCure!</p>
        <p>We thank you for making us a part of your journey to a healthier YOU !</p>
        <p>We're thrilled to announce that we have further enriched our subscription to better cater to your health and well-being needs.</p>
        <div>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Hyderabad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24/7 Paramedic Support with 2 Nurses (Mon to Sunday) 8 hrs duty per Nurse</td>
            <td>Onsite at 24/7 Office (only Employee)</td>
          </tr>
          <tr>
            <td>Specialist Consultation with Gynac, Cardiologist, Neurologist, Nephrologist, Paediatrician and General Physician doctor consultation – Virtual Unlimited.</td>
            <td>Employee + 3 dependants</td>
          </tr>
          <tr>
            <td>Dental Consultation</td>
            <td>First consultation free in Rapha Dental Network</td>
          </tr>
          <tr>
            <td>Eye Consultation</td>
            <td>First consultation free in Rapha Eye Network</td>
          </tr>
          <tr>
            <td>Gym Membership</td>
            <td>Up to 20% discount in Rapha network</td>
          </tr>
          <tr>
            <td>Prescribed Diagnostic Test</td>
            <td>Up to 30% discount</td>
          </tr>
          <tr>
            <td>Home Delivery of Medicines</td>
            <td>Generic 40% discount and Branded 20%</td>
          </tr>
          <tr>
            <td>Health checkup (BMI, BP, RBS)</td>
            <td>Free once a year</td>
          </tr>
          <tr>
            <td>Comprehensive Health Check</td>
            <td>Up to 50% discount</td>
          </tr>
          <tr>
            <td>Period Tracker</td>
            <td>Only for Female employees</td>
          </tr>
          <tr>
            <td>Ayurveda Consultation</td>
            <td>Unlimited Consultation</td>
          </tr>
          <tr>
            <td>Health Videos - 60 Videos</td>
            <td>Employee + 3 dependants</td>
          </tr>
          <tr>
            <td>Free Health Score</td>
            <td>Employee + 3 dependants</td>
          </tr>
          <tr>
            <td>CT/MRI</td>
            <td>Up to 20% discount in Rapha network</td>
          </tr>
          <tr>
            <td>Ambulance</td>
            <td>Complimentary ride for emergency</td>
          </tr>
          <tr>
            <td>Mental Wellness Consultation</td>
            <td>Unlimited Consultation</td>
          </tr>
          <tr>
            <td>Clinic Management software with analytic data</td>
            <td>Complimentary</td>
          </tr>
        </tbody>
      </table>

        </div>
        <div className='blue-Container'>
            <b>Here’s why you shouldn’t miss it</b>
            <ul>
                <li>Manage your health better.</li>
                <li>Reduce health risks & complications.</li>
                <li>Keep a control on your health care costs.</li>
                <li>Motivates you to stay healthy & active.</li>                
            </ul>
        </div>
        <p>if you have any queries regarding your health check, or need any assistance, 
        please feel free to write back to us at <a id="mail" href="mailto:wellness@raphacure.com">wellness@raphacure.com</a></p>
        <p>We are always there to help! Wishing you Good Health!</p>
    </div>
  )
}

export default Body