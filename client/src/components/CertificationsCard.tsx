
import "../styles/CertificationsCard.css";
const certifications = [
  {
    title: "The Web Developer Bootcamp 2024",
    issuer: "Udemy",
    issueDate: "Feb 2024",
    url: "https://www.udemy.com/certificate/UC-29bdea29-1c68-4d51-9c73-9078f1bc902e",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/6SK3V2HB5QCZ",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/9FDNZLKLM7J2",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/5L484KWTZ4HK",
  },
  {
    title: "HTML and CSS in depth",
    issuer: "Meta",
    issueDate: "Nov 2024",
    url: "https://www.coursera.org/account/accomplishments/records/5V72GOOWN2LN",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    issueDate: "Jan 2024",
    url: "https://www.coursera.org/account/accomplishments/records/19N64L1R6519",
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/4VVBZG637RUQ",
  },
];

const CertificationsCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {certifications.map((certification, index) => (
        <div
          key={index}
          className='dark:border-gray-800 border border-gray-200 shadow-lg rounded-2xl p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl '
        >
          <h2 className='text-lg font-semibold mb-4 dark:text-white text-gray-800'>
            {certification.title}
          </h2>
          <p className='text-gray-600 dark:text-gray-400'>
            {certification.issuer}
          </p>
          <p className='text-gray-500 dark:text-gray-500 mb-4'>
            {certification.issueDate}
          </p>
          <a
            href={certification.url}
            className='dark:bg-white dark:text-black bg-black text-white rounded-2xl px-4 py-2 cursor-pointer hover:dark:bg-darkwhite hover:bg-lightblack transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificationsCard;
