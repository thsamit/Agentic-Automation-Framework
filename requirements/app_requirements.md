# Application Under Test

- Target URL: https://www.saucedemo.com/
- Module: User Authentication (Login Flow)

# Test Credentials

- Valid Users: `standard_user`, `problem_user`, `performance_glitch_user`
- Locked Out User: `locked_out_user`
- Password (All Users): `secret_sauce`

# Functional Requirements

## 1. Successful Login

- Navigating to `/` displays the login form (Username, Password fields, Login button).
- Entering valid credentials (`standard_user` / `secret_sauce`) and clicking Login redirects the user to `/inventory.html`[cite: 2].

## 2. Failed Login - Locked Out User

- Entering `locked_out_user` and `secret_sauce` displays an error banner containing:  
  `Epic sadface: Sorry, this user has been locked out.`[cite: 2]

## 3. Failed Login - Invalid Credentials

- Entering an invalid username or password displays an error banner containing:  
  `Epic sadface: Username and password do not match any user in this service`[cite: 2]

## 4. Validation - Blank Fields

- Submitting the login form with empty fields displays an error banner containing:  
  `Epic sadface: Username is required`[cite: 2]
