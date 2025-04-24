export default {
  // 코드 포맷팅 - 들여쓰기 및 공백
  useTabs: false, // 탭 대신 스페이스 사용
  tabWidth: 2, // 들여쓰기 너비 2칸
  printWidth: 100, // 한 줄 최대 길이 100자
  bracketSpacing: true, // 객체 리터럴의 중괄호 앞뒤에 공백 추가
  arrayBracketSpacing: false, // 배열 괄호 내부 공백 금지 (ESLint array-bracket-spacing rule과 일치)

  // 코드 포맷팅 - 구문 규칙
  singleQuote: false, // 문자열에 큰따옴표 사용
  semi: false, // 세미콜론 사용하지 않음 (ESLint semi rule과 일치)
  quoteProps: "as-needed", // 객체 속성에 따옴표 필요할 때만 사용
  trailingComma: "all", // 객체, 배열 등의 마지막 항목에 쉼표 추가

  // 함수 관련
  arrowParens: "always", // 화살표 함수 매개변수 항상 괄호 사용 (ESLint arrow-parens rule과 일치)

  // JSX 관련
  bracketSameLine: true, // JSX의 마지막 `>` 를 다음 줄로 내리기
  jsxSingleQuote: false, // JSX 내부 큰따옴표 사용 (ESLint react/jsx-curly-spacing rule과 일치)

  // 플랫폼 호환성
  endOfLine: "auto", // 개행 문자를 운영체제에 맞게 자동 설정 (ESLint prettier/prettier rule과 일치)

  // 추가 설정
  insertFinalNewline: true, // 파일 끝에 항상 빈 줄 추가 (ESLint eol-last rule과 일치)
  trimTrailingWhitespace: true, // 줄 끝 불필요한 공백 제거 (ESLint no-trailing-spaces rule과 일치)
  curly: true, // 중괄호 사용을 모든 제어문에 강제 (ESLint curly rule과 일치)
  maxEmptyLines: 2, // 최대 연속 빈 줄 제한 (ESLint no-multiple-empty-lines rule과 일치)
}
