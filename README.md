# cra-issue-8667
[create-react-app Issue #8667](https://github.com/facebook/create-react-app/issues/8667) demo. Page does not reload (with or without `FAST_REFRESH=false`) for previously-erroring TS code.

### Install
```
npm i
```

### Run (no difference for this bug)
```
npm run start
```

or

```
npm run start-without-fast-refresh
```



https://user-images.githubusercontent.com/1933021/124847399-02155280-df58-11eb-923a-9f52d19f0734.mp4

```
$ npx create-react-app --info
npx: installed 67 in 4.652s

Environment Info:

  current version of create-react-app: 4.0.3
  running from /Users/kfunk/.npm/_npx/66417/lib/node_modules/create-react-app

  System:
    OS: macOS 11.4
    CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz
  Binaries:
    Node: 14.12.0 - /usr/local/bin/node
    Yarn: Not Found
    npm: 6.14.8 - /usr/local/bin/npm
  Browsers:
    Chrome: 91.0.4472.114
    Edge: Not Found
    Firefox: 85.0
    Safari: 14.1.1
  npmPackages:
    react: ^17.0.2 => 17.0.2
    react-dom: ^17.0.2 => 17.0.2
    react-scripts: 4.0.3 => 4.0.3
  npmGlobalPackages:
    create-react-app: Not Found
```
