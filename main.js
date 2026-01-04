
  const content = document.getElementById("content");

  // HOME
  function home() {
    content.innerHTML = `
      <h2>Home</h2>
      <p>Welcome to my Project.</p>
      <p>This project helps students understand basic JavaScript concepts.</p>
    `;
  }

  // ABOUT (XOGTAADA)
  function about() {
    content.innerHTML = `
      <h2>About</h2>
      <img src="newfolder.jpeg" alt="Profile" style="width:150px;height:150px;border-radius:50%;">
      <p><b>Name:</b> Salma Salah Abdirahim</p>
      <p><b>ID:</b> C5240007</p>
      <p><b>Faculty:</b> IT</p>
      <p><b>Subject:</b> JavaScript</p>
      <p><b>Instructor:</b> Ustad Jamila</p>

      <p>
        This project is prepared for academic purposes to demonstrate
        JavaScript concepts such as Arrays, Loops, and Functions.
      </p>
    `;
  }

  // CHAPTERS
  function chapters() {
    content.innerHTML = `
      <h2>Chapters</h2>
      <button class="chapter-btn" onclick="ch7()">Chapter 7</button>
      <button class="chapter-btn" onclick="ch8()">Chapter 8</button>
      <button class="chapter-btn" onclick="ch9()">Chapter 9</button>
      <div id="chapter-content" style="margin-top:15px;"></div>
    `;
  }

  // ===== Chapter 7: ARRAYS (3 Examples) =====
  function ch7() {
    let fruits = ["Apple", "Banana", "Orange"];
    let numbers = [10, 20, 30];

    document.getElementById("chapter-content").innerHTML = `
      <h3>Chapter 7: Arrays</h3>

      <p><b>Example 1: Create Array</b></p>
      <pre>
let fruits = ["Apple", "Banana", "Orange"];
      </pre>
      <p>First fruit: ${fruits[0]}</p>

      <p><b>Example 2: Array Length</b></p>
      <pre>
fruits.length;
      </pre>
      <p>Total fruits: ${fruits.length}</p>

      <p><b>Example 3: Array Sum</b></p>
      <pre>
let numbers = [10, 20, 30];
      </pre>
      <p>Sum: ${numbers[0] + numbers[1] + numbers[2]}</p>
    `;
  }

  // ===== Chapter 8: LOOPS (3 Examples) =====
  function ch8() {
    let forResult = "";
    for (let i = 1; i <= 5; i++) {
      forResult += i + " ";
    }

    let whileResult = "";
    let j = 1;
    while (j <= 3) {
      whileResult += j + " ";
      j++;
    }

    document.getElementById("chapter-content").innerHTML = `
      <h3>Chapter 8: Loops</h3>

      <p><b>Example 1: for loop</b></p>
      <pre>
for(let i = 1; i <= 5; i++){
  console.log(i);
}
      </pre>
      <p>Result: ${forResult}</p>

      <p><b>Example 2: while loop</b></p>
      <pre>
while(j <= 3){
  console.log(j);
}
      </pre>
      <p>Result: ${whileResult}</p>

      <p><b>Example 3: loop with array</b></p>
      <pre>
let names = ["Ali", "Amina", "Salma"];
for(let n of names){
  console.log(n);
}
      </pre>
    `;
  }

  // ===== Chapter 9: FUNCTIONS (3 Examples) =====
  function ch9() {
    function greet(name) {
      return "Hello " + name;
    }

    function add(a, b) {
      return a + b;
    }

    document.getElementById("chapter-content").innerHTML = `
      <h3>Chapter 9: Functions</h3>

      <p><b>Example 1: Simple Function</b></p>
      <pre>
function greet(name){
  return "Hello " + name;
}
      </pre>
      <p>${greet("Student")}</p>

      <p><b>Example 2: Function with Parameters</b></p>
      <pre>
function add(a, b){
  return a + b;
}
      </pre>
      <p>10 + 20 = ${add(10,20)}</p>

      <p><b>Example 3: Function Call</b></p>
      <pre>
greet("Salma");
      </pre>
      <p>${greet("Salma")}</p>
    `;
  }

  // Default page
  home();
