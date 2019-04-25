# git-branch-pattern-check

Simple script to validate git branch name before pushing it to repository. Helpful if you want to enforce naming convention in your team without manually checking branch names

## Installation

```
npm i -D git-branch-pattern-check
```

## Usage
Best way to use library is to run it as git hook. You could use [Husky](https://github.com/typicode/husky) for it (or any library of your choice).

```
{
  "husky": {
      "hooks": {
        "pre-push": "git-branch-pattern-check '^((feature|fix|hotfix|release)\/|release-).+'"
      }
    }
  "devDependencies": {
    "husky": "^2.1.0"
  }
}
```

## Issues
If you've encountered sth spooky and want to share please fill Bug Report here:
https://github.com/burnpiro/git-branch-patter-check/issues

## License
[MIT](https://choosealicense.com/licenses/mit/)