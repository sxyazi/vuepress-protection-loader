module.exports = (source, options) => {
  if (/<!--\s*PROTECTED\s*-->/i.test(source)) {
    source = '[PROTECTED]'
  }

  return source
}
