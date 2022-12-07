const btn = document.getElementById(`second-btn`),
      input = document.getElementById(`input`),
      passed = document.getElementById(`passed`),
      error = document.getElementById(`error`);
/*RegEx*/
const validateEmail = () => {
    return input.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener(`click`, () => {

    if (validateEmail(input)) {
        passed.style.display= `block`;
        error.style.display= `none`;
        input.value = ``
    } else {
        passed.style.display= `none`;
        error.style.display= `block`;
    };

    setTimeout(() => {
        passed.style.display= `none`;
    }, 9000);

})

/* If you clicked on enter it is going also to work */
input.addEventListener(`keypress`, (event) => {
    if (event.key === `Enter`) {
      event.preventDefault();
      btn.click();
    }
});