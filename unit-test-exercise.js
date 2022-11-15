"use strict";

const fizzBuzz = function (num) {
  if (typeof num !== "number") {
    return "This is not a number!";
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
};

const allTestCases = [
  // Pre-filled test case for inspiration
  {
    test: function testFizzBuzzNumDivisibleByThree() {
      const expectedResult = "Fizz";
      const actualResult = fizzBuzz(6);
      return expectedResult === actualResult;
    },
  },

  // ******************************************* DO NOT MODIFY ANYTHING ABOVE THIS LINE *******************************************
  {
    test: function test1() {
      // Fill in the logic for your test here
    },
  },
  {
    test: function test2() {
      // Fill in the logic for your test here
    },
  },
  {
    test: function test3() {
      // Fill in the logic for your test here
      return false;
    },
  },
];
// ******************************************* DO NOT MODIFY ANYTHING BELOW THIS LINE *********************************************

const testsContainerElement = document.getElementById("tests");

for (let testCase of allTestCases) {
  const testElement = document.createElement("li");
  testElement.classList.add("testCase");

  try {
    const hasTestPassed = testCase.test();
    if (hasTestPassed === undefined || hasTestPassed === null) {
      testElement.innerHTML = `⚠ ${testCase.test.name}: missing assertion. Did you forget to return a boolean (true/false)?`;
      testElement.classList.add("missingAssertion");
    } else {
      const testResult = hasTestPassed ? "passed" : "failed";
      testElement.innerHTML = `${hasTestPassed ? "✓" : "✘"} ${
        testCase.test.name
      }: ${testResult}`;
      testElement.classList.add(`${testResult}`);
    }
  } catch (err) {
    testElement.innerHTML = `⚠ ${testCase.test.name}: could not run because of this error: "${err}"`;
    testElement.classList.add("error");
  }

  testsContainerElement.appendChild(testElement);
}
