export const projectsData = [
    {
        id: 1,
        name: 'Toy Store using Microservices Architecture',
        description: "Developed a scalable, fault-tolerant microservices architecture for a Toy Store application, decomposing functionalities into Catalog, Order, and Frontend services, each with specific responsibilities. Implemented fault tolerance by replicating the Order Service across multiple machines, incorporating leader election mechanisms to ensure continuous operation and consistency during node failures. Introduced a caching layer within the Frontend Service to enhance performance, enabling faster responses for frequent product queries and reducing load on the Catalog Service. Created RESTful APIs for querying product details, placing orders, and retrieving order information, ensuring efficient and reliable communication between the client and the backend services. Docker containerization is utilized to ensure portability and scalability of the application.",
        tools: ['JAVA', 'Docker', 'AWS EC2', 'Microservices Architecture Design', 'Fault Tolerance', 'Caching Strategies', 'RESTful API Development'],
        code: 'https://github.com/BhavikRansubhe/ToyStore-Microservices-Architecture/tree/main',
    },
    {
        id: 2,
        name: 'Movie Recommendation Website',
        description: 'Developed a Movie Recommendation Web App by leveraging machine learning algorithms to deliver tailored movie suggestions aligned with user preferences. Utilized the TMDB API for comprehensive data retrieval and maintained user information through a PostgreSQL database. Crafted a holistic solution by combining a React frontend, Node.js backend, and Python-based ML model. Incorporated a hybrid model approach, blending collaborative and content-based strategies, for robust training and recommendation accuracy.',
        tools: ['Node.js', 'React', 'Python', 'PostgreSQL', 'Machine Learning'],
        code: 'https://github.com/BhavikRansubhe/Movie_Recommendation_Website',
    },
    {
        id: 3,
        name: 'Interactive System For Product Purchase Using Voice And Gesture Recognition',
        description: 'Implemented image processing techniques such as YCbCr color model and grayscale conversion for hand gesture recognition. Utilized TensorFlow and Keras to train a Convolutional Neural Network (CNN) on segmented image datasets for gesture detection. Implemented NLP using NLTK to understand user commands, including pauses, enhancing HCI',
        tools: ['CNN, ML, TensorFlow, Keras, NLTK, OpenCV, Python, JAVA'],
        code: 'https://github.com/BhavikRansubhe/InteractiveSystemForProductPurchaseUsingVoiceAndGuesture',
    },
    {
        id: 4,
        name: 'Car service booking and accessories buying android app',
        description: 'Developed an Android app for a car service and accessories shop, utilizing Java and core Android components. Designed intuitive interfaces with XML, integrating Firebase for secure user management and efficient data handling.',
        tools: ['Android Studio, Java, Firebase, XML'],
        code: 'https://github.com/BhavikRansubhe/CarFixz-App',
    },
];
