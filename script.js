"use strict";
var icon = document.getElementById("icon");
let burger = document.querySelector(".nav__listt--item-menu-btn");
let closeBurger = document.querySelector(".nav__listt--item-menu-cls");
let headerList = document.querySelector(".nav__list");
let white = document.querySelector(".white")
let sun = document.querySelector(".bx-sun")

burger.addEventListener("click", () => {
  burger.classList = "d-none bx bx-menu  nav__listt--item-menu-btn";
  closeBurger.classList = "d-block bx bx-x   nav__listt--item-menu-cls";
  headerList.classList = "nav__list d-block";
});

closeBurger.addEventListener("click", () => {
  burger.classList = "d-block bx bx-menu  nav__listt--item-menu-btn";
  closeBurger.classList = "d-none bx bx-x   nav__listt--item-menu-cls";
  headerList.classList = "nav__list d-none";
});

sun.addEventListener("click", ()=>{
    white.classList.toggle("dark")
})