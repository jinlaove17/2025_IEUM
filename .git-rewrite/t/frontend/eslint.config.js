import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import jsxA11y from "eslint-plugin-jsx-a11y"
import importPlugin from "eslint-plugin-import"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    globals: {
      naver: "readonly",
    },
    rules: {
      // ------------ Prettier 통합 설정 ------------
      // "prettier/prettier": [
      //   "error",
      //   {
      //     endOfLine: "auto", // 개행 문자를 운영체제에 맞게 자동으로 설정
      //   },
      // ],

      // eslint-config-prettier를 설치하면 이러한 규칙들을 비활성화할 수 있습니다.
      // ------------ React 관련 규칙 ------------
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // React Hooks 규칙 준수를 강제 (조건부 내에서 Hook 호출 금지 등)
      "react-hooks/rules-of-hooks": "error",
      // React의 useEffect 등에서 의존성 배열 규칙을 준수하도록 강제
      "react-hooks/exhaustive-deps": "warn",
      // 이미지 태그에 alt 속성 사용을 강제
      "jsx-a11y/alt-text": "warn",
      // 유효하지 않은 anchor 태그 사용을 방지
      "jsx-a11y/anchor-is-valid": "error",

      // ------------ 코드 품질 규칙 ------------
      // 빈 블록 구문을 허용하지 않음
      "no-empty": "error",
      // 불필요한 세미콜론을 허용하지 않음
      "no-extra-semi": "error",
      // 함수 선언에 재할당을 허용하지 않음
      "no-func-assign": "error",
      // 도달할 수 없는 코드를 허용하지 않음
      "no-unreachable": "error",
      // 선언되었지만 사용되지 않는 변수를 허용하지 않음 (단, _로 시작하는 인자는 무시)
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // 정의되지 않은 변수 사용을 허용하지 않음
      "no-undef": "error",
      // 느슨한 동등 연산자(==, !=) 대신 엄격한 동등 연산자(===, !==) 사용을 강제
      eqeqeq: ["error", "always"],
      // 조건문에서 할당 연산자 사용을 금지
      "no-cond-assign": ["error", "always"],
      // 항상 true/false로 평가되는 조건문을 허용하지 않음
      "no-constant-condition": "error",
      // 자기 자신과 비교하는 비교문을 허용하지 않음
      "no-self-compare": "error",
      // 변수나 함수를 정의하기 전에 사용하는 것을 금지
      "no-use-before-define": "error",
      // 한 문장에서 여러 변수에 할당하는 것을 금지 (a = b = c = 1)
      "no-multi-assign": "error",
      // 중첩 깊이 제한
      "max-depth": ["error", 4],

      // ------------ 코드 스타일 규칙 ------------
      // 문자열은 큰따옴표(")만 사용하도록 강제 (Prettier와 일치)
      quotes: ["error", "double"],
      // 파일 끝에 항상 빈 줄을 추가하도록 강제
      "eol-last": ["error", "always"],
      // 줄 끝에 불필요한 공백을 허용하지 않음
      "no-trailing-spaces": "error",
      // 중괄호 사용을 모든 제어문에 강제
      curly: "error",
      // else 블록 내에서 단일 if 문을 사용할 때 중첩 대신 else if를 사용하도록 강제
      "no-lonely-if": "error",
      // Yoda 조건(예: if (42 === age))을 허용하지 않음
      yoda: "error",
      // 함수를 함수 표현식으로만 정의하도록 강제 (함수 선언문 대신)
      "func-style": ["error", "expression"],
      // 최대 연속 빈 줄 제한
      "no-multiple-empty-lines": ["error", { max: 2 }],
      // 화살표 함수 매개변수 괄호 필수 (Prettier와 일치)
      "arrow-parens": ["warn", "always"],
      // 배열 괄호 내부 공백 금지
      "array-bracket-spacing": ["error", "never"],
      // 카멜케이스 강제 (속성 제외)
      camelcase: ["error", { properties: "never" }],

      // ------------ ES6+ 관련 규칙 ------------
      // 재할당되지 않는 변수는 const 사용을 강제
      "prefer-const": "error",
      // var 키워드 대신 let이나 const 사용을 강제
      "no-var": "error",
      // 템플릿 리터럴 사용 권장
      "prefer-template": "warn",
      // 구조 분해 할당 사용 권장
      "prefer-destructuring": ["warn", { array: true, object: true }],
      // 스프레드 연산자 사용 권장
      "prefer-spread": "warn",

      // ------------ TypeScript 관련 규칙 ------------
      // TypeScript에서 빈 인터페이스를 허용하지 않음
      "@typescript-eslint/no-empty-interface": "warn",
      // TypeScript에서 any 타입 사용 시 경고
      "@typescript-eslint/no-explicit-any": "warn",

      // ------------ 중복 import 관련 규칙 ------------
      // 동일한 모듈에서 중복 import를 허용하지 않음
      "no-duplicate-imports": "error",
      // 자기 자신 import 금지
      "import/no-self-import": "error",
      // 순환 참조 금지
      "import/no-cycle": "error",
      // 사용하지 않는 모듈 import 금지
      "import/no-unused-modules": "error",
      // import 구문을 파일 최상단에 위치
      "import/first": "error",
      // import 순서 규칙
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },
)
