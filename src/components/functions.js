function checkAnims() {
  const anims = document.querySelectorAll(".noanim");

  for (var i = 0; i < anims.length; i++) {
    const rect = anims[i].getBoundingClientRect();

    if (rect.top + 100 - window.innerHeight < 0) {
      anims[i].classList.add("anim");
      anims[i].classList.remove("noanim");
    }
  }
}

export const functions = { checkAnims }