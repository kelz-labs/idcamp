const body = document.body;
const profile = document.querySelector(".profile-container");
const profileNav = document.querySelector(".profile-nav");
const navbar = document.querySelector(".nav-container");
const logo = document.querySelector(".logo-h1");
const post = document.querySelectorAll(".post");
const postTextCode = document.querySelector(".post-text-code");
const prevPost = document.querySelector(".previous-post");
const nextPost = document.querySelector(".next-post");
const icon = document.querySelectorAll(".profile-sosmed-icon");
const toggleButton = document.querySelector(".toggle-dark-mode-button");
const toggleButtonNav = document.querySelector(".toggle-dark-mode-button-nav");
const underline = document.querySelector(".underline");
const underlineFinishedPost = document.querySelector(
  ".underline-finished-post"
);
const footer = document.querySelector(".footer");

let darkMode = localStorage.getItem("dark-mode");

// Dark Mode di mode desktop
function desktop() {
  const enableDarkMode = () => {
    body.classList.add("dark-mode-body");
    profile.classList.add("dark-mode-profile");
    profileNav.classList.add("dark-mode-profile-nav");
    navbar.classList.add("dark-mode-nav-container");
    logo.classList.add("dark-mode-logo");
    postTextCode.classList.add("dark-mode-post-text-code");
    prevPost.classList.add("dark-mode-post-prev");
    nextPost.classList.add("dark-mode-post-next");
    underline.classList.add("dark-mode-underline");
    underlineFinishedPost.classList.add("dark-mode-underline-finished-post");
    footer.classList.add("dark-mode-footer");

    // karena querySelectorAll mereturn nodelist, maka diloop dengan forEach biar kebagian semua
    post.forEach((color) => {
      color.classList.add("dark-mode-post");
    });

    icon.forEach((color) => {
      color.classList.add("profile-sosmed-icon-dark");
    });

    toggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    toggleButtonNav.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("dark-mode", "enabled");
  };

  // Non-Aktifin dark mode
  const disableDarkMode = () => {
    body.classList.remove("dark-mode-body");
    profile.classList.remove("dark-mode-profile");
    profileNav.classList.remove("dark-mode-profile-nav");
    navbar.classList.remove("dark-mode-nav-container");
    logo.classList.remove("dark-mode-logo");
    postTextCode.classList.remove("dark-mode-post-text-code");
    prevPost.classList.remove("dark-mode-post-prev");
    nextPost.classList.remove("dark-mode-post-next");
    underline.classList.remove("dark-mode-underline");
    underlineFinishedPost.classList.remove("dark-mode-underline-finished-post");
    footer.classList.remove("dark-mode-footer");

    // karena querySelectorAll mereturn nodelist, maka diloop dengan forEach biar kebagian semua
    post.forEach((color) => {
      color.classList.remove("dark-mode-post");
    });

    icon.forEach((color) => {
      color.classList.remove("profile-sosmed-icon-dark");
    });

    toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toggleButtonNav.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  toggleButton.addEventListener("click", () => {
    // ketika button diclick, maka akan mengupdate dark modenya
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

function mobile() {
  const toggleButton = document.querySelector(".toggle-dark-mode-button-nav");

  const enableDarkMode = () => {
    body.classList.add("dark-mode-body");
    profile.classList.add("dark-mode-profile");
    profileNav.classList.add("dark-mode-profile-nav");
    logo.classList.add("dark-mode-logo");
    navbar.classList.add("dark-mode-nav-container");
    postTextCode.classList.add("dark-mode-post-text-code");
    prevPost.classList.add("dark-mode-post-prev");
    nextPost.classList.add("dark-mode-post-next");
    underline.classList.add("dark-mode-underline");
    underlineFinishedPost.classList.add("dark-mode-underline-finished-post");
    footer.classList.add("dark-mode-footer");

    // karena querySelectorAll mereturn nodelist, maka diloop dengan forEach biar kebagian semua
    post.forEach((color) => {
      color.classList.add("dark-mode-post");
    });

    icon.forEach((color) => {
      color.classList.add("profile-sosmed-icon-dark");
    });

    toggleButtonNav.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    toggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("dark-mode", "enabled");
  };

  // Non-Aktifin dark mode
  const disableDarkMode = () => {
    body.classList.remove("dark-mode-body");
    profile.classList.remove("dark-mode-profile");
    profileNav.classList.remove("dark-mode-profile-nav");
    navbar.classList.remove("dark-mode-nav-container");
    logo.classList.remove("dark-mode-logo");
    postTextCode.classList.remove("dark-mode-post-text-code");
    prevPost.classList.remove("dark-mode-post-prev");
    nextPost.classList.remove("dark-mode-post-next");
    underline.classList.remove("dark-mode-underline");
    underlineFinishedPost.classList.remove("dark-mode-underline-finished-post");
    footer.classList.remove("dark-mode-footer");

    // karena querySelectorAll mereturn nodelist, maka diloop dengan forEach biar kebagian semua
    post.forEach((color) => {
      color.classList.remove("dark-mode-post");
    });

    icon.forEach((color) => {
      color.classList.remove("profile-sosmed-icon-dark");
    });

    toggleButtonNav.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  toggleButton.addEventListener("click", () => {
    // ketika button diclick, maka akan mengupdate dark modenya
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

// memanggil fungsi
desktop();
mobile();
