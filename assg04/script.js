const missRadioButton = document.getElementById("miss");
const mrRadioButton = document.getElementById("mr");
const mrsRadioButton = document.getElementById("mrs");
const spans = document.getElementsByClassName("validation-message");
const titleSpan = document.getElementById("titleSpan");
const submitButton = document.getElementById("submit");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const firstNameSpan = document.getElementById("firstNameSpan");
const lastNameSpan = document.getElementById("lastNameSpan");
const emailInput = document.getElementById("emailId");
const emailSpan = document.getElementById("emailIDSpan");
const phoneNumberInput = document.getElementById("phoneNumber");
const phoneNumberSpan = document.getElementById("phoneNumberSpan");
const streetAddress1Input = document.getElementById("streetAddress1");
const zipcodeInput = document.getElementById("zipcode");
const commentsInput = document.getElementById("comments");
const streetAddress1Span = document.getElementById("streetAddress1Span");
const zipcodeSpan = document.getElementById("zipcodeSpan");
const commentsSpan = document.getElementById("commentsSpan");
const facebookCheckbox = document.getElementById("facebook");
const googleCheckbox = document.getElementById("google");
const yelpCheckbox = document.getElementById("yelp");
const sourceSpan = document.getElementById("sourceSpan");
const ratingInput = document.getElementById("rating");
const reviewCheckbox = document.getElementById("review");
const additionalCommentsInput = document.getElementById("additionalReview");
const additionalReviewSpan = document.getElementById("additionalReviewSpan")
const yesCheckbox = document.getElementById("yes");
const ratingSpan = document.getElementById("ratingSpan");
const cityInput = document.getElementById("city");
const citySpan = document.getElementById("citySpan");
const stateInput = document.getElementById("state");
const stateSpan = document.getElementById("stateSpan");
const streetAddress2Input = document.getElementById("streetAddress2");

firstNameInput.addEventListener('input', validateFirstName);
lastNameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('input', validateEmail);
phoneNumberInput.addEventListener('input', validatePhoneNumber);
streetAddress1Input.addEventListener('input', validateStreetAddress);
zipcodeInput.addEventListener('input', validateZipcode);
commentsInput.addEventListener('input', validateComments);
facebookCheckbox.addEventListener('change', validateSource);
googleCheckbox.addEventListener('change', validateSource);
yelpCheckbox.addEventListener('change', validateSource);
cityInput.addEventListener('input', validateCity);
stateInput.addEventListener('input', validateState);
ratingInput.addEventListener('change', displayRemainingFields);
yesCheckbox.addEventListener('change', displayRemainingFields);
additionalCommentsInput.addEventListener('input', validateAdditionalComments)

const regExEmail = /^[a-zA-Z.]+@([a-z]+\.)?northeastern\.edu$/;
const regExPhone = /\d{3}-?\d{3}-?\d{4}$/;
const regExZipcode = /^[0-9]{5}$/;
const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

let invalidFirstName = true;
let invalidLastName = true;
let invalidEmail = true;
let invalidPh= true;
let invalidStreetAddress1= true;
let invalidZip= true;
let invalidComments= true;
let invalidCity= true;
let invalidState= true;
let invalidRating= true;
let invalidTitle= true;
let invalidSorce= true;
let invalidAdditionalComment = true;



function onLoad() {
    for (let i = 0; i < spans.length; i++){
        spans[i].style.display = 'none';
    }
    reviewCheckbox.style.display = 'none';
    additionalCommentsInput.style.display = 'none';
    yesCheckbox.style.display = 'none';
    submitButton.disabled = true;
}

onLoad();

function validateFirstName() {
    if (firstNameInput.value != null && firstNameInput.value.length > 2 && firstNameInput.value.match(regExName)){
        firstNameSpan.style.display = 'none';
        invalidFirstName=false;
    }
    else{
        invalidFirstName=false;
        firstNameSpan.style.display = '';
    }
    checkSubmitButton();
}

function validateLastName() {
    if (lastNameInput.value != null && lastNameInput.value.length > 2 && lastNameInput.value.match(regExName)){
        invalidLastName=false;
        lastNameSpan.style.display = 'none';
    }   
    else{
        invalidLastName=true;
        lastNameSpan.style.display = '';
    }
    checkSubmitButton();
}

function validateEmail() {
    if (emailInput.value.match(regExEmail)){
        invalidEmail=false;
        emailSpan.style.display = 'none';
    } else{
        emailSpan.style.display = '';
        invalidEmail=true;
    }
    checkSubmitButton();
       
}

function validatePhoneNumber() {
    if (phoneNumberInput.value.match(regExPhone)){
        invalidPh=false;
        phoneNumberSpan.style.display = 'none';
    }else{
        phoneNumberSpan.style.display = '';
        invalidPh=true;
    }
    checkSubmitButton();
}

function validateStreetAddress() {
    if (streetAddress1Input.value != null && streetAddress1Input.value.length > 6){
        invalidStreetAddress1=false;
        streetAddress1Span.style.display = 'none';
    }else{
        streetAddress1Span.style.display = '';
        invalidStreetAddress1 = true;
    }
        checkSubmitButton();
}

function validateCity() {
    if (cityInput.value != null && cityInput.value.length > 4){
        invalidCity=false
        citySpan.style.display = 'none';
    }else{
        citySpan.style.display = '';
        invalidCity=true
    }
        checkSubmitButton();
}

function validateState() {
    if (stateInput.value != null && stateInput.value.length > 1){
        invalidState=false
        stateSpan.style.display = 'none';
    } else{
        stateSpan.style.display = '';
        invalidState=true
    }
       
        checkSubmitButton();
}

function validateZipcode() {
    if (zipcodeInput.value.match(regExZipcode)){
        invalidZip=false;
        zipcodeSpan.style.display = 'none';
    }else{
        zipcodeSpan.style.display = '';
        invalidZip=true;
    }
    checkSubmitButton();
}

function validateComments() {
    if (commentsInput.value != null && commentsInput.value.length > 8){
        invalidComments=false;
        commentsSpan.style.display = 'none';
    }else{
        commentsSpan.style.display = '';
        invalidComments=true;
        console.log("in invalid comments")
    }
       
        checkSubmitButton();
}

function validateSource() {
    if (facebookCheckbox.checked || googleCheckbox.checked || yelpCheckbox.checked)
        sourceSpan.style.display = 'none';
    else
        sourceSpan.style.display = '';
        checkSubmitButton();
}

function displayRemainingFields() {
    const ratingValue = ratingInput.value;

    if (ratingValue !== '') {
        invalidRating=false
        ratingSpan.style.display = 'none';
        reviewCheckbox.style.display = '';
        yesCheckbox.style.display = '';
        if (yesCheckbox.checked){
            additionalCommentsInput.style.display = '';
        }else{
            additionalCommentsInput.style.display = 'none';
        }
    } else {
        ratingSpan.style.display = '';
        reviewCheckbox.style.display = 'none';
        yesCheckbox.style.display = 'none';
        invalidRating=true
    }

    checkSubmitButton();
}

function validateAdditionalComments(){
    if (additionalCommentsInput.value != null && additionalCommentsInput.value.length > 1){
        console.log("yayy");
        invalidAdditionalComment=false
        additionalReviewSpan.style.display = 'none';
    } else{
        additionalReviewSpan.style.display = '';
        console.log("yayy2");
        invalidAdditionalComment=true;
    }
    checkSubmitButton();
}

function checkSubmitButton(){
    if(missRadioButton.checked || mrRadioButton.checked || mrsRadioButton.checkSubmitButton){
        invalidTitle=false;
    }
    if(facebookCheckbox.checked || googleCheckbox.checked || yelpCheckbox.checked ){
        invalidSorce=false;
    }
    console.log("-----")
    console.log(invalidFirstName)
        console.log(invalidLastName)
        console.log(invalidEmail)
        console.log(invalidPh)
        console.log(invalidStreetAddress1)
        console.log(invalidZip)
    console.log(invalidComments)
    console.log(invalidCity)
    console.log(invalidState)
    console.log(invalidRating)
    console.log(invalidTitle)
    console.log(invalidSorce);
    console.log(invalidAdditionalComment);
     if(!invalidFirstName && !invalidLastName && !invalidEmail && !invalidPh && !invalidStreetAddress1 && !invalidZip
        && !invalidComments && !invalidCity &&  !invalidState && !invalidRating && !invalidTitle &&  !invalidSorce
        && !invalidAdditionalComment){
            enableSubmitButton();
        }else{
            console.log()
            submitButton.disabled = true;
        }
}

function enableSubmitButton() {
    let count = 0;
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].style.display === 'none')
            count++;
    }
    submitButton.disabled = count !== spans.length;
}

function populateTable(event) {
    event.preventDefault();
    let title;
    if (missRadioButton.checked)
        title = missRadioButton.value;
    else if (mrRadioButton.checked)
        title = mrRadioButton.value;
    else title = mrsRadioButton.value;

    const emailID = emailInput.value;
    const phone = phoneNumberInput.value;
    const address1 = streetAddress1Input.value;
    const address2 = streetAddress2Input.value;
    const cityName = cityInput.value;
    const stateName = stateInput.value;
    const ZipCode = zipcodeInput.value;
    const Comments = commentsInput.value;
    const Rating = ratingInput.value;
    const AdditionalComments = additionalCommentsInput.value;

    const table = document.getElementById("myTable");

    const trNode = document.createElement('tr');

    const tdTitle = document.createElement('td');
    tdTitle.innerHTML = title;

    const tdfName = document.createElement('td');
    tdfName.innerHTML = firstNameInput.value;

    const tdlName = document.createElement('td');
    tdlName.innerHTML = lastNameInput.value;

    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = emailID;

    const tdPhone = document.createElement('td');
    tdPhone.innerHTML = phone;

    const tdAddress1 = document.createElement('td');
    tdAddress1.innerHTML = address1;

    const tdAddress2 = document.createElement('td');
    tdAddress2.innerHTML = address2;

    const tdCity = document.createElement('td');
    tdCity.innerHTML = cityName;

    const tdState = document.createElement('td');
    tdState.innerHTML = stateName;

    const tdZipcode = document.createElement('td');
    tdZipcode.innerHTML = ZipCode;

    const tdComments = document.createElement('td');
    tdComments.innerHTML = Comments;

    const tdRating = document.createElement('td');
    tdRating.innerHTML = Rating;

    const tdAdditionalComments = document.createElement('td');
    tdAdditionalComments.innerHTML = AdditionalComments;

    trNode.appendChild(tdTitle);
    trNode.appendChild(tdfName);
    trNode.appendChild(tdlName);
    trNode.appendChild(tdEmail);
    trNode.appendChild(tdPhone);
    trNode.appendChild(tdAddress1);
    trNode.appendChild(tdAddress2);
    trNode.appendChild(tdCity);
    trNode.appendChild(tdState);
    trNode.appendChild(tdZipcode);
    trNode.appendChild(tdComments);
    trNode.appendChild(tdRating);
    trNode.appendChild(tdAdditionalComments);

    table.appendChild(trNode);
    
    document.getElementById("myForm").reset();
    onLoad();
}
