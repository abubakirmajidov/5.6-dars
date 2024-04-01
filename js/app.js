import data from "./data.js";

const template = document.querySelector(".job__templare");
const ul = document.querySelector(".job__list");
// document.querySelector("ul").appendChild(li);

data.forEach((job) => {
  const { company, location, position, postedAt, logo, contract } = job;
  const li = template.content.cloneNode(true);
  console.log(logo);

  const image = li.querySelector(".job__image");

  image.src = logo;
  const job__paragrf = li.querySelector(".job__paragrf21");

  job__paragrf.textContent = company;

  const job__h2 = li.querySelector("h2");

  job__h2.textContent = position;

  const job__d1 = li.querySelector(".d1_ago");

  job__d1.textContent = postedAt;

  const job__Full = li.querySelector(".Full_Time");

  job__Full.textContent = contract;

  const job__USA = li.querySelector(".USA_only");

  job__USA.textContent = location;

  ul.appendChild(li);
});
