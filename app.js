function scrollto(percent) {
    let num = (document.body.scrollHeight / 100) * percent;
    window.scroll({
        top: num,
        behavior: "smooth"
    });
}