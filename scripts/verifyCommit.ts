// Invoked on the commit-msg git hook by simple-git-hooks.

import colors from 'picocolors'
import { readFileSync } from 'fs'

// get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const commitRE =
  /^(revert: )?(feat|bug|fix|ui|docs|style|perf|release|deploy|refactor|test|chore|revert|merge|build)(\(.+\))?: .{1,50}/
const msgObj: any = {
  feat: '新功能(feature)',
  bug: '此项特别针对bug号,用于向测试反馈bug列表的bug修改情况',
  ui: '更新 ui',
  fix: '修复bug(fix)',
  docs: '文档(documentation)',
  style: '格式,不影响代码运行的变动(style)',
  perf: '性能性能优化(performance)',
  release: '发布(release)',
  deploy: '部署(deploy)',
  refactor: '重构,即不是新增功能,也不是修改bug的代码变动(refactor)',
  test: '单元测试(test)',
  chore: '构建过程或辅助工具的变动(chore)',
  revert: '回滚(revert)',
  merge: '合并分支(merge)',
  build: '构建(build)',
}

let msgStr = ''
for (const key in msgObj) {
  if (Object.prototype.hasOwnProperty.call(msgObj, key)) {
    const element = msgObj[key]
    msgStr += `    ${key}: ` + element + '\n'
  }
}

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${colors.bgRed(colors.white(' ERROR '))} ${colors.red(
      `invalid commit message format.`,
    )}\n\n` +
      colors.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `${colors.green(`${msgStr}`)}\n\n`,
  )
  process.exit(1)
}
