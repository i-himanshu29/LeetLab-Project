````
to be deleted....

- what exactly upsert do?

upsert in prisma checks if a record exists

if yes, it updates
if not, it creates

helpful to avoid duplicates and handle both insert/update in one call

- But agar update krenge to purane submissions ko kaise access krenge?

since upsert updates existing problemSolved, old submissions won't be lost if they're stored separately in a submissions table

just avoid storing full submissions in problemSolved

````
````
Just for fun/remember :
installation step of everything


0.npm install(and setup "type: module" and script "dev:nodemon src/index.js")
1.npm i express
2.npm i -d nodemon (for continuous running of server while updating)
3.npm i dotenv (for environment file and setup required variables)
4.npm i prisma (for storing data : db)
5.npm i @prisma/client
6.npx prisma init (prisma initallized)
7.docker (for checking you have docker or not)

8.docker run --name my-postgres -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres (for installing postgres in docker- postgres string)

- create model before creating db.js in libs
9.npx prisma generate
10.npx prisma migrate dev (and then enter message)
11.npx prisma db push (push into db)
12.npm run dev

13.npm i jsonwebtoken 
14.npm i cookie-parser

- open git bash terminal in vscode
15.openssl rand -hex 32 (JWT_SECRET : create a random password)

16.npm i bcryptjs

````

````
- Install Judge0
# 🚀 Setting Up WSL, Docker, and Judge0 on Windows

---

## **Step 1: Install WSL and Ubuntu**

1. **Enable WSL**  
   - Open **PowerShell** as **Administrator** and run:
     ```powershell
     wsl --install
     ```
   - This will install **WSL** (Windows Subsystem for Linux) along with the default **Ubuntu** distribution.

2. **Restart Your Computer**  
   - After the installation, you’ll be prompted to **restart your computer**.
   - Restart to complete the WSL setup.

3. **Complete Ubuntu Setup**  
   - Open the **Ubuntu terminal** from the Start menu.
   - Follow the prompts to **create a UNIX username and password**.

4. **Update Ubuntu**  
   - Once Ubuntu is set up, run the following commands to update all packages:
     ```bash
     sudo apt update && sudo apt upgrade -y
     ```

5. *(Optional)* **Adjust cgroup settings for better Docker compatibility**  
   - Open the GRUB config file:
     ```bash
     sudo nano /etc/default/grub
     ```
   - Find the line starting with `GRUB_CMDLINE_LINUX` and change it to:
     ```bash
     GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=0"
     ```
   - Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).
   - Update GRUB and reboot:
     ```bash
     sudo update-grub
     sudo reboot
     ```

---

## **Step 2: Install Docker and Docker Compose**

1. **Install Docker**  
   - Open the **Ubuntu terminal** and run:
     ```bash
     sudo apt update && sudo apt install -y docker.io
     ```
   - (Note: It's better to install `docker.io` package for Ubuntu.)

2. **Install Docker Compose**  
   - Still in the Ubuntu terminal, install Docker Compose:
     ```bash
     sudo apt install -y docker-compose
     ```

---

## **Step 3: Install and Set Up Judge0**

1. **Download and Extract Judge0**  
   - Download the Judge0 release archive:
     ```bash
     wget https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip
     ```
   - Unzip the downloaded archive:
     ```bash
     unzip judge0-v1.13.1.zip
     ```

2. **Set Up Secure Passwords**  
   - **Generate random passwords** for Redis and Postgres:
     - Visit [Random Password Generator](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) and copy the first password.
     - Open the `judge0.conf` file:
       ```bash
       nano judge0-v1.13.1/.env
       ```
     - Update the `REDIS_PASSWORD` with the generated password.
     - Repeat the process for `POSTGRES_PASSWORD` using a new random password.

3. **Start Judge0 Services**  
   - Navigate to the Judge0 folder:
     ```bash
     cd judge0-v1.13.1
     ```
   - Start the database and Redis services:
     ```bash
     docker-compose up -d db redis
     ```
   - Wait for a few seconds:
     ```bash
     sleep 10s
     ```
   - Start the remaining services:
     ```bash
     docker-compose up -d
     ```
   - Wait a few more seconds:
     ```bash
     sleep 5s
     ```

4. **Verify the Installation**  
   - Open your browser and visit:
     ```
     http://localhost:2358/docs
     ```
   - You should see the Judge0 API documentation page, meaning your Judge0 instance is running successfully!

---

````

````
17. npm i axios
18. npx prisma studio (for showing model/database)

````

````
Postman sample:


{
    "title": "Reverse a String",
    "description": "Given a string s, reverse the string and return the reversed output.",
    "difficulty": "EASY",
    "tags": [
        "string",
        "manipulation",
        "reversal"
    ],
    "examples": {
        "PYTHON": {
            "input": "hello",
            "output": "olleh",
            "explanation": "Reversing the string 'hello' gives 'olleh'."
        },
        "JAVASCRIPT": {
            "input": "world",
            "output": "dlrow",
            "explanation": "Reversing the string 'world' gives 'dlrow'."
        }
    },
    "constraints": "1 ≤ |s| ≤ 10^5",
    "testcases": [
        {
            "input": "abcd",
            "output": "dcba"
        },
        {
            "input": "12345",
            "output": "54321"
        },
        {
            "input": "a",
            "output": "a"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "const fs = require('fs');\n\nfunction reverseString(s) {\n    // Write your code here\n    // Return the reversed string\n    return s.split('').reverse().join('');\n}\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(reverseString(input));",
        "PYTHON": "def reverse_string(s):\n    # Write your code here\n    # Return the reversed string\n    return s[::-1]\n\nimport sys\ninput_line = sys.stdin.read().strip()\nprint(reverse_string(input_line))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static String reverseString(String s) {\n        // Write your code here\n        // Return the reversed string\n        return new StringBuilder(s).reverse().toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(reverseString(s));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(input.split('').reverse().join(''));",
        "PYTHON": "import sys\ninput_line = sys.stdin.read().strip()\nprint(input_line[::-1])",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(new StringBuilder(s).reverse().toString());\n    }\n}"
    }
}




2. 

{
    "title": "Add Two Numbers",
    "description": "Given two numbers a and b add them up and return the outout",
    "difficulty": "EASY",
    "tags": [
        "math",
        "operators",
        "addition"
    ],
    "examples": {
        "PYTHON": {
            "input": "3 7",
            "output": "10",
            "explanation": "Adding 3 and 7 gives 10."
        },
        "JAVASCRIPT": {
            "input": "-5 12",
            "output": "7",
            "explanation": "Adding -5 and 12 gives 7."
        }
    },
    "constraints": "-10^9 ≤ a, b ≤ 10^9",
    "testcases": [
        {
            "input": "100 200",
            "output": "300"
        },
        {
            "input": "-500 -600",
            "output": "-1100"
        },
        {
            "input": "0 0",
            "output": "0"
        }
    ],
 "codeSnippets": {
        "JAVASCRIPT": "const fs = require('fs');\n\nfunction addTwoNumbers(a, b) {\n    // Write your code here\n    // Return the sum of a and b\n    return a + b;\n}\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst [a, b] = input.split(' ').map(Number);\n\nconsole.log(addTwoNumbers(a, b));",
        "PYTHON": "def add_two_numbers(a, b):\n    # Write your code here\n    # Return the sum of a and b\n    return a + b\n\nimport sys\ninput_line = sys.stdin.read()\na, b = map(int, input_line.split())\nprint(add_two_numbers(a, b))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int addTwoNumbers(int a, int b) {\n        // Write your code here\n        // Return the sum of a and b\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(addTwoNumbers(a, b));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst [a, b] = input.split(' ').map(Number);\n\nconsole.log(a + b);",
        "PYTHON": "import sys\ninput_line = sys.stdin.read()\na, b = map(int, input_line.split())\nprint(a + b)",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(a + b);\n    }\n}"
    }
}
