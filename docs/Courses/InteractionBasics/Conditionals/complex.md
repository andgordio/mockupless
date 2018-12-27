# Complex conditions

## AND

Show onboarding in first login:

> UIs

you need two variables for conditions:

```js
data: {
  isUserLoggedIn: false,
  didUserSeeOnboarding: false,
}
```
in your condition you need to combine them with operator AND:

```html
<div v-if="isUserLoggedIn && !didUserSeeOnboarding">
  <!-- Onboarding content -->
</div>
```
can be read as show container if both conditions are true. 

newsfeed also needs two conditions: a user must be logged in and saw the onboarding. Full version:

```html
<div v-if="!isUserLoggedIn">
  <!-- Welcome content -->
</div>
<div v-if="isUserLoggedIn && !didUserSeeOnboarding">
  <!-- Onboarding content -->
</div>
<div v-if="isUserLoggedIn && didUserSeeOnboarding">
  <!-- Newsfeed content -->
</div>
```

try yourself: download, you start with welcome, simulate user successfully log in in dev tools, now you see welcome

> gif with dev tools