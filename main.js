
let content = [];

customers.results.forEach(function(findMemberInfo) {


let template =
`
    <article class="eachMember">
        <img class="memberPic" src="${findMemberInfo.picture.large}">
        <h3 class="memberName">${findMemberInfo.name.first} ${findMemberInfo.name.last}</h3>
        <h4 class="memberEmail">${findMemberInfo.email}</h4>
        <p class="memberNumber">${findMemberInfo.cell}</p>
        <p class="memberLocation">${findMemberInfo.location.street}</p>
        <p class="memberLocation">${findMemberInfo.location.city} ${findMemberInfo.location.state} ${findMemberInfo.location.postcode}</p>
      </article>
`
    content += template;
});

let container = document.querySelector(`.directoryPeople`);
container.innerHTML = content;
