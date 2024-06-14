# 💻 React + Vite + Yarn Berry Boilerplate

---

## yarn V4 기반 Vite + React + Typescript 보일러 플레이트

- v4 부터 `.yarnrc.yml` 파일 내부의 `yarnPath` 를 참조하는 것이 아닌 `corepack` 사용

> #### Corepack
>
> 패키지 매니저 버전을 관리하는데 도움을 주는 도구로 node 와 패키지 매니저 사이의 브릿지 역할
> package.json 내부 `packageManager` 필드를 참조

- yarn berry pnp, zero-install 기능 사용
- create-vite `react-swc-ts` 템플릿 기반 제작
- eslint , prettier 적용

 <br/>


### 패키지 실행 방법
1. zipfs vscode extension 추가 / yarn dlx @yarnpkg/sdks vscode 실행 (하단 9번 참고)

<br/>

### 보일러 플레이트 제작 순서

1. yarn 설치 <br/>
   => `npm install -g yarn`

2. corepack 활성화 <br/>
   => `corepack enable`

3. create-vite 커맨드로 react-swc-ts 템플릿 기반 프로젝트 생성 <br/>
   =>`yarn create vite . --template react-swc-ts`

4. pnp 옵션 및 zero-install 사용을 위한 yarn-berry 설정파일 추가 <br/>
   => `vi ./yarnrc.yml`

```
enableGlobalCache: false
nodeLinker: pnp
```

5. yarn-berry 사용 (버전 2+ 확인) <br/>
   => ` yarn set version berry`

6. 의존성 설치 <br/>
   => `yarn OR yarn install`

7. pnp, zero-install 정상 적용 확인

   > .pnp.cjs / .pnp.loader.mjs 파일 생성 확인 (pnp) <br/>
   > .yarn/cache 아래 의존성 .zip 으로 설치 확인 (zero-install)

8. vite dev 서버 동작 시 node_modules/.vite 캐시 생성 방지를 위해 추가 설정

```
vite.config.ts 파일

cacheDir: './.vite' // 설정 추가


.gitignore 파일

# vite cache
.vite   // ignore 추가
```

<br/>

9. vscode IDE ts 설정 추가 <br/>
   => `zipfs` vscode extension 추가 <br/>
   => `yarn dlx @yarnpkg/sdks vscode` 실행

```
.vscode/extentions.json

{
  "recommendations": [
    "arcanis.vscode-zipfs",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}



.vscode/settings.json

{
  "search.exclude": {
    "**/.yarn": true,
    "**/.pnp.*": true
  },
  "eslint.nodePath": ".yarn/sdks",
  "prettier.prettierPath": ".yarn/sdks/prettier/index.js",
  "typescript.tsdk": ".yarn/sdks/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.tabSize": 2,
  "prettier.printWidth": 120
}

```

<br/>

### 주의. prettier v3 이상 및 eslint-config-prettier, eslint-plugin-prettier는 vscode에서 무한로딩이 걸려서 다운그레이드 처리
