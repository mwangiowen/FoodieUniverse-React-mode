import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SplashScreen from './SplashScreen';
import GradientLoading from './GradientLoading';
import FoodCardList from './FoodCardList';

function FoodApp() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    setError(null);

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  return (
    <div className="owen">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <div className="sticky-search-input">
            <SearchInput onSearch={handleSearch} />
          </div>
          <h1 className="smith">Food Categories</h1>
          {loading ? (
            <GradientLoading />
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <FoodCardList meals={meals} />
          )}
        </div>
      )}
    </div>
  );
}

export default FoodApp;
