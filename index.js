module.exports = (source, options) => {
  if (/<!--\s*PROTECTED\s*-->/.test(source)) {
    source = '[PROTECTED]'
  }

  return source
}
