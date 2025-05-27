<!-- index.css file ;; -->
@import "tailwindcss";
@plugin "daisyui";

@keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  .animate-blink {
    animation: blink 1s infinite;
  }
  
  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-100 {
    animation-delay: 1s;
  }
  
  .delay-200 {
    animation-delay: 2s;
  }
  
  .delay-300 {
    animation-delay: 3s;
  }
  
  .delay-500 {
    animation-delay: 5s;
  }
  
  .delay-700 {
    animation-delay: 7s;
  }
  
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
  


````
Question-1

{
    "title": "House Robber",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, and adjacent houses cannot be robbed on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "difficulty": "MEDIUM",
    "tags": [
        "dynamic programming",
        "array",
        "greedy"
    ],
    "examples": {
        "PYTHON": {
            "input": "[1,2,3,1]",
            "output": "4",
            "explanation": "Rob house 1 (money = 1) and house 3 (money = 3) for a total of 4."
        },
        "JAVASCRIPT": {
            "input": "[2,7,9,3,1]",
            "output": "12",
            "explanation": "Rob house 1 (money = 2), house 3 (money = 9), and house 5 (money = 1) for a total of 12."
        }
    },
    "constraints": "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400",
    "testcases": [
        {
            "input": "[2,1,1,2]",
            "output": "4"
        },
        {
            "input": "[10,2,5,8,1]",
            "output": "18"
        },
        {
            "input": "[0]",
            "output": "0"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function rob(nums) {\n    let prev2 = 0, prev1 = 0;\n    for (const num of nums) {\n        let temp = prev1;\n        prev1 = Math.max(prev1, prev2 + num);\n        prev2 = temp;\n    }\n    return prev1;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = JSON.parse(input);\nconsole.log(rob(nums));",
        "PYTHON": "def rob(nums):\n    prev2, prev1 = 0, 0\n    for num in nums:\n        prev2, prev1 = prev1, max(prev1, prev2 + num)\n    return prev1\n\nimport sys\nnums = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(rob(nums))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int rob(int[] nums) {\n        int prev2 = 0, prev1 = 0;\n        for (int num : nums) {\n            int temp = prev1;\n            prev1 = Math.max(prev1, prev2 + num);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        System.out.println(rob(nums));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function rob(nums) {\n    let prev2 = 0, prev1 = 0;\n    for (const num of nums) {\n        let temp = prev1;\n        prev1 = Math.max(prev1, prev2 + num);\n        prev2 = temp;\n    }\n    return prev1;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = JSON.parse(input);\nconsole.log(rob(nums));",
        "PYTHON": "def rob(nums):\n    prev2, prev1 = 0, 0\n    for num in nums:\n        prev2, prev1 = prev1, max(prev1, prev2 + num)\n    return prev1\n\nimport sys\nnums = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(rob(nums))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        System.out.println(rob(nums));\n    }\n\n    private static int rob(int[] nums) {\n        int prev2 = 0, prev1 = 0;\n        for (int num : nums) {\n            int temp = prev1;\n            prev1 = Math.max(prev1, prev2 + num);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n}"
    }
}




Question-2.............................................................................

{
    "title": "Nth Fibonacci Number",
    "description": "Given an integer n, find the nth Fibonacci number. The Fibonacci sequence is defined as follows: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.",
    "difficulty": "EASY",
    "tags": [
        "recursion",
        "math",
        "dynamic programming"
    ],
    "examples": {
        "PYTHON": {
            "input": "5",
            "output": "5",
            "explanation": "The Fibonacci sequence up to the 5th number is 0, 1, 1, 2, 3, 5."
        },
        "JAVASCRIPT": {
            "input": "7",
            "output": "13",
            "explanation": "The Fibonacci sequence up to the 7th number is 0, 1, 1, 2, 3, 5, 8, 13."
        }
    },
    "constraints": "0 ≤ n ≤ 50",
    "testcases": [
        {
            "input": "10",
            "output": "55"
        },
        {
            "input": "20",
            "output": "6765"
        },
        {
            "input": "0",
            "output": "0"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "const fs = require('fs');\n\nfunction fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input, 10);\n\nconsole.log(fibonacci(n));",
        "PYTHON": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nimport sys\nn = int(sys.stdin.read().strip())\nprint(fibonacci(n))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n - 1) + fibonacci(n - 2);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input, 10);\n\nfunction fibonacci(n) {\n    let a = 0, b = 1;\n    for (let i = 2; i <= n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return n > 0 ? b : a;\n}\n\nconsole.log(fibonacci(n));",
        "PYTHON": "import sys\nn = int(sys.stdin.read().strip())\n\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint(fibonacci(n))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n\n    private static int fibonacci(int n) {\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        return n > 0 ? b : a;\n    }\n}"
    }
}
