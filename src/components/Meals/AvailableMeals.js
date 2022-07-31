import React, { useEffect, useState } from "react";

import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const { REACT_APP_FIREBASEURL } = process.env;

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${REACT_APP_FIREBASEURL}meals.json`);

      if (!response.ok) {
        console.log({ response });
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      console.log({ err });
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles["meal-is-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={styles["meal-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
