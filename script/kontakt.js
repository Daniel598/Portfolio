document.getElementById('send').addEventListener('click', function (e) {
    e.preventDefault();
    const subject = document.getElementById('emne').value;
    const body = document.getElementById('body').value;
    const mailtoLink = `mailto:daveba@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});
