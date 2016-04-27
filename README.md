# mail-support
[![Build Status](https://travis-ci.org/pedroparra/mail-support.svg?branch=master)](https://travis-ci.org/pedroparra/mail-support)

Check css support for the emails clients

**Wait stable version (v0.2.0) for install.**

## Clients checked

- Android 4 (Gmail)
- Apple Mail 6.5
- Gmail (Web)
- iPhone iOS 7/iPad
- Outlook 2007/10/13
- Outlook 03/Express/Mail
- Outlook.com
- Yahoo! Mail


## Example

```js

import mailSupport from 'mail-support'
const testMailSupport = mailSupport('path-to-css/style.css')

```

## Response

- ok
- fail
- info: support only if ...
- warning: no css property found

```json

[
  {
    "line":2,
    "property":"background-size",
    "clients":{
      "android":{
        "test":"info",
        "info":"image not stretched"
      },
      "apple":{
        "test":"ok",
        "info":""
      },
      "gmail":{
        "test":"fail",
        "info":""
      },
      "ios":{
        "test":"ok",
        "info":""
      },
      "outlook":{
        "test":"fail",
        "info":""
      },
      "outlook_web":{
        "test":"fail",
        "info":""
      },
      "outlook_express":{
        "test":"fail",
        "info":""
      },
      "yahoo":{
        "test":"info",
        "info":"image not stretched"
      }
    }
  }
]

```
