async function generate() {
    let promise = await fetch('https://randomuser.me/api/', {dataType: 'json'}).then(text => text.json());
    let result = promise.results[0];
    let name = result.name.first;
    let lastName = result.name.last;
    let location = result.location.country;
    let phone = result.phone;
    let email = result.email;
    let src=result.picture.large;
    document.getElementById('name').innerText=name;
    document.getElementById('lastName').innerText=lastName;
    document.getElementById('location').innerText=location;
    document.getElementById('phone').innerText=phone;
    document.getElementById('email').innerText=email;
    document.getElementById('image').setAttribute('src', src);
}

