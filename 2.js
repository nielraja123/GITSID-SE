const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInputInteger(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (input) => {
      const integerInput = parseInt(input);
      if (isNaN(integerInput) || integerInput < 0) {
        reject(new Error("Input harus berupa bilangan bulat positif"));
      } else {
        resolve(integerInput);
      }
    });
  });
}

function getInputArrayValues(length, arrayNumber) {
  return new Promise((resolve) => {
    const array = [];
    let currentIndex = 0;

    function promptValue() {
      rl.question(
        `Masukkan nilai untuk array ke-${arrayNumber}, index ke-${currentIndex}: `,
        (input) => {
          const value = parseInt(input);
          if (isNaN(value)) {
            console.log(
              "Input harus berupa bilangan bulat. Silakan coba lagi."
            );
          } else {
            array.push(value);
            currentIndex++;

            if (currentIndex === length) {
              resolve(array);
            } else {
              promptValue();
            }
          }
        }
      );
    }

    promptValue();
  });
}

function mergeAndSortArrays(array1, array2) {
  const mergedArray = [...array1, ...array2];
  const uniqueArray = Array.from(new Set(mergedArray));
  const sortedArray = uniqueArray.sort((a, b) => b - a);
  return sortedArray;
}

function printArrayIndex(array) {
  const indices = array.map((_, index) => index + 1);
  console.log("Index array gabungan: ", indices.join(" "));
}

function findIndexFromMergedArray(array1, mergedArray) {
  const foundIndices = array1
    .map((value) => {
      const index = mergedArray.indexOf(value);
      return index !== -1 ? index + 1 : null;
    })
    .filter((index) => index !== null);

  return foundIndices;
}

async function main() {
  try {
    const length1 = await getInputInteger(
      "Masukkan jumlah pemain lain (integer): "
    );
    const array1 = await getInputArrayValues(length1, 1);
    console.log(`Array ke-1 hasil input: `, array1);

    const length2 = await getInputInteger(
      "Masukkan jumlah pemain GITS (integer): "
    );
    const array2 = await getInputArrayValues(length2, 2);
    console.log(`Array ke-2 hasil input: `, array2);

    const mergedAndSortedArray = mergeAndSortArrays(array1, array2);
    console.log(`Array gabungan hasil input: `, mergedAndSortedArray);

    printArrayIndex(mergedAndSortedArray);

    const foundIndices = findIndexFromMergedArray(array2, mergedAndSortedArray);
    console.log(`Peringkat skor gits: ${foundIndices.join(" ")}`);

    rl.close();
  } catch (error) {
    console.error(error.message);
    rl.close();
  }
}

main();
