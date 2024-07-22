// Gets the data
async function getData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem :", error);
  }
}

// Assigns the data to advice
async function RandomQuote() {
  const adviceslip = await getData();

  let advice = adviceslip["slip"].advice;
  let adviceNo = adviceslip["slip"].id;
  console.log(advice);
  console.log(adviceNo);
  let adviceNum = document.querySelector("#advice_no");
  let adviceQuote = document.querySelector("#advice");

  adviceQuote.textContent = advice;
  adviceNum.textContent = adviceNo;
}
