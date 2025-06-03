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


Question -3 ......................................................................

House Robber - II 

{
    "title": "House Robber II",
    "description": "You are a professional robber planning to rob houses along a street. Houses are arranged in a circle, meaning the first and last houses are adjacent. Each house has a certain amount of money stashed, and adjacent houses cannot be robbed on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "difficulty": "MEDIUM",
    "tags": [
        "dynamic programming",
        "array"
    ],
    "examples": {
        "PYTHON": {
            "input": "[2,3,2]",
            "output": "3",
            "explanation": "You can rob house 2 (money = 3) for a total of 3. Robbing houses 1 and 3 together is not allowed because they are adjacent."
        },
        "JAVASCRIPT": {
            "input": "[1,2,3,1]",
            "output": "4",
            "explanation": "Rob house 2 (money = 2) and house 4 (money = 1) for a total of 4."
        }
    },
    "constraints": "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400",
    "testcases": [
        {
            "input": "[1,2,3]",
            "output": "3"
        },
        {
            "input": "[4,1,2,7,5,3,1]",
            "output": "14"
        },
        {
            "input": "[2]",
            "output": "2"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function rob(nums) {\n    if (nums.length === 1) return nums[0];\n\n    function robLinear(houses) {\n        let prev2 = 0, prev1 = 0;\n        for (const house of houses) {\n            let temp = prev1;\n            prev1 = Math.max(prev1, prev2 + house);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n\n    return Math.max(robLinear(nums.slice(1)), robLinear(nums.slice(0, -1)));\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = JSON.parse(input);\nconsole.log(rob(nums));",
        "PYTHON": "def rob(nums):\n    if len(nums) == 1:\n        return nums[0]\n\n    def rob_linear(houses):\n        prev2, prev1 = 0, 0\n        for house in houses:\n            prev2, prev1 = prev1, max(prev1, prev2 + house)\n        return prev1\n\n    return max(rob_linear(nums[1:]), rob_linear(nums[:-1]))\n\nimport sys\nnums = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(rob(nums))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int rob(int[] nums) {\n        if (nums.length == 1) return nums[0];\n\n        return Math.max(robLinear(nums, 1, nums.length - 1), robLinear(nums, 0, nums.length - 2));\n    }\n\n    private static int robLinear(int[] nums, int start, int end) {\n        int prev2 = 0, prev1 = 0;\n        for (int i = start; i <= end; i++) {\n            int temp = prev1;\n            prev1 = Math.max(prev1, prev2 + nums[i]);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        System.out.println(rob(nums));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function rob(nums) {\n    if (nums.length === 1) return nums[0];\n\n    function robLinear(houses) {\n        let prev2 = 0, prev1 = 0;\n        for (const house of houses) {\n            let temp = prev1;\n            prev1 = Math.max(prev1, prev2 + house);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n\n    return Math.max(robLinear(nums.slice(1)), robLinear(nums.slice(0, -1)));\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nums = JSON.parse(input);\nconsole.log(rob(nums));",
        "PYTHON": "def rob(nums):\n    if len(nums) == 1:\n        return nums[0]\n\n    def rob_linear(houses):\n        prev2, prev1 = 0, 0\n        for house in houses:\n            prev2, prev1 = prev1, max(prev1, prev2 + house)\n        return prev1\n\n    return max(rob_linear(nums[1:]), rob_linear(nums[:-1]))\n\nimport sys\nnums = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(rob(nums))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        System.out.println(rob(nums));\n    }\n\n    private static int rob(int[] nums) {\n        if (nums.length == 1) return nums[0];\n        return Math.max(robLinear(nums, 1, nums.length - 1), robLinear(nums, 0, nums.length - 2));\n    }\n\n    private static int robLinear(int[] nums, int start, int end) {\n        int prev2 = 0, prev1 = 0;\n        for (int i = start; i <= end; i++) {\n            int temp = prev1;\n            prev1 = Math.max(prev1, prev2 + nums[i]);\n            prev2 = temp;\n        }\n        return prev1;\n    }\n}"
    }
}



Question-4 ................................................

Coin Change

{
    "title": "Coin Change Problem",
    "description": "Given an array of distinct integers representing coin denominations and an integer amount, determine the fewest number of coins needed to make up that amount. If that amount cannot be made up, return -1.",
    "difficulty": "MEDIUM",
    "tags": [
        "dynamic programming",
        "math",
        "array"
    ],
    "examples": {
        "PYTHON": {
            "input": "[1, 2, 5]\n11",
            "output": "3",
            "explanation": "The fewest coins needed to make up the amount 11 is 3 (5 + 5 + 1)."
        },
        "JAVASCRIPT": {
            "input": "[2]\n3",
            "output": "-1",
            "explanation": "The amount 3 cannot be formed with the coin denominations [2]."
        }
    },
    "constraints": "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2^31 - 1, 0 ≤ amount ≤ 10^4",
    "testcases": [
        {
            "input": "[1, 2, 5]\n11",
            "output": "3"
        },
        {
            "input": "[2]\n3",
            "output": "-1"
        },
        {
            "input": "[186, 419, 83, 408]\n6249",
            "output": "20"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = JSON.parse(input[0]);\nconst amount = parseInt(input[1], 10);\n\n// Write your solution logic here\n",
        "PYTHON": "import sys\nimport json\n\n# Reading input\nlines = sys.stdin.read().splitlines()\ncoins = json.loads(lines[0])\namount = int(lines[1])\n\n# Write your solution logic here\n",
        "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String coinInput = sc.nextLine().trim();\n        int amount = sc.nextInt();\n        int[] coins = Arrays.stream(coinInput.replace(\"[\", \"\").replace(\"]\", \"\").split(\",\"))\n                .map(String::trim)\n                .mapToInt(Integer::parseInt).toArray();\n\n        // Write your solution logic here\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = JSON.parse(input[0]);\nconst amount = parseInt(input[1], 10);\n\nfunction coinChange(coins, amount) {\n    const dp = Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let coin of coins) {\n        for (let i = coin; i <= amount; i++) {\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}\n\nconsole.log(coinChange(coins, amount));",
        "PYTHON": "import sys\nimport json\n\ndef coinChange(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] = min(dp[x], dp[x - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1\n\n# Reading input\nlines = sys.stdin.read().splitlines()\ncoins = json.loads(lines[0])\namount = int(lines[1])\nprint(coinChange(coins, amount))",
        "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String coinInput = sc.nextLine().trim();\n        int amount = sc.nextInt();\n        int[] coins = Arrays.stream(coinInput.replace(\"[\", \"\").replace(\"]\", \"\").split(\",\"))\n                .map(String::trim)\n                .mapToInt(Integer::parseInt).toArray();\n        System.out.println(coinChange(coins, amount));\n    }\n\n    private static int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, Integer.MAX_VALUE);\n        dp[0] = 0;\n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                if (dp[i - coin] != Integer.MAX_VALUE) {\n                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n                }\n            }\n        }\n        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];\n    }\n}"
    }
}


Question-5.................................................
Coin Change -II

{
    "title": "Coin Change II",
    "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.",
    "difficulty": "MEDIUM",
    "tags": [
        "dynamic programming",
        "combinatorics",
        "array"
    ],
    "examples": {
        "PYTHON": {
            "input": "[1, 2, 5]\n5",
            "output": "4",
            "explanation": "There are four combinations: (5), (2+2+1), (2+1+1+1), (1+1+1+1+1)."
        },
        "JAVASCRIPT": {
            "input": "[2, 3, 7]\n7",
            "output": "2",
            "explanation": "Two combinations are possible: (7), (3+2+2)."
        }
    },
    "constraints": "1 ≤ coins.length ≤ 30, 1 ≤ coins[i] ≤ 5000, 0 ≤ amount ≤ 5000",
    "testcases": [
        {
            "input": "[1, 2, 3]\n4",
            "output": "4"
        },
        {
            "input": "[2, 5, 3, 6]\n10",
            "output": "5"
        },
        {
            "input": "[10]\n10",
            "output": "1"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = JSON.parse(input[0]);\nconst amount = parseInt(input[1], 10);\n\n// Write your solution logic here\n",
        "PYTHON": "import sys\nimport json\n\n# Reading input\nlines = sys.stdin.read().splitlines()\ncoins = json.loads(lines[0])\namount = int(lines[1])\n\n# Write your solution logic here\n",
        "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String coinInput = sc.nextLine().trim();\n        int amount = sc.nextInt();\n        int[] coins = Arrays.stream(coinInput.replace(\"[\", \"\").replace(\"]\", \"\").split(\",\"))\n                .map(String::trim)\n                .mapToInt(Integer::parseInt).toArray();\n\n        // Write your solution logic here\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = JSON.parse(input[0]);\nconst amount = parseInt(input[1], 10);\n\nfunction change(amount, coins) {\n    const dp = Array(amount + 1).fill(0);\n    dp[0] = 1;\n    for (const coin of coins) {\n        for (let i = coin; i <= amount; i++) {\n            dp[i] += dp[i - coin];\n        }\n    }\n    return dp[amount];\n}\n\nconsole.log(change(amount, coins));",
        "PYTHON": "import sys\nimport json\n\ndef change(amount, coins):\n    dp = [0] * (amount + 1)\n    dp[0] = 1\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] += dp[x - coin]\n    return dp[amount]\n\n# Reading input\nlines = sys.stdin.read().splitlines()\ncoins = json.loads(lines[0])\namount = int(lines[1])\nprint(change(amount, coins))",
        "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String coinInput = sc.nextLine().trim();\n        int amount = sc.nextInt();\n        int[] coins = Arrays.stream(coinInput.replace(\"[\", \"\").replace(\"]\", \"\").split(\",\"))\n                .map(String::trim)\n                .mapToInt(Integer::parseInt).toArray();\n        System.out.println(change(amount, coins));\n    }\n\n    private static int change(int amount, int[] coins) {\n        int[] dp = new int[amount + 1];\n        dp[0] = 1;\n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                dp[i] += dp[i - coin];\n            }\n        }\n        return dp[amount];\n    }\n}"
    }
}


Question-6...............................................

House Robber - III

{
  "title": "House Robber III",
  "description": "The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the \"root\". Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night. Determine the maximum amount of money the thief can rob tonight without alerting the police.",
  "difficulty": "MEDIUM",
  "tags": [
    "tree",
    "dynamic programming",
    "depth-first search"
  ],
  "examples": {
    "PYTHON": {
      "input": "[3,2,3,null,3,null,1]",
      "output": "7",
      "explanation": "Maximum amount is 3 (root) + 3 (right child of left subtree) + 1 (right child of right subtree) = 7."
    },
    "JAVASCRIPT": {
      "input": "[3,4,5,1,3,null,1]",
      "output": "9",
      "explanation": "Maximum amount is 4 + 5 = 9."
    }
  },
  "constraints": "The number of nodes in the tree is in the range [1, 10^4]. 0 <= Node.val <= 10^4",
  "testcases": [
    {
      "input": "[3,2,3,null,3,null,1]",
      "output": "7"
    },
    {
      "input": "[3,4,5,1,3,null,1]",
      "output": "9"
    },
    {
      "input": "[2,1,3,null,4]",
      "output": "7"
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "const fs = require('fs');\n\n// Reading input (serialized binary tree as array)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodes = JSON.parse(input);\n\n// You can construct the binary tree from 'nodes' array\n// Write your solution logic here\n",
    "PYTHON": "import sys\nimport json\n\n# Reading input (serialized binary tree as array)\nnodes = json.loads(sys.stdin.read().strip())\n\n# You can construct the binary tree from 'nodes' list\n# Write your solution logic here\n",
    "JAVA": "import java.util.*;\n\npublic class Main {\n\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) { this.val = val; }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        // Parse input string to integer array\n        input = input.replace(\"[\", \"\").replace(\"]\", \"\");\n        String[] parts = input.split(\",\");\n        Integer[] nodes = new Integer[parts.length];\n        for (int i = 0; i < parts.length; i++) {\n            String s = parts[i].trim();\n            if (s.equals(\"null\")) nodes[i] = null;\n            else nodes[i] = Integer.parseInt(s);\n        }\n\n        // Build tree from nodes array\n        TreeNode root = buildTree(nodes, 0);\n\n        // Write your solution logic here\n    }\n\n    private static TreeNode buildTree(Integer[] nodes, int index) {\n        if (index >= nodes.length || nodes[index] == null) return null;\n        TreeNode node = new TreeNode(nodes[index]);\n        node.left = buildTree(nodes, 2 * index + 1);\n        node.right = buildTree(nodes, 2 * index + 2);\n        return node;\n    }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "const fs = require('fs');\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst nodes = JSON.parse(input);\n\nfunction TreeNode(val) {\n    this.val = val;\n    this.left = this.right = null;\n}\n\nfunction buildTree(nodes, index = 0) {\n    if (index >= nodes.length || nodes[index] === null) return null;\n    const node = new TreeNode(nodes[index]);\n    node.left = buildTree(nodes, 2 * index + 1);\n    node.right = buildTree(nodes, 2 * index + 2);\n    return node;\n}\n\nfunction rob(root) {\n    function dfs(node) {\n        if (!node) return [0, 0];\n        const left = dfs(node.left);\n        const right = dfs(node.right);\n\n        // [rob this node, not rob this node]\n        const robNode = node.val + left[1] + right[1];\n        const notRobNode = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);\n\n        return [robNode, notRobNode];\n    }\n\n    const result = dfs(root);\n    return Math.max(result[0], result[1]);\n}\n\nconst root = buildTree(nodes);\nconsole.log(rob(root));",
    "PYTHON": "import sys\nimport json\n\nnodes = json.loads(sys.stdin.read().strip())\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef build_tree(nodes, index=0):\n    if index >= len(nodes) or nodes[index] is None:\n        return None\n    node = TreeNode(nodes[index])\n    node.left = build_tree(nodes, 2 * index + 1)\n    node.right = build_tree(nodes, 2 * index + 2)\n    return node\n\ndef rob(root):\n    def dfs(node):\n        if not node:\n            return (0, 0)\n        left = dfs(node.left)\n        right = dfs(node.right)\n\n        rob_node = node.val + left[1] + right[1]\n        not_rob_node = max(left) + max(right)\n        return (rob_node, not_rob_node)\n\n    return max(dfs(root))\n\nroot = build_tree(nodes)\nprint(rob(root))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) { this.val = val; }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        input = input.replace(\"[\", \"\").replace(\"]\", \"\");\n        String[] parts = input.split(\",\");\n        Integer[] nodes = new Integer[parts.length];\n        for (int i = 0; i < parts.length; i++) {\n            String s = parts[i].trim();\n            nodes[i] = s.equals(\"null\") ? null : Integer.parseInt(s);\n        }\n\n        TreeNode root = buildTree(nodes, 0);\n        System.out.println(rob(root));\n    }\n\n    private static TreeNode buildTree(Integer[] nodes, int index) {\n        if (index >= nodes.length || nodes[index] == null) return null;\n        TreeNode node = new TreeNode(nodes[index]);\n        node.left = buildTree(nodes, 2 * index + 1);\n        node.right = buildTree(nodes, 2 * index + 2);\n        return node;\n    }\n\n    private static int[] robHelper(TreeNode node) {\n        if (node == null) return new int[]{0,0};\n        int[] left = robHelper(node.left);\n        int[] right = robHelper(node.right);\n\n        int robNode = node.val + left[1] + right[1];\n        int notRobNode = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);\n\n        return new int[]{robNode, notRobNode};\n    }\n\n    private static int rob(TreeNode root) {\n        int[] res = robHelper(root);\n        return Math.max(res[0], res[1]);\n    }\n}"
    }
}


Question-7..............................................
N-Queen-II

{
  "title": "N-Queens II",
  "description": "The N-Queens II problem asks for the total number of distinct solutions to place n queens on an n×n chessboard such that no two queens attack each other.",
  "difficulty": "HARD",
  "tags": [
    "backtracking",
    "recursion",
    "math"
  ],
  "examples": {
    "PYTHON": {
      "input": "4",
      "output": "2",
      "explanation": "There are 2 distinct solutions to the 4-queens problem."
    },
    "JAVASCRIPT": {
      "input": "1",
      "output": "1",
      "explanation": "There is only one way to place a queen on a 1x1 board."
    }
  },
  "constraints": "1 <= n <= 14",
  "testcases": [
    {
      "input": "4",
      "output": "2"
    },
    {
      "input": "1",
      "output": "1"
    },
    {
      "input": "8",
      "output": "92"
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input, 10);\n// Implement your solution here\n",
    "PYTHON": "import sys\nn = int(sys.stdin.read().strip())\n# Implement your solution here\n",
    "JAVA": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    // Implement your solution here\n  }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input, 10);\n\nfunction totalNQueens(n) {\n    let count = 0;\n    const board = Array(n).fill(-1);\n\n    function isSafe(row, col) {\n        for (let i = 0; i < row; i++) {\n            if (board[i] === col ||\n                board[i] - i === col - row ||\n                board[i] + i === col + row) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    function backtrack(row) {\n        if (row === n) {\n            count++;\n            return;\n        }\n        for (let col = 0; col < n; col++) {\n            if (isSafe(row, col)) {\n                board[row] = col;\n                backtrack(row + 1);\n                board[row] = -1;\n            }\n        }\n    }\n\n    backtrack(0);\n    return count;\n}\n\nconsole.log(totalNQueens(n));",
    "PYTHON": "import sys\nn = int(sys.stdin.read().strip())\n\ndef total_n_queens(n):\n    count = 0\n    board = [-1] * n\n\n    def is_safe(row, col):\n        for i in range(row):\n            if board[i] == col or \\\n               board[i] - i == col - row or \\\n               board[i] + i == col + row:\n                return False\n        return True\n\n    def backtrack(row):\n        nonlocal count\n        if row == n:\n            count += 1\n            return\n        for col in range(n):\n            if is_safe(row, col):\n                board[row] = col\n                backtrack(row + 1)\n                board[row] = -1\n\n    backtrack(0)\n    return count\n\nprint(total_n_queens(n))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(totalNQueens(n));\n    }\n\n    private static int totalNQueens(int n) {\n        int count = 0;\n        int[] board = new int[n];\n        Arrays.fill(board, -1);\n        count = backtrack(0, board, n, 0);\n        return count;\n    }\n\n    private static int backtrack(int row, int[] board, int n, int count) {\n        if (row == n) {\n            return count + 1;\n        }\n        for (int col = 0; col < n; col++) {\n            if (isSafe(row, col, board)) {\n                board[row] = col;\n                count = backtrack(row + 1, board, n, count);\n                board[row] = -1;\n            }\n        }\n        return count;\n    }\n\n    private static boolean isSafe(int row, int col, int[] board) {\n        for (int i = 0; i < row; i++) {\n            if (board[i] == col || board[i] - i == col - row || board[i] + i == col + row) {\n                return false;\n            }\n        }\n        return true;\n    }\n}"
  }
}




Question-8...........................................

{
  "title": "Same Tree",
  "description": "Given two binary trees, check if they are the same (structurally identical with same values).",
  "difficulty": "EASY",
  "tags": ["tree", "recursion", "binary tree"],
  "examples": {
    "JAVA": {
      "input": "[1,2,3]\n[1,2,3]",
      "output": "true",
      "explanation": "Both trees are identical."
    },
    "PYTHON": {
      "input": "[1,2]\n[1,null,2]",
      "output": "false",
      "explanation": "Trees differ structurally."
    },
    "JAVASCRIPT": {
      "input": "[1,2,3]\n[1,2,3]",
      "output": "true",
      "explanation": "Both trees are identical."
    }
  },
  "constraints": "Number of nodes is between 0 and 100.",
  "testcases": [
    {
      "input": "[1,2,3]\n[1,2,3]",
      "output": "true"
    },
    {
      "input": "[1,2]\n[1,null,2]",
      "output": "false"
    },
    {
      "input": "[]\n[]",
      "output": "true"
    }
  ],
  "codeSnippets": {
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String t1 = sc.nextLine().trim();\n        String t2 = sc.nextLine().trim();\n\n        TreeNode root1 = buildTree(t1);\n        TreeNode root2 = buildTree(t2);\n\n        System.out.println(isSameTree(root1, root2));\n    }\n\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) { this.val = val; }\n    }\n\n    private static TreeNode buildTree(String data) {\n        if (data.equals(\"[]\")) return null;\n        data = data.substring(1, data.length() - 1).trim();\n        if (data.isEmpty()) return null;\n\n        String[] nodes = data.split(\",\");\n        Queue<TreeNode> queue = new LinkedList<>();\n        TreeNode root = new TreeNode(Integer.parseInt(nodes[0].trim()));\n        queue.offer(root);\n\n        int i = 1;\n        while (i < nodes.length) {\n            TreeNode current = queue.poll();\n\n            if (i < nodes.length && !nodes[i].trim().equals(\"null\")) {\n                TreeNode left = new TreeNode(Integer.parseInt(nodes[i].trim()));\n                current.left = left;\n                queue.offer(left);\n            }\n            i++;\n\n            if (i < nodes.length && !nodes[i].trim().equals(\"null\")) {\n                TreeNode right = new TreeNode(Integer.parseInt(nodes[i].trim()));\n                current.right = right;\n                queue.offer(right);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    private static boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;\n        if (p == null || q == null) return false;\n        if (p.val != q.val) return false;\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n}",
    
    "PYTHON": "import sys\nimport json\nfrom collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef build_tree(data):\n    if data == \"[]\":\n        return None\n    data = data[1:-1].strip()\n    if not data:\n        return None\n    nodes = [x.strip() for x in data.split(\",\")]\n    root = TreeNode(int(nodes[0]))\n    queue = deque([root])\n    i = 1\n    while i < len(nodes):\n        current = queue.popleft()\n        if i < len(nodes) and nodes[i] != 'null':\n            current.left = TreeNode(int(nodes[i]))\n            queue.append(current.left)\n        i += 1\n        if i < len(nodes) and nodes[i] != 'null':\n            current.right = TreeNode(int(nodes[i]))\n            queue.append(current.right)\n        i += 1\n    return root\n\ndef isSameTree(p, q):\n    if not p and not q:\n        return True\n    if not p or not q:\n        return False\n    if p.val != q.val:\n        return False\n    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)\n\nlines = sys.stdin.read().splitlines()\nt1 = lines[0]\nt2 = lines[1]\nroot1 = build_tree(t1)\nroot2 = build_tree(t2)\nprint(str(isSameTree(root1, root2)).lower())",
    
    "JAVASCRIPT": "const fs = require('fs');\n\n// Read input\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst t1 = input[0];\nconst t2 = input[1];\n\nclass TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction buildTree(data) {\n    if (data === '[]') return null;\n    let nodes = data.slice(1, -1).split(',').map(x => x.trim());\n    if (nodes.length === 0 || nodes[0] === '') return null;\n\n    let root = new TreeNode(parseInt(nodes[0]));\n    let queue = [root];\n    let i = 1;\n\n    while (i < nodes.length) {\n        let current = queue.shift();\n        if (i < nodes.length && nodes[i] !== 'null') {\n            current.left = new TreeNode(parseInt(nodes[i]));\n            queue.push(current.left);\n        }\n        i++;\n\n        if (i < nodes.length && nodes[i] !== 'null') {\n            current.right = new TreeNode(parseInt(nodes[i]));\n            queue.push(current.right);\n        }\n        i++;\n    }\n    return root;\n}\n\nfunction isSameTree(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q) return false;\n    if (p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n}\n\nconst root1 = buildTree(t1);\nconst root2 = buildTree(t2);\nconsole.log(isSameTree(root1, root2));"
  },
  "referenceSolutions": {
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String t1 = sc.nextLine().trim();\n        String t2 = sc.nextLine().trim();\n\n        TreeNode root1 = buildTree(t1);\n        TreeNode root2 = buildTree(t2);\n\n        System.out.println(isSameTree(root1, root2));\n    }\n\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) { this.val = val; }\n    }\n\n    private static TreeNode buildTree(String data) {\n        if (data.equals(\"[]\")) return null;\n        data = data.substring(1, data.length() - 1).trim();\n        if (data.isEmpty()) return null;\n\n        String[] nodes = data.split(\",\");\n        Queue<TreeNode> queue = new LinkedList<>();\n        TreeNode root = new TreeNode(Integer.parseInt(nodes[0].trim()));\n        queue.offer(root);\n\n        int i = 1;\n        while (i < nodes.length) {\n            TreeNode current = queue.poll();\n\n            if (i < nodes.length && !nodes[i].trim().equals(\"null\")) {\n                TreeNode left = new TreeNode(Integer.parseInt(nodes[i].trim()));\n                current.left = left;\n                queue.offer(left);\n            }\n            i++;\n\n            if (i < nodes.length && !nodes[i].trim().equals(\"null\")) {\n                TreeNode right = new TreeNode(Integer.parseInt(nodes[i].trim()));\n                current.right = right;\n                queue.offer(right);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    private static boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;\n        if (p == null || q == null) return false;\n        if (p.val != q.val) return false;\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n}",
    
    "PYTHON": "import sys\nimport json\nfrom collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef build_tree(data):\n    if data == \"[]\":\n        return None\n    data = data[1:-1].strip()\n    if not data:\n        return None\n    nodes = [x.strip() for x in data.split(\",\")]\n    root = TreeNode(int(nodes[0]))\n    queue = deque([root])\n    i = 1\n    while i < len(nodes):\n        current = queue.popleft()\n        if i < len(nodes) and nodes[i] != 'null':\n            current.left = TreeNode(int(nodes[i]))\n            queue.append(current.left)\n        i += 1\n        if i < len(nodes) and nodes[i] != 'null':\n            current.right = TreeNode(int(nodes[i]))\n            queue.append(current.right)\n        i += 1\n    return root\n\ndef isSameTree(p, q):\n    if not p and not q:\n        return True\n    if not p or not q:\n        return False\n    if p.val != q.val:\n        return False\n    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)\n\nlines = sys.stdin.read().splitlines()\nt1 = lines[0]\nt2 = lines[1]\nroot1 = build_tree(t1)\nroot2 = build_tree(t2)\nprint(str(isSameTree(root1, root2)).lower())",
    
    "JAVASCRIPT": "const fs = require('fs');\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst t1 = input[0];\nconst t2 = input[1];\n\nclass TreeNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction buildTree(data) {\n    if (data === '[]') return null;\n    let nodes = data.slice(1, -1).split(',').map(x => x.trim());\n    if (nodes.length === 0 || nodes[0] === '') return null;\n\n    let root = new TreeNode(parseInt(nodes[0]));\n    let queue = [root];\n    let i = 1;\n\n    while (i < nodes.length) {\n        let current = queue.shift();\n        if (i < nodes.length && nodes[i] !== 'null') {\n            current.left = new TreeNode(parseInt(nodes[i]));\n            queue.push(current.left);\n        }\n        i++;\n\n        if (i < nodes.length && nodes[i] !== 'null') {\n            current.right = new TreeNode(parseInt(nodes[i]));\n            queue.push(current.right);\n        }\n        i++;\n    }\n    return root;\n}\n\nfunction isSameTree(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q) return false;\n    if (p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n}\n\nconst root1 = buildTree(t1);\nconst root2 = buildTree(t2);\nconsole.log(isSameTree(root1, root2));"
  }
}


Question - 9.........................................

{
    "title": "Fibonacci Number",
    "description": "Given an integer n, return the nth Fibonacci number. The Fibonacci sequence is defined as: fib(0) = 0, fib(1) = 1, and for n > 1, fib(n) = fib(n-1) + fib(n-2).",
    "difficulty": "EASY",
    "tags": [
        "dynamic programming",
        "recursion",
        "math"
    ],
    "examples": {
        "PYTHON": {
            "input": "5",
            "output": "5",
            "explanation": "The Fibonacci sequence is 0, 1, 1, 2, 3, 5... So, the 5th Fibonacci number is 5."
        },
        "JAVASCRIPT": {
            "input": "10",
            "output": "55",
            "explanation": "The 10th Fibonacci number is 55."
        }
    },
    "constraints": "0 ≤ n ≤ 30",
    "testcases": [
        {
            "input": "0",
            "output": "0"
        },
        {
            "input": "1",
            "output": "1"
        },
        {
            "input": "7",
            "output": "13"
        },
        {
            "input": "20",
            "output": "6765"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function fib(n) {\n    // Your implementation here\n}\n\n// Input and output handling",
        "PYTHON": "def fib(n):\n    # Your implementation here\n\n# Input and output handling",
        "JAVA": "class Solution {\n    public int fib(int n) {\n        // Your implementation here\n    }\n\n    // Additional helper methods if needed\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function fib(n) {\n    if (n <= 1) return n;\n    let a = 0, b = 1;\n    for (let i = 2; i <= n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return b;\n}\n\nconst fs = require('fs');\nconst input = parseInt(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(fib(input));",
        "PYTHON": "def fib(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n\nimport sys\nn = int(sys.stdin.read().strip())\nprint(fib(n))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int temp = b;\n            b = a + b;\n            a = temp;\n        }\n        return b;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fib(n));\n    }\n}"
    }
}



Question - 10.................................................

{
    "title": "Beautiful Arrangement",
    "description": "Suppose you have n integers from 1 to n. A permutation of those n integers is considered beautiful if for every position i (1 <= i <= n), either:\n- The number at the ith position is divisible by i, or\n- i is divisible by the number at the ith position.\nGiven n, return the number of the beautiful arrangements that you can construct.",
    "difficulty": "MEDIUM",
    "tags": [
        "backtracking",
        "math",
        "dfs"
    ],
    "examples": {
        "PYTHON": {
            "input": "2",
            "output": "2",
            "explanation": "The two beautiful arrangements are [1, 2] and [2, 1]."
        },
        "JAVASCRIPT": {
            "input": "3",
            "output": "3",
            "explanation": "The beautiful arrangements are [1,2,3], [2,1,3], and [3,2,1]."
        }
    },
    "constraints": "1 <= n <= 15",
    "testcases": [
        {
            "input": "1",
            "output": "1"
        },
        {
            "input": "2",
            "output": "2"
        },
        {
            "input": "4",
            "output": "8"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function countArrangement(n) {\n    // Implementation here\n}\n\n// Input handling",
        "PYTHON": "def countArrangement(n):\n    # Implementation here\n\n# Input handling",
        "JAVA": "class Solution {\n    public int countArrangement(int n) {\n        // Implementation here\n    }\n\n    // Additional helper methods\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function countArrangement(n) {\n    let count = 0;\n    const used = new Array(n + 1).fill(false);\n\n    function backtrack(pos) {\n        if (pos > n) {\n            count++;\n            return;\n        }\n        for (let num = 1; num <= n; num++) {\n            if (!used[num] && (num % pos === 0 || pos % num === 0)) {\n                used[num] = true;\n                backtrack(pos + 1);\n                used[num] = false;\n            }\n        }\n    }\n\n    backtrack(1);\n    return count;\n}\n\nconst fs = require('fs');\nconst input = parseInt(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(countArrangement(input));",
        "PYTHON": "def countArrangement(n):\n    count = 0\n    used = [False] * (n + 1)\n\n    def backtrack(pos):\n        nonlocal count\n        if pos > n:\n            count += 1\n            return\n        for num in range(1, n + 1):\n            if not used[num] and (num % pos == 0 or pos % num == 0):\n                used[num] = True\n                backtrack(pos + 1)\n                used[num] = False\n\n    backtrack(1)\n    return count\n\nimport sys\nn = int(sys.stdin.read().strip())\nprint(countArrangement(n))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    private static int count = 0;\n    private static boolean[] used;\n    private static int n;\n\n    public static void backtrack(int pos) {\n        if (pos > n) {\n            count++;\n            return;\n        }\n        for (int num = 1; num <= n; num++) {\n            if (!used[num] && (num % pos == 0 || pos % num == 0)) {\n                used[num] = true;\n                backtrack(pos + 1);\n                used[num] = false;\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        n = sc.nextInt();\n        used = new boolean[n + 1];\n        count = 0;\n        backtrack(1);\n        System.out.println(count);\n    }\n}"
    }
}



Question - 11 ...........................................

{
    "title": "Best Time to Buy and Sell Stock",
    "description": "You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "difficulty": "EASY",
    "tags": [
        "array",
        "dynamic programming",
        "greedy"
    ],
    "examples": {
        "PYTHON": {
            "input": "[7,1,5,3,6,4]",
            "output": "5",
            "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
        },
        "JAVASCRIPT": {
            "input": "[7,6,4,3,1]",
            "output": "0",
            "explanation": "No transaction is done, profit = 0."
        }
    },
    "constraints": "1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4",
    "testcases": [
        {
            "input": "[7,1,5,3,6,4]",
            "output": "5"
        },
        {
            "input": "[7,6,4,3,1]",
            "output": "0"
        },
        {
            "input": "[1,2]",
            "output": "1"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function maxProfit(prices) {\n    let minPrice = Infinity;\n    let maxProfit = 0;\n    for (let price of prices) {\n        if (price < minPrice) minPrice = price;\n        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n    }\n    return maxProfit;\n}\n\n// Input handling\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst prices = JSON.parse(input);\nconsole.log(maxProfit(prices));",
        "PYTHON": "def maxProfit(prices):\n    min_price = float('inf')\n    max_profit = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        elif price - min_price > max_profit:\n            max_profit = price - min_price\n    return max_profit\n\nimport sys\nprices = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(maxProfit(prices))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int price : prices) {\n            if (price < minPrice) {\n                minPrice = price;\n            } else if (price - minPrice > maxProfit) {\n                maxProfit = price - minPrice;\n            }\n        }\n        return maxProfit;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] prices = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) prices[i] = Integer.parseInt(tokens[i]);\n        System.out.println(maxProfit(prices));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function maxProfit(prices) {\n    let minPrice = Infinity;\n    let maxProfit = 0;\n    for (let price of prices) {\n        if (price < minPrice) minPrice = price;\n        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n    }\n    return maxProfit;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst prices = JSON.parse(input);\nconsole.log(maxProfit(prices));",
        "PYTHON": "def maxProfit(prices):\n    min_price = float('inf')\n    max_profit = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        elif price - min_price > max_profit:\n            max_profit = price - min_price\n    return max_profit\n\nimport sys\nprices = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(maxProfit(prices))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int price : prices) {\n            if (price < minPrice) {\n                minPrice = price;\n            } else if (price - minPrice > maxProfit) {\n                maxProfit = price - minPrice;\n            }\n        }\n        return maxProfit;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] prices = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) prices[i] = Integer.parseInt(tokens[i]);\n        System.out.println(maxProfit(prices));\n    }\n}"
    }
}


Question -12..................................

{
    "title": "Best Time to Buy and Sell Stock II",
    "description": "You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). However, you must sell the stock before you buy again. Return the maximum profit you can achieve.",
    "difficulty": "EASY",
    "tags": [
        "array",
        "greedy",
        "dynamic programming"
    ],
    "examples": {
        "PYTHON": {
            "input": "[7,1,5,3,6,4]",
            "output": "7",
            "explanation": "Buy on day 2 (price = 1), sell on day 3 (price = 5), profit = 4.\nThen buy on day 4 (price = 3), sell on day 5 (price = 6), profit = 3.\nTotal profit = 4 + 3 = 7."
        },
        "JAVASCRIPT": {
            "input": "[1,2,3,4,5]",
            "output": "4",
            "explanation": "Buy on day 1 and sell on day 5 for a profit of 4 (prices continuously increase)."
        }
    },
    "constraints": "1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4",
    "testcases": [
        {
            "input": "[7,1,5,3,6,4]",
            "output": "7"
        },
        {
            "input": "[1,2,3,4,5]",
            "output": "4"
        },
        {
            "input": "[7,6,4,3,1]",
            "output": "0"
        }
    ],
    "codeSnippets": {
        "JAVASCRIPT": "function maxProfit(prices) {\n    // TODO: implement the solution\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst prices = JSON.parse(input);\nconsole.log(maxProfit(prices));",
        "PYTHON": "def maxProfit(prices):\n    # TODO: implement the solution\n    pass\n\nimport sys\nprices = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(maxProfit(prices))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        // TODO: implement the solution\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] prices = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) prices[i] = Integer.parseInt(tokens[i]);\n        System.out.println(maxProfit(prices));\n    }\n}"
    },
    "referenceSolutions": {
        "JAVASCRIPT": "function maxProfit(prices) {\n    let profit = 0;\n    for (let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i - 1]) {\n            profit += prices[i] - prices[i - 1];\n        }\n    }\n    return profit;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst prices = JSON.parse(input);\nconsole.log(maxProfit(prices));",
        "PYTHON": "def maxProfit(prices):\n    profit = 0\n    for i in range(1, len(prices)):\n        if prices[i] > prices[i - 1]:\n            profit += prices[i] - prices[i - 1]\n    return profit\n\nimport sys\nprices = list(map(int, sys.stdin.read().strip()[1:-1].split(',')))\nprint(maxProfit(prices))",
        "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        int profit = 0;\n        for (int i = 1; i < prices.length; i++) {\n            if (prices[i] > prices[i - 1]) {\n                profit += prices[i] - prices[i - 1];\n            }\n        }\n        return profit;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] tokens = input.substring(1, input.length() - 1).split(\",\");\n        int[] prices = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) prices[i] = Integer.parseInt(tokens[i]);\n        System.out.println(maxProfit(prices));\n    }\n}"
    }
}



Question -13................................................

{
  "title": "Maximal Square",
  "description": "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
  "difficulty": "MEDIUM",
  "tags": [
    "dynamic programming",
    "matrix"
  ],
  "examples": {
    "PYTHON": {
      "input": "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
      "output": "4",
      "explanation": "The largest square has a size of 2, and its area is 2 * 2 = 4."
    },
    "JAVASCRIPT": {
      "input": "[[\"0\",\"1\"],[\"1\",\"0\"]]",
      "output": "1",
      "explanation": "Each '1' is a 1x1 square, so the maximal area is 1."
    }
  },
  "constraints": "m == matrix.length, n == matrix[i].length, 1 <= m, n <= 300, matrix[i][j] is '0' or '1'.",
  "testcases": [
    {
      "input": "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
      "output": "4"
    },
    {
      "input": "[[\"0\",\"1\"],[\"1\",\"0\"]]",
      "output": "1"
    },
    {
      "input": "[[\"0\"]]",
      "output": "0"
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "function maximalSquare(matrix) {\n    // TODO: implement the solution\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst matrix = JSON.parse(input);\nconsole.log(maximalSquare(matrix));",
    "PYTHON": "def maximalSquare(matrix):\n    # TODO: implement the solution\n    pass\n\nimport sys\nimport json\nmatrix = json.loads(sys.stdin.read().strip())\nprint(maximalSquare(matrix))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static int maximalSquare(char[][] matrix) {\n        // TODO: implement the solution\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.useDelimiter(\"\\\\A\").next().trim();\n        input = input.replaceAll(\"\\\"\", \"\");\n        String[] rows = input.substring(2, input.length() - 2).split(\"\\\\],\\\\[\");\n        char[][] matrix = new char[rows.length][];\n        for (int i = 0; i < rows.length; i++) {\n            String[] cols = rows[i].split(\",\");\n            matrix[i] = new char[cols.length];\n            for (int j = 0; j < cols.length; j++) {\n                matrix[i][j] = cols[j].charAt(0);\n            }\n        }\n        System.out.println(maximalSquare(matrix));\n    }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "function maximalSquare(matrix) {\n    const m = matrix.length;\n    const n = matrix[0].length;\n    let maxSide = 0;\n    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));\n    for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n            if (matrix[i - 1][j - 1] === '1') {\n                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n                maxSide = Math.max(maxSide, dp[i][j]);\n            }\n        }\n    }\n    return maxSide * maxSide;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst matrix = JSON.parse(input);\nconsole.log(maximalSquare(matrix));",
    "PYTHON": "def maximalSquare(matrix):\n    if not matrix or not matrix[0]:\n        return 0\n    rows, cols = len(matrix), len(matrix[0])\n    dp = [[0] * (cols + 1) for _ in range(rows + 1)]\n    max_side = 0\n    for i in range(1, rows + 1):\n        for j in range(1, cols + 1):\n            if matrix[i - 1][j - 1] == '1':\n                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1\n                max_side = max(max_side, dp[i][j])\n    return max_side * max_side\n\nimport sys\nimport json\nmatrix = json.loads(sys.stdin.read().strip())\nprint(maximalSquare(matrix))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static int maximalSquare(char[][] matrix) {\n        if (matrix.length == 0 || matrix[0].length == 0) return 0;\n        int rows = matrix.length, cols = matrix[0].length;\n        int[][] dp = new int[rows + 1][cols + 1];\n        int maxSide = 0;\n        for (int i = 1; i <= rows; i++) {\n            for (int j = 1; j <= cols; j++) {\n                if (matrix[i - 1][j - 1] == '1') {\n                    dp[i][j] = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;\n                    maxSide = Math.max(maxSide, dp[i][j]);\n                }\n            }\n        }\n        return maxSide * maxSide;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.useDelimiter(\"\\\\A\").next().trim();\n        input = input.replaceAll(\"\\\"\", \"\");\n        String[] rows = input.substring(2, input.length() - 2).split(\"\\\\],\\\\[\");\n        char[][] matrix = new char[rows.length][];\n        for (int i = 0; i < rows.length; i++) {\n            String[] cols = rows[i].split(\",\");\n            matrix[i] = new char[cols.length];\n            for (int j = 0; j < cols.length; j++) {\n                matrix[i][j] = cols[j].charAt(0);\n            }\n        }\n        System.out.println(maximalSquare(matrix));\n    }\n}"
  }
}


Question -14.......................................................

{
  "title": "Search in Rotated Sorted Array",
  "description": "There is an integer array nums sorted in ascending order (with distinct values), which is rotated at an unknown pivot index. Given the array nums and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
  "difficulty": "MEDIUM",
  "tags": [
    "array",
    "binary search"
  ],
  "examples": {
    "PYTHON": {
      "input": "[4,5,6,7,0,1,2]\n0",
      "output": "4",
      "explanation": "Target 0 is found at index 4."
    },
    "JAVASCRIPT": {
      "input": "[4,5,6,7,0,1,2]\n3",
      "output": "-1",
      "explanation": "Target 3 is not in the array, so return -1."
    }
  },
  "constraints": "1 <= nums.length <= 5000, -10^4 <= nums[i] <= 10^4, all values of nums are unique, nums is rotated at some pivot, -10^4 <= target <= 10^4",
  "testcases": [
    {
      "input": "[4,5,6,7,0,1,2]\n0",
      "output": "4"
    },
    {
      "input": "[4,5,6,7,0,1,2]\n3",
      "output": "-1"
    },
    {
      "input": "[1]\n0",
      "output": "-1"
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "function search(nums, target) {\n    // Starter code here\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst target = parseInt(input[1], 10);\nconsole.log(search(nums, target));",
    "PYTHON": "def search(nums, target):\n    # Starter code here\n    pass\n\nimport sys\ninput_data = sys.stdin.read().strip().split('\\n')\nnums = list(map(int, input_data[0][1:-1].split(',')))\ntarget = int(input_data[1])\nprint(search(nums, target))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static int search(int[] nums, int target) {\n        // Starter code here\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String numsStr = sc.nextLine().trim();\n        String targetStr = sc.nextLine().trim();\n        String[] tokens = numsStr.substring(1, numsStr.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        int target = Integer.parseInt(targetStr);\n        System.out.println(search(nums, target));\n    }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[left] <= nums[mid]) {\n            if (target >= nums[left] && target < nums[mid]) {\n                right = mid - 1;\n            } else {\n                left = mid + 1;\n            }\n        } else {\n            if (target > nums[mid] && target <= nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n    }\n    return -1;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst target = parseInt(input[1], 10);\nconsole.log(search(nums, target));",
    "PYTHON": "def search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]:\n                right = mid - 1\n            else:\n                left = mid + 1\n        else:\n            if nums[mid] < target <= nums[right]:\n                left = mid + 1\n            else:\n                right = mid - 1\n    return -1\n\nimport sys\ninput_data = sys.stdin.read().strip().split('\\n')\nnums = list(map(int, input_data[0][1:-1].split(',')))\ntarget = int(input_data[1])\nprint(search(nums, target))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    public static int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[left] <= nums[mid]) {\n                if (nums[left] <= target && target < nums[mid]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            } else {\n                if (nums[mid] < target && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String numsStr = sc.nextLine().trim();\n        String targetStr = sc.nextLine().trim();\n        String[] tokens = numsStr.substring(1, numsStr.length() - 1).split(\",\");\n        int[] nums = new int[tokens.length];\n        for (int i = 0; i < tokens.length; i++) nums[i] = Integer.parseInt(tokens[i]);\n        int target = Integer.parseInt(targetStr);\n        System.out.println(search(nums, target));\n    }\n}"
  }
}


Question -15 .....................................................

{
  "title": "Diameter of Binary Tree",
  "description": "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
  "difficulty": "EASY",
  "tags": [
    "tree",
    "depth-first search",
    "binary tree"
  ],
  "examples": {
    "PYTHON": {
      "input": "[1,2,3,4,5]",
      "output": "3",
      "explanation": "The longest path is [4,2,1,3] or [5,2,1,3], length is 3 edges."
    },
    "JAVASCRIPT": {
      "input": "[1,2]",
      "output": "1",
      "explanation": "The longest path is [2,1], length is 1 edge."
    }
  },
  "constraints": "The number of nodes in the tree is in the range [1, 10^4]. -100 <= Node.val <= 100",
  "testcases": [
    {
      "input": "[1,2,3,4,5]",
      "output": "3"
    },
    {
      "input": "[1,null,2]",
      "output": "1"
    },
    {
      "input": "[1]",
      "output": "0"
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "function diameterOfBinaryTree(root) {\n    // Starter code\n}\n\n// Tree node definition for reference\nfunction TreeNode(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst root = JSON.parse(input);\n\n// Helper to build tree from array (for testing)\nfunction buildTree(arr, i = 0) {\n    if (i >= arr.length || arr[i] === null) return null;\n    const node = new TreeNode(arr[i]);\n    node.left = buildTree(arr, 2 * i + 1);\n    node.right = buildTree(arr, 2 * i + 2);\n    return node;\n}\n\nconst treeRoot = buildTree(root);\nconsole.log(diameterOfBinaryTree(treeRoot));",
    "PYTHON": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef diameterOfBinaryTree(root):\n    # Starter code\n    pass\n\nimport sys\nimport json\n\ninput_data = sys.stdin.read().strip()\narr = json.loads(input_data)\n\n# Helper to build tree from list\n\ndef buildTree(arr, i=0):\n    if i >= len(arr) or arr[i] is None:\n        return None\n    node = TreeNode(arr[i])\n    node.left = buildTree(arr, 2 * i + 1)\n    node.right = buildTree(arr, 2 * i + 2)\n    return node\n\nroot = buildTree(arr)\nprint(diameterOfBinaryTree(root))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) {\n            this.val = val;\n            this.left = null;\n            this.right = null;\n        }\n    }\n\n    public static int diameterOfBinaryTree(TreeNode root) {\n        // Starter code\n        return 0;\n    }\n\n    // Helper to build tree from array\n    public static TreeNode buildTree(Integer[] arr, int i) {\n        if (i >= arr.length || arr[i] == null) return null;\n        TreeNode node = new TreeNode(arr[i]);\n        node.left = buildTree(arr, 2 * i + 1);\n        node.right = buildTree(arr, 2 * i + 2);\n        return node;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        input = input.substring(1, input.length() - 1);\n        String[] tokens = input.split(\",\");\n        Integer[] arr = new Integer[tokens.length];\n        for (int i = 0; i < tokens.length; i++) {\n            if (tokens[i].equals(\"null\")) arr[i] = null;\n            else arr[i] = Integer.parseInt(tokens[i].trim());\n        }\n        TreeNode root = buildTree(arr, 0);\n        System.out.println(diameterOfBinaryTree(root));\n    }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "function diameterOfBinaryTree(root) {\n    let diameter = 0;\n    function depth(node) {\n        if (!node) return 0;\n        const left = depth(node.left);\n        const right = depth(node.right);\n        diameter = Math.max(diameter, left + right);\n        return Math.max(left, right) + 1;\n    }\n    depth(root);\n    return diameter;\n}\n\nfunction TreeNode(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst root = JSON.parse(input);\n\nfunction buildTree(arr, i = 0) {\n    if (i >= arr.length || arr[i] === null) return null;\n    const node = new TreeNode(arr[i]);\n    node.left = buildTree(arr, 2 * i + 1);\n    node.right = buildTree(arr, 2 * i + 2);\n    return node;\n}\n\nconst treeRoot = buildTree(root);\nconsole.log(diameterOfBinaryTree(treeRoot));",
    "PYTHON": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef diameterOfBinaryTree(root):\n    diameter = 0\n    def depth(node):\n        nonlocal diameter\n        if not node:\n            return 0\n        left = depth(node.left)\n        right = depth(node.right)\n        diameter = max(diameter, left + right)\n        return max(left, right) + 1\n    depth(root)\n    return diameter\n\nimport sys\nimport json\ninput_data = sys.stdin.read().strip()\narr = json.loads(input_data)\n\ndef buildTree(arr, i=0):\n    if i >= len(arr) or arr[i] is None:\n        return None\n    node = TreeNode(arr[i])\n    node.left = buildTree(arr, 2 * i + 1)\n    node.right = buildTree(arr, 2 * i + 2)\n    return node\n\nroot = buildTree(arr)\nprint(diameterOfBinaryTree(root))",
    "JAVA": "import java.util.*;\n\npublic class Main {\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) {\n            this.val = val;\n            this.left = null;\n            this.right = null;\n        }\n    }\n\n    static int diameter = 0;\n\n    public static int diameterOfBinaryTree(TreeNode root) {\n        diameter = 0;\n        depth(root);\n        return diameter;\n    }\n\n    private static int depth(TreeNode node) {\n        if (node == null) return 0;\n        int left = depth(node.left);\n        int right = depth(node.right);\n        diameter = Math.max(diameter, left + right);\n        return Math.max(left, right) + 1;\n    }\n\n    public static TreeNode buildTree(Integer[] arr, int i) {\n        if (i >= arr.length || arr[i] == null) return null;\n        TreeNode node = new TreeNode(arr[i]);\n        node.left = buildTree(arr, 2 * i + 1);\n        node.right = buildTree(arr, 2 * i + 2);\n        return node;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        input = input.substring(1, input.length() - 1);\n        String[] tokens = input.split(\",\");\n        Integer[] arr = new Integer[tokens.length];\n        for (int i = 0; i < tokens.length; i++) {\n            if (tokens[i].equals(\"null\")) arr[i] = null;\n            else arr[i] = Integer.parseInt(tokens[i].trim());\n        }\n        TreeNode root = buildTree(arr, 0);\n        System.out.println(diameterOfBinaryTree(root));\n    }\n}"
  }
}



Question - 16.........................................


{
  "title": "To Lower Case",
  "description": "Given a string `s`, return the string after replacing all uppercase letters with their lowercase equivalents.",
  "difficulty": "EASY",
  "tags": [
    "string",
    "implementation"
  ],
  "examples": {
    "PYTHON": {
      "input": "\"Hello\"",
      "output": "\"hello\"",
      "explanation": "The input string 'Hello' is converted to 'hello'."
    },
    "JAVASCRIPT": {
      "input": "\"LOVELY\"",
      "output": "\"lovely\"",
      "explanation": "The input string 'LOVELY' is converted to 'lovely'."
    }
  },
  "constraints": "- 1 ≤ s.length ≤ 100\n- `s` consists of printable ASCII characters.",
  "testcases": [
    {
      "input": "\"World\"",
      "output": "\"world\""
    },
    {
      "input": "\"LeEtCoDe\"",
      "output": "\"leetcode\""
    },
    {
      "input": "\"abcXYZ\"",
      "output": "\"abcxyz\""
    }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "function toLowerCase(s) {\n    // Your code here\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(toLowerCase(input));",
    "PYTHON": "def to_lower_case(s):\n    # Your code here\n\nimport sys\ns = sys.stdin.read().strip()\nprint(to_lower_case(s))",
    "JAVA": "import java.util.*;\npublic class Main {\n    public static String toLowerCase(String s) {\n        // Your code here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(toLowerCase(s));\n    }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "function toLowerCase(s) {\n    return s.toLowerCase();\n}\n\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(toLowerCase(input));",
    "PYTHON": "def to_lower_case(s):\n    return s.lower()\n\nimport sys\ns = sys.stdin.read().strip()\nprint(to_lower_case(s))",
    "JAVA": "import java.util.*;\npublic class Main {\n    public static String toLowerCase(String s) {\n        return s.toLowerCase();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(toLowerCase(s));\n    }\n}"
  }
}
