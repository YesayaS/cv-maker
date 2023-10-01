import { useState } from "react";
import "../styles/inputCV.css";

export function InputCV() {
  return (
    <div>
      <div>
        <h1>Basic Information</h1>
        <ul>
          <li>
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" />
          </li>
        </ul>
      </div>
      <div>
        <h1>Education Experience</h1>
        <ul>
          <li>
            <label htmlFor="schoolName">School</label>
            <input id="schoolName" type="text" />
          </li>
          <li>
            <label htmlFor="schoolTitle">Degree</label>
            <input id="schoolTitle" type="text" />
          </li>
          <li>
            <label htmlFor="schoolDate">Date</label>
            <input id="schoolDate" type="text" />
          </li>
        </ul>
      </div>
      <div>
        <h1>Professional Experience</h1>
        <li>
          <label htmlFor="companyName">Company</label>
          <input id="companyName" type="text" />
        </li>
        <li>
          <label htmlFor="jobTitlke">Job Title</label>
          <input id="jobTitlke" type="text" />
        </li>
        <li>
          <label htmlFor="">Description</label>
          <input id="" type="text" />
        </li>
        <li>
          <label htmlFor="">Date</label>
          <input id="" type="text" />
        </li>
      </div>
    </div>
  );
}
