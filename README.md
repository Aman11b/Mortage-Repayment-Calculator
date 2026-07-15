# 🏠 Mortgage Repayment Calculator

A modern, responsive mortgage repayment calculator built with **React**, **TypeScript**, **React Hook Form**, and **Tailwind CSS v4**.

This project is a solution to the **Frontend Mentor Mortgage Repayment Calculator Challenge**, focusing on form validation, financial calculations, responsive UI design, and reusable React components.

---

## 📸 Preview

![Project Preview](./preview.jpg)

---

## ✨ Features

- 📱 Fully responsive design
- 🧮 Calculate **Repayment** and **Interest Only** mortgages
- ✅ Form validation with **React Hook Form**
- 💰 Currency formatting using the **Intl API**
- 🔄 Reset form with **Clear All**
- 📊 Dynamic monthly and total repayment calculations
- 🎨 Styled with **Tailwind CSS v4**
- ⚛️ Built with reusable React components
- 🔒 Strong type safety using **TypeScript**

---

## 🛠️ Built With

- React
- TypeScript
- Vite
- React Hook Form
- Tailwind CSS v4

---

## 📚 What I Learned

Working on this project helped me strengthen several frontend development concepts, including:

- Creating reusable form components
- Managing form state with React Hook Form
- Building custom radio button components
- Implementing financial calculation formulas
- Formatting currencies with the JavaScript Intl API
- Writing type-safe React applications with TypeScript
- Designing responsive layouts using Tailwind CSS
- Separating business logic from UI by using utility functions

---

## 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── layout/
│   │   ├── Main.tsx
│   │   ├── Result.tsx
│   │   └── EmptyResult.tsx
│   │
│   └── ui/
│       ├── InputField.tsx
│       └── RadioOptions.tsx
│
├── types/
│   └── mortgage.ts
│
├── utils/
│   ├── mortgage.ts
│   └── formatCurrency.ts
│
├── App.tsx
└── main.tsx
```

---

## 🧮 Mortgage Calculation

### Repayment Mortgage

The monthly repayment is calculated using the standard amortization formula:

```text
M = P × r × (1 + r)^n
    -------------------
     (1 + r)^n − 1
```

Where:

- **P** = Loan amount
- **r** = Monthly interest rate
- **n** = Total number of monthly payments

---

### Interest Only Mortgage

```text
Monthly Payment = Loan Amount × Monthly Interest Rate
```

The total repayment is then calculated as:

```text
Monthly Payment × Number of Months

---

## 🎯 Future Improvements

- Add unit tests for mortgage calculations
- Improve accessibility (ARIA labels and keyboard navigation)
- Add animations for result transitions
- Support multiple currencies
- Add dark mode
- Include printable mortgage summaries

---

## 🙏 Acknowledgements

- Challenge by **Frontend Mentor**
- Built with **React**, **TypeScript**, and **Tailwind CSS**
```
