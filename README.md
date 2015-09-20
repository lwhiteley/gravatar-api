gravatar-img
===============

Node module to consume images and profiles from gravatar.

nodejs-gravatar makes it easy to build gravatar image url's to access a user's gravatar directly.


To Install
----------

Using node package manager

#### Example
```javascript
npm install --save gravatar-img
```

To Use
------

Simply add the following require statement to import the module and then call the imageUrl method, passing the email address of the user to generate a gravatar URL.

#### Example
```javascript
var gravatar = require('gravatar-img');
newUser.avatar = gravatar.imageUrl('test@gmail.com');
```


You can also specify the size of the image with the following (or any valid gravatar option)

#### Example
```javascript
newUser.avatar = gravatar.imageUrl('test@gmail.com', { "size": "200" });
```

A valid size is between 1 - 2048.

For more options, see [gravatar documentation](https://en.gravatar.com/site/implement/images/)

### Secure Endpoint

You can specify the retrieving the secure version of the URL by passing a third `BOOLEAN` parameter 

#### Example
```javascript
newUser.avatar = gravatar.imageUrl('test@gmail.com', { "size": "200" }, true);
```

### Notes
- compatible with react-native

### Credits 
- [nodejs-gravatar](https://www.npmjs.com/package/nodejs-gravatar)

