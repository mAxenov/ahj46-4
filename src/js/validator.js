export default function (card) {
  // Здесь храним контрольную сумму
  let checksum = 0;
  // Переводим номер карточки из строки в массив чисел
  const cardnumbers = card.split('').map(Number);

  // Проходимся по каждому числу
  for (const [index, num] of cardnumbers.entries()) {
    // Если index чётный, значит число стоит на нечётной позиции
    // Так получается потому что считаем с нуля
    if (index % 2 === 0) {
      const buffer = num * 2;
      // Если удвоенное число больше 9, то вычитаем из него 9 и прибавляем к контрольной сумме
      // Если нет, то сразу прибавляем к контрольной сумме
      buffer > 9 ? checksum += buffer - 9 : checksum += buffer;
    } else {
      checksum += num;
    }
  }
  // Если контрольная сумма делится без остатка на 10, то номер карты правильный
  return checksum % 10 === 0;
}
