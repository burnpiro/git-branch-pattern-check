const branchName = require('current-git-branch');

// Exit with error when no regex provided
if (!process.argv[2]) {
  console.error('Usage: branch-naming-check <regexp>');
  process.exitCode = 1;
  return;
}

try {
  const validBranchNameRegExp = new RegExp(process.argv[2], 'g');

  if (validBranchNameRegExp.test(branchName())) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.log(
      '\x1b[31m%s\x1b[0m',
      `Current Git branch name: "${branchName()}" \n` +
        `Is not valid for given pattern: "${validBranchNameRegExp.toString()}"\n`,
    );
  }
} catch (error) {
  console.error(error.message + '\n');
  process.exitCode = 1;
  return;
}
