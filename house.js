const sub_service = document.querySelectorAll('.sub_service')

console.log(sub_service)

sub_service.forEach((sub_service) => {
    sub_service.addEventListener('click', () => {
        removeClass();
        sub_service.classList.add('active')
    });
});

function removeClass() {
    sub_service.forEach((sub_service) => {
        sub_service.classList.remove('active')
    })
}