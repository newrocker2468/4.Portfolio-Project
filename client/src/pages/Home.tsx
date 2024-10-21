import React from "react";
import { forwardRef } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";

interface HomeProps {
  className?: string;
  loading?: boolean;
}

const quotes = [
  {
    quote: "Websites promote you 24/7: No employee will do that.",
    author: "Paul Cookson",
  },
  {
    quote:
      "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote:
      "Web development is the art of turning ideas into digital experiences that shape the world.",
    author: "Unknown",
  },
  {
    quote:
      "In the world of web development, there are no limits to what you can create. The only limit is your imagination.",
    author: "Unknown",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  { quote: "Code is poetry.", author: "Unknown" },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ className, loading }, ref) => {
    const { theme } = useTheme();
    return (
      <>
        {loading && (
          <Loader
            ref={ref}
            className={theme === "dark" ? "bg-black" : "bg-white"}
          />
        )}
        <main className={`dark:text-white ${className}`}>
          <div className='flex items-center justify-center m-2 text-center text-3xl text-shadow-custom'>
            <span className="mx-80">
              {" "}
              {quote.quote} - {quote.author}
            </span>
          </div>
        </main>
      </>
    );
  }
);

export default Home;
