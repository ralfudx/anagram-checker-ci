# 🧩 Anagram Checker CI

A simple JavaScript utility for determining whether two strings are **anagrams** — i.e., contain the same characters with the same frequencies, regardless of order.  
This project includes a **Jest test suite** and a **GitHub Actions CI workflow** that automatically validates the solution on every push and pull request.

---

## 🚀 Features

- ✅ Check if two strings are anagrams  
- ✅ Supports case-sensitive or case-insensitive comparison
- ✅ Includes unit tests with **Jest**
- ✅ Continuous Integration with **GitHub Actions**
- ✅ Lightweight and easy to extend

---

## 🧰 Project Structure
```
anagram-checker-ci/
│
├── isAnagram.js           # Core implementation
├── isAnagram.test.js      # Jest test suite
├── package.json           # Project configuration
├── README.md              # Project documentation
└── .github/
    └── workflows/
        └── ci.yml         # GitHub Actions CI workflow
```

---

## 🧠 Function Definition

```js
export function isAnagram(a, b /*, options */) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const sortString = (str) => str.split('').sort().join('');
    return sortString(a) === sortString(b);
}
```

---

## 💡 Example Usage
```js
import { isAnagram } from './isAnagram.js';

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false
```

---

## ⚙️ Installation

1. Clone this repository
```
git clone https://github.com/ralfudx/anagram-checker-ci.git

cd anagram-checker-ci
```

2. Install dependencies
```
npm install
```

---

## 🧪 Running Tests

Run the full Jest test suite locally:
```
npm test
```

---

## 🔁 Continuous Integration

This project includes a GitHub Actions workflow located at: `.github/workflows/ci.yml`

The workflow automatically:
- Installs dependencies
- Runs Jest tests
- Validates code on every push and pull request

---

## 🧩 Author

#### Raphael Edwards
Senior Software Quality & Test Automation Engineer  
💼 Passionate about automation, CI/CD, and scalable QA solutions.

---

## 🛠 License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute it as needed.
