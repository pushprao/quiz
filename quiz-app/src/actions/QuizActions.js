export function loadQuestions() {
  return (dispatch) => {
    return fetch("https://wordquiz.p.rapidapi.com/questions", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordquiz.p.rapidapi.com",
        "x-rapidapi-key": "6eb4ae14fcmsh32aff8138116af9p1c6b49jsn67b52f1a9a6f",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_QUIZ_LIST",
          data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
