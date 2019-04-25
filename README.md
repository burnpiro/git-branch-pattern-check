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
        "pre-push": "git-branch-pattern-check '^(feature|fix|hotfix|release)\/.+'"
      }
    }
  "devDependencies": {
    "husky": "^2.1.0"
  }
}
```

Basic patterns:

`^(feature|fix|hotfix|release)\/.+'` - branch has to start with `feature/`, `fix/`, `release/` or `hotfix/`

`(feature|release|hotfix)\/(JIRA-\d+)` - it should look like `feature/JIRA-1234`

`(feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+` - it should look like `feature/branch-name` or include JIRA's code like `feature/JIRA-1234/branch-name`

include `master` and `develop`:
`^master|develop|(feature|fix|hotfix|release)\/.+'`

## Issues
If you've encountered sth spooky and want to share please fill Bug Report here:
https://github.com/burnpiro/git-branch-patter-check/issues

## License
[MIT](https://choosealicense.com/licenses/mit/)