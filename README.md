# mail-support

Check css support for the emails clients

**Wait stable version (v0.2.0) for install.**


## Options

- source_type
  - Type of source
  - 'file' or 'url'
  - Default -> 'file'


- source
  - source for test
  - 'path/to/source'
  - Default -> empty


- clients
  - filter clients for test
  - '*', ['gmail', 'ios'],
  - Default -> '*'


- reporter
  - type of result
  - 'json', 'tablelog'
  - Default -> tablelog


## Clients

| Client | Option |
| ------ | ------ |
| Android 4 (Gmail) | android |
| Apple Mail 6.5 | apple |
| Gmail (Web) | gmail |
| iPhone iOS 7/iPad | ios |
| Outlook 2007/10/13 | outlook |
| Outlook 03/Express/Mail | outlook_express |
| Outlook.com | outlook_web |
| Yahoo! Mail | yahoo |


## example

```js
import mailSupport from 'mail-support'

// mailSupport.test( source_type, source_dir, clients, reporter )

mailSupport.test('url', 'demo.com/style.css', '*', 'tablelog')

// result


mailSupport.test('file', './style.css', ['gmail', 'ios'], 'tablelog')

// result

```
