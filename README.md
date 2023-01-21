# Reaktor pre-assignment 2023

### Link to live deployment [Birdnest project](https://birdnest-ndz-reaktor.onrender.com/)

### Disclaimer!
The project is deployed on [render](https://www.render.com) and due to the limitated nature of the free tier, if the site has not received any traffic for a set amount of time it will go offline until receiving traffic again. In these cases it might take couple of minutes for the data to
load up. This project is also reliant on the API's provided by [reaktor](https://www.reaktor.com).

## Monadikuikka Drone Surveillance
The rare and endangered Monadikuikka bird species has been spotted nesting at a local lake. Unfortunately, some enthusiasts have been flying their drones too close to the nest, disturbing the birds and potentially putting their nesting success at risk. To protect the Monadikuikka population, authorities have declared a no drone zone (NDZ) within 100 meters of the nest and have set up a drone surveillance system to detect any drones within 500 meters of the nest.

## Task
Your task is to build a full-stack application that can fetch the drone owner's information using the provided API if they are violating the NDZ and persist the information for a maximum of 10 minutes. This application will aid the authorities in enforcing the NDZ and preserving the nesting peace for the Monadikuikka population.

# Features
- The API will detect drones within 500 meters of the nest and return some device information such as serial number, pos-x, pos-y and your application must be able to determine if they are violating the NDZ.
- If a drone is found to be violating the NDZ, the application should fetch the drone owner's information and persist it for a maximum of 10 minutes.
- The application should have a user-friendly interface for authorities to view the drone owner's information.

# Stacks and frameworks used in this project
- React.js
- Node.js
- Express.js
- Vite
- Tailwindcss
- SocketIO
- Axios
- PostgreSQL
