# Unit testing exercise

Hello there!
In this repository you will find a function called `fizzBuzz` in `unit-test-exercise.js`.

### What the `fizzBuzz` function does:

1. It takes a number as input;
2. If that number is divisible by three, it returns the text “Fizz”;
3. If that number is divisible by five, it returns the text "Buzz";
4. If that number is divisible by **both** three and five, it returns the text "FizzBuzz";
5. If none of those cases apply, it returns the number itself.

The `fizzBuzz` function is the solution to a simplified version of **_The FizzBuzz problem_**, which is a common interview question.

## Important!

### Please do not modify the `fizzBuzz` function!

I promise it's doing its job, so let's not disturb it.

### Please do not modify anything else except the test cases!

I have added some comments to help you avoid accidental edits.

### Do I need to modify anything in `unit-test-exercise.html` or `unit-test-exercise.css`?

No.

## What you need to do for this exercise

Your job is to write unit tests for the `fizzBuzz` function.
These unit tests are just regular functions which verify that `fizzBuzz` behaves as expected.

Follow these steps:

1. Clone this repository;
2. Open `unit-test-exercise.js`;
3. Find the comments that say "Fill in the logic for your test here";
4. These comments are inside some pre-filled functions which represent different test cases;
5. These test cases have generic names (**_test1_**, **_test2_**, etc.). Change the names to reflect what you are trying to test;
6. Replace the "Fill in the logic for your test here" comments with the logic for your tests;
7. Run all tests by opening `unit-test-exercise.html` in the browser;
8. Are your tests passing?

## Extra hints and help

I have filled in the template for three test cases, but you are welcome to have more if you want!

I have also pre-written one **real** test case to give you some inspiration:

```
    {
        test: function testFizzBuzzNumDivisibleByThree() {
            const expectedResult = "Fizz";
            const actualResult = fizzBuzz(6);
            return expectedResult === actualResult;
        },
    }
```

## Tips for writing a good unit test

1. Spend a few minutes to decide your **test cases**: what are you trying to verify?
2. Give your tests descriptive names! I prefilled some generic names such as "test1" and "test2", but you should change them. It's okay to use long names in this case.
3. One test should only deal with one single test case at a time.
4. Remember that a test always needs to end with an assertion (i.e. it needs to return a boolean). That's how we know if the test is passing or not.

## What on earth is going on in the rest of the file? I'm so confused!

**tl;dr** don't worry about it.

**Long-ish explanation:** the remaining logic in `unit-test-exercise.js` is used to make sure that the test cases are run (they are functions, after all!) and that the results are displayed in a "nice" way when you open `unit-test-exercise.html`.

If you don't understand what's going on, it's normal and completely expected. That code is just boilerplate.
