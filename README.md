# Front-End Developer Assignment: MEDIFY - Medical Center Slot Booking Platform
### Assignment Objective
The objective of this assignment is to build a React-based web application that allows users to find medical centers in a specific state and city across the USA and book appointments. 
### Key Features to Implement
#### Landing Page:
- A top navigation bar with access to platform sections such as Find Doctors, Hospitals, Medicines, and more.
- A search section for users to select a state and city, leading to a list of available medical centers in the chosen area.
- Both State and City should have a dropdown where the options will be fetched from an api which is provided in the problem description.
And other sections as provided in the figma design.

- Search Results Page:
A listings view showing available medical centers in the selected location with the option to book appointments.

#### Booking Interface:
- A detailed booking section for users to select a medical center, with a calendar-like interface to choose an appointment date.
- he ability to book an appointment within a time frame from today up to one week in advance.
- A selection of available time slots for the selected day.

### My Bookings Page:
- A personalized page displaying all user bookings, including details such as the medical center's name, appointment date, and time.

### Responsive Design:
- Ensure that the application is fully responsive and adheres to the design standards presented in the Figma screenshots.
- NOTE: Implementing carousels is mandatory. You can utilize the Swiper library.
Figma

## Figma Link

- Backend Endpoint: https://meddata-backend.onrender.com
- Get a list of all states
https://meddata-backend.onrender.com/states
- Get a list of all cities of a particular state
https://meddata-backend.onrender.com/cities/:state
- Eg: https://meddata-backend.onrender.com/cities/Alaska
- Get a list of all medical centers based on a state and city
https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>
Eg: https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA

### Sample JSON Response: 

- Request: https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA



- You need to extract Hospital Name, Hospital Address, City, State, ZIP Code, Hospital overall rating to use in your application according to the given Figma Design.



- NOTE: The backend might take 50-60 seconds to respond.

## Deliverables
- Time to complete the assignment: 4 Days.
- Submit your solution by creating a GitHub repository and pushing your code there to have proper commit messages.
- Deployed Vercel link. 
- Add a Readme.md file with the project details.

## Resources for this take-home: 
- Local setup + Deployment instructions
- Template for doing take home - Make a copy for yourself
- Feel free to use any third-party libraries that are needed
- Use localStorage to persist data.

