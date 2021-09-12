# Refactoring Chapter 1

This is an exercise for trying out the example explained in the first Chapter of the Refactoring book by Martin Fowler.

## Problem statement

A theater company wants to charge it's customers based on number of audience and type of the requested plays. It also gives "volume credits" to a customer which they can use as discounts for future orders.

The existing implementation for generating Statement generates it in a text format.

## My understanding

### The concept

Refactoring is changing implementation of code without changing it's behavior, with aim to make the code more understandable or easier to change for an upcoming requirement.

### The practice

- Refactoring is best done with solid seof tests already in place.
- Make a small changes and run testscommit code if the tests passed.
- Small changes and tests on every changehelp to catch a breaking refactoring athe earliest.
- Commiting every change helps ireverting back to a stabler version irefactoring process easier.

## Notes

- To support more categories of play with their custom calculation logic will need changes in the conditional logic of calculation functions, `amountFor` and `volumeCreditsFor`, which have similar conditions, so it needs a "Replace Function with Polymorphism" refactoring.

- [Create a `PerformanceCalculator` class and instantiate it in `enrichPerformance`](https://github.com/sunandandhawan/refactoring-chapter-1/commit/e7a64dd57f34166cebae6ccee5933e963403f2da)

  `enrichPerformance` calls the calculation functions which need to be replaced with polymorphic method calls.

- [Move `play` to `PerformanceCalculator` class (Change Function Declaration)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/c12a2e72104fa2995ac90006f02dacd758803eb1)

  Next simplest thing to move into the class.

- [Copy `amountFor` function to `PerformanceCalculator` class (Move Function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/27ba578fe70e3e697610b2f39e95ee8cf11c3fa0)

  So it can be called from the class and changes it's behavior polymorphically when required. After copying it also requires some changes like replacing `aPerformance` with `this.performance` to make the function work in new context.

- [Turn the original `amountFor` function into a delegating function for calling the new function (Move function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/8a7f32ecc6258ba01efb0c1a4b496cab39e0229a)

  Next possible smallest change.

- [User `performanceCalculator.amount` method directly in place of `amountFor` method (Inline Function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/95293d2759bf84b6ff01dfa186bbf25c7ac1037f)

  To simplify the code and make it more readable/understandable.

- [Copy `volumeCreditsFor` function to `PerformanceCalculator` class and adjust variables in new context (Move Function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/ff045cd35bf3f43997a952ed9c7d31ec8079d3fb)

  Repeating same steps for `volumeCreditsFor` function that were done for `amountFor` function, executing tests each time to make sure nothing breaks.

- [Turn the original `volumeCreditsFor` function into a delegating function for calling the new function (Move function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/c619a2296dcef586ba8e917ad30cdd45a72e2c1d)

  Again, next possible smallest change.

- [Use `performanceCalculator.volumeCredits` method directly in place of `volumeCreditsFor` method (Inline Function)](https://github.com/sunandandhawan/refactoring-chapter-1/commit/e1314bcb7a5e61f5e7977a61f3e1d3f51944ae7c)

  Again, to simplify the code and make it more readable/understandable.

- [Replace constructor call with a Factory Function](https://github.com/sunandandhawan/refactoring-chapter-1/commit/6e8be5afbdc27020c61a4486a17752b15b470b5e)

  To make `enrichPerformance` use polymorphism, it needs to use subclasses instead. So creating instance of correct subclass needs to be given a factory function.

- [Create subclasses of `PerformanceCalculator` and let creation function to decide which one to return](https://github.com/sunandandhawan/refactoring-chapter-1/commit/eec5e3e497dc8196e5c17af4ed3ff223d7889966)

  To set up structure for polymorphism.

- [Move amount calculation of tragedy from `PerformanceCalculator` to `TragedyCalculator`](https://github.com/sunandandhawan/refactoring-chapter-1/commit/34f186f30801b1c8a45090eadad28b696b145245)

  Extract part of amount calculation logic related to tragedy type to the `TragedyCalculator` class.

- [Move amount calculation of comedy from `PerformanceCalculator` to `ComedyCalculator`](https://github.com/sunandandhawan/refactoring-chapter-1/commit/7830a0ef6057d2e2a7a806807fa990d5668d2eac)

  Extract part of amount calculation logic related to tragedy type to the `ComedyCalculator` class.

- [Return error from Parent class indicating subclass's responsibility](https://github.com/sunandandhawan/refactoring-chapter-1/commit/f42f4999190122ba372159a711ac9d782e7ca63a)

  As a reminder to not put logic in the parent class.

- [Move custom `volumeCredits` calculation of comedy from `PerformanceCalculator` to `ComedyCalculator`](https://github.com/sunandandhawan/refactoring-chapter-1/commit/0d1f8519da01f78ba77fb2aeec2d311f55b60f4f)

  Leaving common logic for volume credits in Parent class as only some categories have custom logic.

## Setup

- VS Code with "Run on Save" extenstion by pucelle installed
- Add `settings.json` file to `.vscode` folder
  ```
  {
    "runOnSave.statusMessageTimeout": 3000,
    "runOnSave.commands": [
      {
        "globMatch": "**/*.js",
        "command": "npm run test",
        "runIn": "terminal"
      }
    ]
  }
  ```

## Misc

<details>
  <summary>Commands to jump to specific commits</summary>

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout e7a64dd57f34166cebae6ccee5933e963403f2da && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout c12a2e72104fa2995ac90006f02dacd758803eb1 && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 27ba578fe70e3e697610b2f39e95ee8cf11c3fa0 && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 8a7f32ecc6258ba01efb0c1a4b496cab39e0229a && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 95293d2759bf84b6ff01dfa186bbf25c7ac1037f && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout ff045cd35bf3f43997a952ed9c7d31ec8079d3fb && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout c619a2296dcef586ba8e917ad30cdd45a72e2c1d && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout e1314bcb7a5e61f5e7977a61f3e1d3f51944ae7c && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 6e8be5afbdc27020c61a4486a17752b15b470b5e && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout eec5e3e497dc8196e5c17af4ed3ff223d7889966 && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 34f186f30801b1c8a45090eadad28b696b145245 && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 7830a0ef6057d2e2a7a806807fa990d5668d2eac && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout f42f4999190122ba372159a711ac9d782e7ca63a && git reset head~1`

`git reset --hard head && git checkout master && git pull origin master && git clean -fd && git checkout 0d1f8519da01f78ba77fb2aeec2d311f55b60f4f && git reset head~1`

</details>
