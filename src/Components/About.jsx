
const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="lg:text-3xl text-xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">About Our Platform</h2>
        <p className="lg:text-lg text-[16px] text-gray-700 w-fit lg:w-[1000px] mx-auto dark:text-white mb-8">
          Welcome to our platform, your ultimate destination for discovering, reviewing, and sharing your favorite games. Whether you're a casual gamer or a hardcore enthusiast, we provide you with the tools to find the best games, share your opinions, and connect with a community of like-minded players.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4  dark:text-black">Discover Games</h3>
            <p className="text-gray-600">
              Explore a wide variety of games, from the latest releases to timeless classics. Filter by genre, rating, or year to find your next adventure.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 dark:text-black">Share Reviews</h3>
            <p className="text-gray-600">
              Share your gaming experiences and help others decide what to play next. Your insights and opinions matter!
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 dark:text-black">Build a Community</h3>
            <p className="text-gray-600">
              Connect with gamers worldwide. Join discussions, share tips, and make new friends through a shared passion for gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
