window.addEventListener('scroll', function(e) {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

