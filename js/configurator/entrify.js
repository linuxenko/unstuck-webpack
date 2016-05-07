const nodeApp = `
  console.log(\`hello world from \${__dirname}\`)
`

export default function EntrifyConfigurator(state) {

  if (state.config.template === 'node') {
    return  { app : nodeApp , idx : null }
  }

  return {app : null, idx : null}
}
