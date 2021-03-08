import "./styles.css";

export default function App() {
  function handlePasswordChange(e) {
    let pass = e.target.value;
    let strength = document.getElementById("strength");
    if (pass === "") {
      strength.innerHTML = "";
      strength.classList.remove("weak");
      strength.classList.remove("strong");
    }
    strength.classList.remove("weak");
    strength.classList.remove("strong");
    let password = pass.toLowerCase();
    let strongPassword = [
      "neha",
      "mansi",
      "karishma",
      "anshika",
      "sidak",
      "himanshi",
      "priyanshi",
      "oindrila",
      "akshita",
      "megha",
      "mehak",
      "priya",
      "navya",
      "kushi",
      "khushi",
      "diya",
      "sapna",
      "woman",
      "manasvi",
      "rishika",
      "muskan",
      "riya",
      "mayuri",
      "pareena",
      "kanika",
      "kirti",
      "woman",
      "girl",
      "women",
      "renu",
      "shruti",
      "priyanka",
      "kaushki",
      "sachi",
      "ishita",
      "kavya",
      "seerat",
      "rekha",
      "nishidha",
      "pretty",
      "preety",
      "preeti",
      "prathiba",
      "pratibha"
    ];
    let filteredPass = strongPassword.filter((x) => x === password);
    if (filteredPass.length !== 0) {
      strength.innerHTML = "VERY STRONG";
      strength.classList.add("strong");
    } else {
      strength.innerHTML = "WEAK";
      strength.classList.add("weak");
    }
  }
  function formSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <main>
        <h1>Happy International Women's Day 🌸</h1>
        <form name="f1" onsubmit={formSubmit}>
          <h3>Enter your Password:</h3>
          <div className="password-div">
            <input
              onChange={handlePasswordChange}
              type="text"
              placeholder="Enter your password"
              name="password"
            />
            <p>
              Password Strength : <span id="strength"></span>
            </p>
          </div>
        </form>
        <p style={{ textAlign: "center", color:"crimson" }}>
          "Don't Believe you are <br />
          Know You Are"
        </p>
      </main>
      <div className="instructions">
        <ol>
          <li>First enter name of 3.4 Boys you know one by one</li>
          <li>Then enter your name</li>
          <li>If you didn't get expected result then try entering word "woman" <br/>or contact me</li>
        </ol>
      </div>
      <footer>
        Made with ❤️ and Respect 🌸 from{" "}
        <a href="https://kamalnanda.github.io" target="_blank">
          Kamal Nanda
        </a>
      </footer>
    </>
  );
}
