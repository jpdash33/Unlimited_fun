let jbtn = document.getElementById("joke-btn")

jbtn.onclick = function () {

    if (!navigator.onLine) {
        alert("❌ No Internet Connection!, please reconnect your internet and try again...");
        return;
    }
    else {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then((joke1) => {
                if(!joke1.ok)
                {
                    throw new Error("⚠️ API Erroe ⚠️")
                }
                return joke1.json();
            })
            .then((joke) => {

                let jokeText = document.getElementById("joke-text");

                if (joke.type === "single") {
                    jokeText.innerText = joke.joke;
                }
                else {
                    jokeText.innerText = joke.setup + "\n\n" + joke.delivery;
                }
            })
            .catch((err) => {
                document.getElementById("joke-text").innerText = "⚠️ Failed to load joke! "
                console.log(err);
            });
    }
}

