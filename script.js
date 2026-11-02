const buttons = document.querySelectorAll("nav button");
    const pages = document.querySelectorAll(".page");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetPage = button.dataset.page;

        // Update active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Show the selected "page"
        pages.forEach(page => {
          page.classList.toggle("active", page.id === targetPage);
        });
      });
    });

    // AMBIENT BACKGROUND MUSIC
  const backgroundMusic = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicButton");
 
  backgroundMusic.volume = 0.3;

  const musicButtonIcon = musicButton.querySelector(".music-toggle__icon");
  const musicButtonLabel = musicButton.querySelector(".music-toggle__label");
 
  musicButton.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();
        musicButton.setAttribute("aria-pressed", "true");
        musicButtonIcon.textContent = "Ⅱ";
        musicButtonLabel.textContent = "Pause music";
      } catch (error) {
        console.error("Could not play background music:", error);
        musicButton.setAttribute("aria-pressed", "false");
        musicButtonIcon.textContent = "▶";
        musicButtonLabel.textContent = "Music could not be played";
      }
    } else {
      backgroundMusic.pause();
      musicButton.setAttribute("aria-pressed", "false");
      musicButtonIcon.textContent = "▶";
      musicButtonLabel.textContent = "Play music";
    }
  });