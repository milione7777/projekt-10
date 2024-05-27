// завдання 1
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  alert("Hello World");
});

// завдання 2
const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("checkButton").addEventListener("click", () => {
  const userGuess = document.getElementById("userGuess").value;
  const result = document.getElementById("result");

  if (userGuess == randomNumber) {
    result.textContent = "Поздравляем! Вы угадали правильное число!";
  } else if (userGuess < randomNumber) {
    result.textContent = "Ваша догадка слишком низкая. Попробуйте еще раз!";
  } else {
    result.textContent = " Ваша догадка слишком высока. Попробуйте еще раз!";
  }
});

// завдання 3
  let clickCount = 0;

        // Отримання елемента, де буде відображатися кількість кліків
        const clickCountDisplay = document.getElementById('clickCount');

        // Функція для оновлення кількості кліків
        function updateClickCount() {
            clickCount++;
            clickCountDisplay.textContent = clickCount;
        }

        // Додаємо слухач події для кліків на всій сторінці
        document.body.addEventListener('click', updateClickCount);

// завдання 4
const applyCallbackToArray = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        result.push(callback(arr[i]));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = num => num * num;

const result = applyCallbackToArray(arr, squareCallback);
console.log(result);

// завдання 5 
const calculateDiscountedPrice = (price, discountPercentage, callback) => {
  const discountedPrice = price - (price * (discountPercentage / 100));
  callback(discountedPrice);
}

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Дисконтна ціна: ${discountedPrice.toFixed(2)} грн`);
}

calculateDiscountedPrice(100, 10, showDiscountedPrice);

