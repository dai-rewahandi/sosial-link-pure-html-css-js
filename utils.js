import { Link, Sosial, user_data } from "./your-data.js"

const title = document.getElementById("title")
const name = document.getElementById("name")
const username = document.getElementById("username")
const prop = document.getElementById("prop")

title.textContent = `@${user_data.username}`
name.textContent = user_data.name
username.textContent = `@${user_data.username}`
prop.textContent = user_data.prop


Link.map((link) => {
	const li = document.createElement("li")
	const a = document.createElement("a")
	a.href = link.link
	a.textContent = link.alt
	li.appendChild(a)
	document.getElementById("link_loader").appendChild(li)
})

Sosial.map((sosial) => {
	const li = document.createElement("li")
	const a = document.createElement("a")
	const i = document.createElement("i")
	i.classList = `ti ti-brand-${sosial.sosial}`
	a.href = sosial.link
	a.appendChild(i)
	li.appendChild(a)
	document.getElementById("sosial_loader").appendChild(li)
})