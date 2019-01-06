# Complex conditions

## Multiple conditions — AND

Show different welcome screens depending on the role of a user:

![lo-fi wireframes of three screens: Sign up and 2 different welcome screens](./images/condition-complex-wireframes-1.png)

You need one variable to store the state of user's authentication:

```js
data: {
  isUserLoggedIn: false
}
```

Now you can create conditions to show Sign up screen when a user is not logged in, and show welcome screen when she is:

```vue
<div v-if="isUserLoggedIn">
  Sign up screen
</div>
<div v-if="isUserLoggedIn">
  Welcome, shopper
</div>
<div v-if="isUserLoggedIn">
  Welcome, merchant
</div>
```

The problem you face now is that both welcome screens will be shown for a logged in user. To fix that you need a variable to store the role of a user:

```js
data: {
  isUserLoggedIn: false,
  userRole: 'shopper'
}
```

...As you've learnt from [equality](equality.md)... The condition to show shopper's welcome screen is `role === 'shopper'` and merchant's is `role === 'merchant'`. To combine these conditions with the already existing ones you need **AND** operator writen as **&&**:

```vue
<div v-if="isUserLoggedIn">
  Sign up screen
</div>
<div v-if="isUserLoggedIn && userRole === 'shopper'">
  Welcome, shopper
</div>
<div v-if="isUserLoggedIn && userRole === 'merchant'">
  Welcome, merchant
</div>
```

The condition for the shopper, for example, can be read as “show the container only if `isUserLoggedIn` is true AND `userRole` is 'shopper'”. Now a user will not see both welcome screen, but only the one for a role she chose.

#### 👐 Hands-on

1. Download the [sample file](./../../../course-files/interaction-basics/conditionals-equality-1.html.zip) and open it in Chrome.
2. Use radio buttons on Sign up screen to switch roles
3. Change authentication state in Vue dev tools to see different welcome screens

> gif

## Either of conditions — OR

## Complex combinations
