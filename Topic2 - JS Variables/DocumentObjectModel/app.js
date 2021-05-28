function ShowAlert() {
    /*Insert html input*/
    let InputElement = document.querySelector(".myname");

    /*Insert html input value*/
    let InputValue = InputElement.value;

    /*Access h1 element*/
    let Heading1 = document.querySelector("h1 > span").innerHTML;
    Heading1 = InputValue;

    /*Show alert*/
    alert('Your message was sent!')
}